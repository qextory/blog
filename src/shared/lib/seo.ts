import { Metadata } from 'next';

import { siteConfig } from '../config';

interface PageSEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  [key: string]: any;
}

export function genPageMetadata({
  title,
  description,
  image,
  url,
  ...rest
}: PageSEOProps): Metadata {
  return {
    title,
    description: description ?? siteConfig.description,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: description ?? siteConfig.description,
      type: 'website',
      url: url ?? './',
      siteName: siteConfig.title,
      images: image
        ? [image]
        : [
            {
              url: siteConfig.ogImage,
              width: 1200,
              height: 600,
              alt: siteConfig.name,
            },
          ],
      locale: siteConfig.locale,
    },
    twitter: {
      title: `${title} | ${siteConfig.name}`,
      card: 'summary_large_image',
      images: image ? [image] : [siteConfig.ogImage],
    },
    ...rest,
  };
}
