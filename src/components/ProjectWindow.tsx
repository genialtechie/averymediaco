'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import { FullProject, MediaItem } from '../types';
import Icon from './icons/Icon';

interface ProjectWindowProps {
  project: FullProject;
  onClose: () => void;
}

const MediaGridItem = ({ item }: { item: MediaItem }) => {
  if (item.mediaType === 'video' && item.videoUrl) {
    return (
      <a
        href={item.videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center"
      >
        <Icon
          name="default-video"
          className="h-24 w-24 text-gray-700"
        />
        <p className="mt-2 text-center text-xs text-black">{item.caption}</p>
      </a>
    );
  }

  if (item.mediaType === 'image' && item.image) {
    return (
      <div className="flex flex-col items-center">
        <Image
          src={urlFor(item.image).width(200).height(200).url()}
          alt={item.caption}
          width={200}
          height={200}
          className="h-24 w-24 object-cover"
        />
        <p className="mt-2 text-center text-xs text-black">{item.caption}</p>
      </div>
    );
  }

  return null;
};

export default function ProjectWindow({
  project,
  onClose,
}: ProjectWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative flex h-full w-full flex-col rounded-lg bg-gray-100 bg-opacity-90 shadow-lg backdrop-blur-md md:h-[600px] md:w-[800px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="border-b border-gray-300 p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button
                onClick={onClose}
                className="h-3 w-3 rounded-full bg-red-500"
              />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <h2 className="text-sm font-semibold text-black">
              {project.title}
            </h2>
            <div className="w-12" />
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-grow overflow-y-auto p-4 md:p-6">
          <div className="grid gap-4 grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {project.media.map((item) => (
              <MediaGridItem
                key={item._key}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
