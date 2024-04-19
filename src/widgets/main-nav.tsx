'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import { siteConfig } from '@/shared/config';
import { cn } from '@/shared/lib';
import { Icons } from '@/shared/ui';

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className='mr-4 hidden md:flex'>
      <Link href='/' className='mr-6 flex items-center space-x-1'>
        <Icons.logo className='h-8 w-8' />
        <span className='hidden font-bold sm:inline-block'>{siteConfig.name}</span>
      </Link>
      <nav className='flex items-center gap-4 text-sm lg:gap-6'>
        <Link
          href='/posts'
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname.startsWith('/posts') ? 'text-foreground' : 'text-foreground/60'
          )}>
          Posts
        </Link>
        {/* <Link
          href='/tags'
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/tags') ? 'text-foreground' : 'text-foreground/60'
          )}>
          Tags
        </Link> */}
      </nav>
    </div>
  );
}
