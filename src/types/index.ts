// A basic representation of a Sanity image object
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

// A simplified type for Portable Text mark definitions
export interface MarkDef {
  _key: string;
  _type: string;
  [key: string]: unknown; // Allows for other properties like href
}

// A simplified type for Portable Text blocks
export interface PortableTextBlock {
  _key: string;
  _type: 'block';
  children: {
    _key: string;
    _type: 'span';
    marks: string[];
    text: string;
  }[];
  markDefs: MarkDef[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}

export interface Project {
  _id: string;
  title: string;
}

export interface MediaItem {
  _key: string;
  mediaType: 'image' | 'video';
  image?: SanityImage;
  videoUrl?: string;
  caption: string;
}

export interface FullProject extends Project {
  media: MediaItem[];
}

export interface SocialLink {
  _key: string;
  platform: 'Instagram' | 'LinkedIn' | 'TikTok' | 'Twitter';
  url: string;
}

export interface AboutData {
  name: string;
  bio: PortableTextBlock[];
  headshot: SanityImage;
  email: string;
  socialLinks: SocialLink[];
}
