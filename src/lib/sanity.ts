import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '25c8k47q',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-06-09', // use current date or specific version
  useCdn: process.env.NODE_ENV === 'production',
};

export const sanityClient = createClient(sanityConfig);

export const urlFor = (source: SanityImageSource) =>
  imageUrlBuilder(sanityConfig).image(source);
