'use client';

import { motion } from 'framer-motion';
import InfoIcon from './InfoIcon';
import { FullProject, AboutData } from '../types';
import ProjectFolder from './ProjectFolder';
import Icon from './icons/Icon';

interface FinderWindowProps {
  projects: FullProject[];
  aboutData?: AboutData;
  onClose: () => void;
}

export default function FinderWindow({
  projects,
  aboutData,
  onClose,
}: FinderWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative flex h-[500px] w-[700px] flex-col rounded-lg bg-white bg-opacity-80 shadow-lg backdrop-blur-md"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="border-b border-gray-300 p-4 pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button
                onClick={onClose}
                className="h-3 w-3 rounded-full bg-red-500"
              />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <h2 className="text-sm font-semibold text-black">avery media</h2>
            <div className="w-12" />
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-grow overflow-y-auto p-4">
          <div className="grid grid-cols-4 gap-4">
            {aboutData && <InfoIcon aboutData={aboutData} />}
            <div className="flex flex-col items-center">
              <Icon name="default-video" className="h-20 w-20 text-gray-700" />
              <p className="mt-2 text-center text-sm text-black">
                watch-me.gif
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="default-audio" className="h-20 w-20 text-gray-700" />
              <p className="mt-2 text-center text-sm text-black">vibes.mp3</p>
            </div>
            {projects.map((project) => (
              <ProjectFolder
                key={project._id}
                project={project}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
