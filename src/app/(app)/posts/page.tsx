import { PostMainPage } from '@/page/posts';
import { genPageMetadata } from '@/shared/lib';

export const metadata = genPageMetadata({ title: 'Posts' });

const Page = () => {
  return <PostMainPage />;
};

export default Page;
