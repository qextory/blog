import { Icons } from '../ui';

/**
 * types/nav
 */
export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export type MainNavItem = NavItem;

export type SidebarNavItem = NavItemWithChildren;

/**
 * docs
 */
interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Posts',
      href: '/posts',
    },
    // {
    //   title: 'Tags',
    //   href: '/tags',
    // },
  ],
  sidebarNav: [
    // {
    //   title: '최근 게시물',
    //   items: [
    //     {
    //       title: 'Introduction',
    //       href: '/docs',
    //       items: [],
    //     },
    //     {
    //       title: 'Accordion',
    //       href: '/docs/components/accordion',
    //       items: [],
    //     },
    //   ],
    // },
    // {
    //   title: 'Most Viewed',
    //   items: [
    //     {
    //       title: 'Accordion',
    //       href: '/docs/components/accordion',
    //       items: [],
    //     },
    //     {
    //       title: 'Breadcrumb',
    //       href: '/docs/components/breadcrumb',
    //       items: [],
    //       label: 'New',
    //     },
    //   ],
    // },
  ],
};
