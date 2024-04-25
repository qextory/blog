'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  if (!GA_TRACKING_ID) {
    throw new Error();
  }

  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (
  action: Gtag.EventNames,
  { event_category, event_label, value }: Gtag.EventParams
) => {
  window.gtag('event', action, {
    event_category,
    event_label,
    value: value,
  });
};

// route가 변경될 때 gtag에서
export const useGtag = () => {
  const pathname = usePathname();

  const savedPathNameRef = useRef(pathname);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') return;

    const handleRouteChange = (url: URL) => {
      pageview(url);
    };

    if (savedPathNameRef.current !== pathname) {
      handleRouteChange(new URL(pathname, window.location.origin));

      savedPathNameRef.current = pathname;
    }
  }, [pathname]);
};
