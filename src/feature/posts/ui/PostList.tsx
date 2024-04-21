import { format } from 'date-fns';
import { compareDesc } from 'date-fns';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { allPosts, Post } from '@/contentlayer/generated';

export const PostList = () => {
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  console.log(allPosts, posts);
  const displayPosts = posts;

  return (
    <div>
      <ul>
        {displayPosts.map((post) => {
          const { _id, date, title, description, slugAsParams } = post;
          const formatedDate = format(date, 'yyyy.MM.dd');
          return (
            <li key={_id} className='py-5'>
              <article className='flex flex-col space-y-2 xl:space-y-0'>
                <dl>
                  <dt className='sr-only'>Published on</dt>
                  <dd className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
                    <time dateTime={date}>{formatedDate}</time>
                  </dd>
                </dl>
                <div className='space-y-3'>
                  <div>
                    <h2 className='text-2xl font-bold leading-8 tracking-tight'>
                      <Link
                        href={`/posts/${slugAsParams}`}
                        className='text-gray-900 hover:underline dark:text-gray-100'>
                        {title}
                      </Link>
                    </h2>
                    {/* <div className='flex flex-wrap'>
                          {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                        </div> */}
                  </div>
                  <div className='prose max-w-none text-gray-500 dark:text-gray-400'>
                    <Balancer>{description}</Balancer>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
