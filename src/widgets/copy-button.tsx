'use client';

import { CheckIcon, CopyIcon } from '@radix-ui/react-icons';
import * as React from 'react';

import { cn } from '@/shared/lib';
import { Button } from '@/shared/ui';

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string;
  src?: string;
}

export async function copyToClipboardWithMeta(value: string) {
  navigator.clipboard.writeText(value);
}

export function CopyButton({ value, className, src, ...props }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  return (
    <Button
      size='icon'
      variant='ghost'
      className={cn(
        'relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50',
        className
      )}
      onClick={() => {
        copyToClipboardWithMeta(value);
        setHasCopied(true);
      }}
      {...props}>
      <span className='sr-only'>Copy</span>
      {hasCopied ? <CheckIcon className='h-3 w-3' /> : <CopyIcon className='h-3 w-3' />}
    </Button>
  );
}
