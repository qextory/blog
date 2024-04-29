import '@/shared/config/mdx.css';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { allPosts } from '@/contentlayer/generated';
import { PostDetailPage } from '@/page/posts';
import { siteConfig } from '@/shared/config';
import { absoluteUrl } from '@/shared/lib';

interface PostPageProps {
  params: {
    slug: string[];
  };
}

const getPostFromParams = async ({ params }: PostPageProps) => {
  const slug = params.slug?.join('/') || '';
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    return null;
  }

  return post;
};

export const generateMetadata = async ({ params }: PostPageProps): Promise<Metadata> => {
  const post = await getPostFromParams({ params });

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: absoluteUrl(post.slug),
      images: [
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
      title: post.title,
      card: 'summary_large_image',
      description: post.description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 600,
          alt: siteConfig.name,
        },
      ],
      creator: '@qextory',
    },
  };
};

export const generateStaticParams = async (): Promise<PostPageProps['params'][]> => {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }));
};

const Page = async ({ params }: PostPageProps) => {
  const post = await getPostFromParams({ params });

  if (!post) {
    notFound();
  }

  return <PostDetailPage post={post} />;
};

export default Page;
