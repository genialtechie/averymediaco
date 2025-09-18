'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import { AboutData } from '../types';

interface AboutWindowProps {
  aboutData: AboutData;
  onClose: () => void;
}

export default function AboutWindow({ aboutData, onClose }: AboutWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative flex h-[600px] w-[800px] flex-col rounded-lg bg-gray-100 bg-opacity-90 shadow-lg backdrop-blur-md"
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
              about avery media
            </h2>
            <div className="w-12" />
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-grow overflow-y-auto p-6">
          <div className="flex flex-col items-center text-black">
            <Image
              src={urlFor(aboutData.headshot).width(120).height(120).url()}
              alt={aboutData.name}
              width={120}
              height={120}
              className="rounded-full"
            />
            {/* <h1 className="mt-4 text-2xl font-bold">{aboutData.name}</h1> */}
            <div className="prose prose-sm mt-4 text-left">
              <PortableText value={aboutData.bio} />
            </div>

            <div className="mt-6 w-full border-t border-gray-300 pt-4">
              <h3 className="font-semibold">Contact</h3>
              <a
                href={`mailto:${aboutData.email}`}
                className="text-sm text-blue-600 hover:underline"
              >
                {aboutData.email}
              </a>
              {aboutData.socialLinks && aboutData.socialLinks.length > 0 && (
                <div className="mt-4 flex space-x-4">
                  {aboutData.socialLinks.map((link) => (
                    <a
                      key={link._key}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      {link.platform}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
