'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import { FullProject } from '../types';
import ProjectWindow from './ProjectWindow';

interface ProjectFolderProps {
  project: FullProject;
}

export default function ProjectFolder({ project }: ProjectFolderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={handleOpen}
      >
        <Image
          src="/assets/folder-icon.png"
          alt={project.title}
          width={80}
          height={80}
        />
        <p className="mt-2 text-center text-sm text-black">{project.title}</p>
      </div>
      <AnimatePresence>
        {isOpen && (
          <ProjectWindow
            project={project}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </>
  );
}
