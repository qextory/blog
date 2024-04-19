import { cn } from '@/shared/lib';

const MainPage = () => {
  return (
    <div className='container relative'>
      <section
        className={cn(
          'mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20'
        )}>
        HomePage
      </section>
    </div>
  );
};

export { MainPage };
