import { ChevronRightIcon } from '@radix-ui/react-icons';
import Balancer from 'react-wrap-balancer';

import { cn } from '@/shared/lib';
import { ScrollArea } from '@/shared/ui';
import { Mdx } from '@/widgets/mdx-components';

import { Post } from '.contentlayer/generated/types';

const PostDetailPage = ({ post }: { post: Post }) => {
  return (
    <main className='relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]'>
      <div className='mx-auto w-full min-w-0'>
        <div className='mb-4 flex items-center space-x-1 text-sm text-muted-foreground'>
          <div className='overflow-hidden text-ellipsis whitespace-nowrap'>{`${post.type}s`}</div>
          <ChevronRightIcon className='h-4 w-4' />
          <div className='font-medium text-foreground'>{post.title}</div>
        </div>
        <div className='space-y-2'>
          <h1 className={cn('scroll-m-20 text-4xl font-bold tracking-tight')}>
            {post.title}
          </h1>
          {post.description && (
            <p className='text-lg text-muted-foreground'>
              <Balancer>{post.description}</Balancer>
            </p>
          )}
        </div>
        <div className='pb-12 pt-8'>
          <Mdx code={post.body.code} />
        </div>
      </div>
      <div className='hidden text-sm xl:block'>
        <div className='sticky top-16 -mt-10 pt-4'>
          <ScrollArea className='pb-10'>
            <div className='sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12'>TOC</div>
          </ScrollArea>
        </div>
      </div>
    </main>
  );
};

export { PostDetailPage };
