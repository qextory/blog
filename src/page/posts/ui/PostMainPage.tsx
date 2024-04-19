'use client';

import { PostList } from '@/feature/posts';
import { ScrollArea } from '@/shared/ui';

const PostMainPage = () => {
  return (
    <div className='container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)]'>
      <aside className='fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block'>
        <ScrollArea className='h-full py-6 pr-6 lg:py-8'>
          <div>
            <h3 className='select-none uppercase'>contact</h3>
            <p>aiqextory@gmail.com</p>
          </div>
        </ScrollArea>
      </aside>
      <main className='relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]'>
        <PostList />
        <div className='hidden text-sm xl:block'></div>
      </main>
    </div>
  );
};

export { PostMainPage };
