"use client"

import React, { createContext, useLayoutEffect, useState, useEffect } from 'react';

export const SmoothScrollContext = createContext({
  scroll: null,
});

export const SmoothScrollProvider = ({ children, options }) => {
  const [scroll, setScroll] = useState(null);

  useEffect(() => {
    // console.log('SmoothScrollProvider mounted');

    if (typeof window !== 'undefined') {
      // console.log('Window is defined');

      if (!scroll) {
        (async () => {
          try {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            setScroll(
              new LocomotiveScroll({
                el: document.querySelector('[data-scroll-container]') ?? undefined,
                smooth: true,
                lerp: 0.03,
                multiplier: 1.4,
                reloadOnContextChange: true,
                touchMultiplier: 1,
                smoothMobile: true,
                smartphone: {
                  smooth: true,
                  breakpoint: 767,
                },
                tablet: {
                  smooth: true,
                  breakpoint: 1024,
                },
                ...options,
              })
            );
            // console.log('Smooth scroll initialized:', scroll);
          } catch (error) {
            console.error(`[SmoothScrollProvider]: ${error}`);
          }
        })();
      }

      return () => {
        scroll && scroll.destroy();
      };
    }
  }, [options, scroll]);

  return <SmoothScrollContext.Provider value={{ scroll }}>{children}</SmoothScrollContext.Provider>;
};

SmoothScrollContext.displayName = 'SmoothScrollContext';
SmoothScrollProvider.displayName = 'SmoothScrollProvider';
