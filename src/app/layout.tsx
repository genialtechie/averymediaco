import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { sanityClient, urlFor } from '@/lib/sanity';
import './globals.css';
import StatusBar from '@/components/StatusBar';

const sfPro = localFont({
  src: './fonts/SF-Pro.ttf',
  variable: '--font-sf-pro',
});
const sfProDisplay = localFont({
  src: './fonts/SF-Pro-Display-Black.otf',
  variable: '--font-sf-pro-display',
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityClient.fetch(
    `*[_type=="siteSettings"][0]{ siteTitle, siteDescription, favicon }`
  );
  return {
    title: settings.siteTitle,
    description: settings.siteDescription,
    icons: { icon: urlFor(settings.favicon).url() },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${sfPro.variable} ${sfProDisplay.variable} antialiased`}
      >
        <StatusBar
          time={new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          })}
        />
        {children}
      </body>
    </html>
  );
}
