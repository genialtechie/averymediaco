'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import AboutWindow from './AboutWindow';
import Icon from './icons/Icon';
import { AboutData } from '../types';

interface InfoIconProps {
  aboutData: AboutData;
}

export default function InfoIcon({ aboutData }: InfoIconProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={handleOpen}
      >
        <Icon name="readme" className="h-20 w-20 text-gray-700" />
        <p className="mt-2 text-center text-sm text-black">INFO.txt</p>
      </div>
      <AnimatePresence>
        {isOpen && (
          <AboutWindow
            aboutData={aboutData}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </>
  );
}
