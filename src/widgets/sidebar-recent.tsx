'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { allPosts } from '@/contentlayer/generated';
import { cn } from '@/shared/lib';

export const RecentPostsSidebarNav = () => {
  const pathname = usePathname();
  const posts = allPosts;

  return (
    <div className='w-full'>
      <div className={cn('pb-4')}>
        <h4 className='mb-1 rounded-md px-2 py-1 text-sm font-semibold'>최근 게시물</h4>
        {posts?.length && (
          <div className='grid grid-flow-row auto-rows-max text-sm'>
            {posts.map((item, index) => (
              <Link
                key={index}
                href={'#'}
                className={cn(
                  'group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline',
                  pathname === item.title
                    ? 'font-medium text-foreground'
                    : 'text-muted-foreground'
                )}>
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
