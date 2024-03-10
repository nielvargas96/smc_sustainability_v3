"use client"

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function ProgressBarProvider() {
  return (
    <ProgressBar
      height="4px"
      color="#55B047"
      options={{ showSpinner: false }}
      shallowRouting
    />
  )
}
