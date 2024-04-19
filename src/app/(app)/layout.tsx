import { PropsWithChildren } from 'react';

import { SiteFooter } from '@/widgets/site-footer';
import { SiteHeader } from '@/widgets/site-header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <SiteHeader />
      <main className='flex-1'>{children}</main>
      <SiteFooter />
    </>
  );
};
export default Layout;
