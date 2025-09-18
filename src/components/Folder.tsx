'use client';

import { useState } from 'react';
;
import { AnimatePresence } from 'framer-motion';
import FinderWindow from './FinderWindow';
import { FullProject, AboutData } from '../types';
import FolderIcon from './icons/FolderIcon';

interface FolderProps {
  projects: FullProject[];
  aboutData?: AboutData;
}

export default function Folder({ projects, aboutData }: FolderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex flex-col items-center cursor-pointer" onClick={handleOpen}>
        <FolderIcon className="h-32 w-32 text-black" />
        <p className="mt-4 text-lg font-semibold text-white">avery media</p>
      </div>
      <AnimatePresence>
        {isOpen && (
          <FinderWindow
            projects={projects}
            aboutData={aboutData}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </>
  );
}
