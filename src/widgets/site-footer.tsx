import { siteConfig } from '@/shared/config';

const SiteFooter = () => {
  return (
    <footer className='py-6 md:px-8 md:py-0'>
      <div className='container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
        <p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
          Copyright ©{' '}
          <a
            href={siteConfig.links.github}
            target='_blank'
            rel='noreferrer'
            className='font-medium underline underline-offset-4'>
            qextory
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export { SiteFooter };
