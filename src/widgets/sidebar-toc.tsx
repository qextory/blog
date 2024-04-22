'use client';

import { useEffect, useMemo, useState } from 'react';

import { useMounted } from '@/shared/hooks';
import { cn } from '@/shared/lib';
import { Toc } from '@/shared/lib/toc';
import { ScrollArea } from '@/shared/ui';

export const TOCSidebar = ({ toc }: { toc: Toc }) => {
  const itemIds = useMemo(() => {
    return toc.flatMap((item) => {
      const itemId = item.url.split('#')[1];
      return itemId ? [itemId] : [];
    });
  }, [toc]);

  const mounted = useMounted();
  const activeHeadingId = useActiveItem(itemIds);

  if (!toc || !mounted) {
    return null;
  }

  return (
    <div className='hidden text-sm xl:block'>
      <div className='sticky top-16 -mt-10 pt-4'>
        <ScrollArea className='pb-10'>
          <div className='sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12'>
            <div className='space-y-2'>
              <p className='text-slate-8 my-2 text-sm font-medium'>목차</p>
              <Tree tree={toc} activeItem={activeHeadingId} />
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

const useActiveItem = (itemIds: string[]) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );

    itemIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);

  return activeId;
};

interface TreeProps {
  tree: Toc;
  level?: number;
  activeItem: string | null;
}

const Tree = ({ tree, activeItem }: TreeProps) => {
  const minDepth = Math.min(...tree.map((item) => item.depth));
  return tree?.length ? (
    <ul className={cn('m-0 list-none')}>
      {tree.map((item, index) => {
        return (
          <li
            key={index}
            className={cn('mt-0 pt-2')}
            style={{ marginLeft: (item.depth - minDepth) * 10 }}>
            <a
              href={item.url}
              className={cn(
                'inline-block no-underline transition-colors hover:text-foreground',
                item.url === `#${activeItem}`
                  ? 'font-medium text-foreground'
                  : 'text-muted-foreground '
              )}>
              {item.value}
            </a>
          </li>
        );
      })}
    </ul>
  ) : null;
};
