import { sanityClient, urlFor } from '@/lib/sanity';
import Folder from '@/components/Folder';

export default async function Home() {
  const [settings, projects, aboutData] = await Promise.all([
    sanityClient.fetch(`*[_type == "siteSettings"][0]{ wallpaper }`),
    sanityClient.fetch(
      `*[_type == "project"]{
        _id,
        title,
        media[]{
          _key,
          mediaType,
          caption,
          image{
            asset->
          },
          videoUrl
        }
      }`
    ),
    sanityClient.fetch(
      `*[_type == "about"][0]{ name, bio, headshot, email, socialLinks }`
    ),
  ]);

  const wallpaperUrl = settings?.wallpaper
    ? urlFor(settings.wallpaper).url()
    : '';

  return (
    <main
      key={wallpaperUrl} // Add key to re-render on wallpaper change
      className="flex h-screen w-full flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${wallpaperUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Folder
        projects={projects}
        aboutData={aboutData}
      />
    </main>
  );
}
