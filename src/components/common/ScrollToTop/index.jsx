"use client"
// import LocomotiveScroll from 'locomotive-scroll';
import Link from 'next/link';
import './style.scss'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function Index() {

  const { scrollY } = useScroll();
  const [hideScrollTop, sethideScrollTop] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    if (value > 800) {
      sethideScrollTop(true)
    } else {
      sethideScrollTop(false)
    }
  })

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <motion.div
      variants={{
        visible: { opacity: 1, y: "-10px" },
        hidden: { opacity: 0, y: 0 }
      }}
      initial={{ opacity: 0, y: 0 }}
      animate={hideScrollTop ? "visible" : " hidden"}
      transition={{ duration: 0.25, ease: 'easeInOut' }}

      className='scroll-to-top'>
      {/* Your content goes here */}
      <div onClick={() => scrollToTop()} >
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 20 15" fill="none">
          <path d="M16.5675 11.3177C16.5095 11.3758 16.4406 11.4219 16.3647 11.4533C16.2888 11.4848 16.2075 11.501 16.1253 11.501C16.0432 11.501 15.9619 11.4848 15.886 11.4533C15.8101 11.4219 15.7412 11.3758 15.6832 11.3177L9.87535 5.50909L4.06753 11.3177C3.95026 11.435 3.7912 11.5008 3.62535 11.5008C3.4595 11.5008 3.30044 11.435 3.18316 11.3177C3.06588 11.2004 3 11.0413 3 10.8755C3 10.7096 3.06588 10.5506 3.18316 10.4333L9.43316 4.1833C9.49121 4.12519 9.56014 4.07909 9.63601 4.04764C9.71188 4.01619 9.79321 4 9.87535 4C9.95748 4 10.0388 4.01619 10.1147 4.04764C10.1906 4.07909 10.2595 4.12519 10.3175 4.1833L16.5675 10.4333C16.6256 10.4914 16.6717 10.5603 16.7032 10.6362C16.7347 10.712 16.7508 10.7934 16.7508 10.8755C16.7508 10.9576 16.7347 11.039 16.7032 11.1148C16.6717 11.1907 16.6256 11.2596 16.5675 11.3177Z" fill="#2E2E2F" />
        </svg>
      </div>
    </motion.div>
  );
}