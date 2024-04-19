import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return <div className='border-b'>{children}</div>;
};
export default Layout;
