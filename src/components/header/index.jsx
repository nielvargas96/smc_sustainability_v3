'use client'

import './style.scss'
import { useEffect, useState, useRef } from 'react';
import Nav from './sideNAv';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Magnetic from '../common/Magnetic';
import { navItems } from '@/api/api'
import { variantsNavHide } from './anim';
import { useMediaQuery } from 'usehooks-ts';

// import Rounded from '@/components/common/RoundedButton';

export default function Index() {
  const [isActive, setIsActive] = useState(false);
  const sideNavRef = useRef(null);

  const matches = useMediaQuery('(max-width: 1024px)');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isActive && sideNavRef.current && !sideNavRef.current.contains(event.target)) {
        setIsActive(false);
        document.body.removeAttribute("data-lenis-prevent")
      }
    };

    const handleClickInside = (event) => {
      if (isActive && event.target.tagName === 'A' && event.target.getAttribute('href')) {
        setIsActive(false);
        document.body.removeAttribute("data-lenis-prevent")
      }
    }

    if (isActive) {
      // Add event listeners when the burger menu is active
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('click', handleClickInside);
      document.body.classList.add('active');
    }

    return () => {
      // Remove the event listeners when the component unmounts or the menu is no longer active
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('click', handleClickInside);
      document.body.classList.remove('active');
    };
  }, [isActive]);

  const { scrollY } = useScroll();
  const [hideNav, setHideNav] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);


  useMotionValueEvent(scrollY, "change", (value) => {
    const prev = scrollY.getPrevious();

    if (matches) {
      if (value > prev && value > "150") {
        setHideHeader(true)
      } else {
        setHideHeader(false)
      }
    }

    if (prev && value > "150") {
      setHideNav(true)
    } else {
      setHideNav(false)
    }

  })



  const [activeSubItem1, setActiveSubItem1] = useState(null);

  const handleClickSubItem1 = (index) => {
    setActiveSubItem1((prevIndex) => (prevIndex === index ? null : index));
  };

  const [activeSubItem3, setActiveSubItem3] = useState(null);

  const handleClickSubItem3 = (index) => {
    setActiveSubItem3((prevIndex) => (prevIndex === index ? null : index));
  };


  return (
    <>
      {/* HEADER */}
      <motion.header className='header'
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100px" }
        }}
        animate={hideHeader ? "hidden" : "visible"}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
      >
        <motion.div
          // style={{ position: 'fixed', left: '5%' }}
          variants={{
            visible: { scale: 1, transition: { delay: .2 } },
            hidden: { scale: 0 }
          }}
          initial={{ scale: 0 }}
          animate={hideNav ? "visible" : "hidden"}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="logo logo-2"
        >
          <Link href="https://www.sanmiguel.com.ph/" title='San Miguel Corporation'>
            <Image className='first' src='smc.svg' width={53} height={55} quality={100} priority={true} alt='SMC Logo' />
            <Image className='last' src='smc.svg' width={32} height={46} quality={100} priority={true} alt='SMC Logo' />
          </Link>
        </motion.div>

        <motion.div
          variants={{
            visible: { y: 0, opacity: 1, transition: { delay: .2 }, zIndex: '1' },
            hidden: { y: "-100px", opacity: 0, zIndex: '-100' }
          }}
          animate={hideNav ? "hidden" : "visible"}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="logo">
          <Link href="https://www.sanmiguel.com.ph/" title='San Miguel Corporation'>
            <Image src='smc_logo.svg' width={63} height={65} quality={100} priority={true} alt='SMC Logo' />
            <Image src='smc_logo.svg' width={48} height={80} quality={75} priority={true} alt='SMC Logo' />
          </Link>
        </motion.div>

        <motion.div
          variants={{
            visible: { y: 0, opacity: 1, transition: { delay: .2 }, zIndex: '1' },
            hidden: { y: "-100px", opacity: 0, zIndex: '-100' }
          }}
          animate={hideNav ? "hidden" : "visible"}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="nav-menu-container"
        >
          <div className="nav-menu">
            {navItems.map((e, i) => (
              <div key={i} className='menu-item'>

                <Link className='item' href={e.href}>
                  {e.title === "News & Updates" || e.title === "Careers" ? (
                    <>
                      <span>{e.title}</span>
                    </>
                  ) : (
                    <>
                      <span>{e.title}</span>
                      <svg className='arrow-icon-1' width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.375 11.25L15 20.625L5.625 11.25" stroke="#30302C" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </Link>

                {e.subNav && e.subNav.length > 0 && (
                  <div className='sub-menu' >
                    {e.subNav.map((e, i) => (
                      <div className='sub-menu-item' key={i}>

                        {e.subNav2 && e.subNav2.length > 0 ? (
                          <div className='wrapper-item-1'>
                            {e.href === '#' ? (
                              <div className='no-link' onClick={() => handleClickSubItem1(i)}>
                                <Link className='link item-1' href={e.href} >
                                  {e.title}
                                </Link>
                                <div className='arrow-container' >
                                  <svg className={`arrow-icon-2 ${activeSubItem1 === i ? 'active' : ''}`} width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.375 11.25L15 20.625L5.625 11.25" stroke="#30302C" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </div>
                              </div>
                            ) : (
                              <>
                                <Link className='link item-1' href={e.href}>
                                  {e.title}
                                </Link>
                                <div className='arrow-container' onClick={() => handleClickSubItem1(i)}>
                                  <svg className={`arrow-icon-2 ${activeSubItem1 === i ? 'active' : ''}`} width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.375 11.25L15 20.625L5.625 11.25" stroke="#30302C" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </div>
                              </>

                            )}

                            {/* <div className='arrow-container' onClick={() => handleClickSubItem1(i)}>
                              <svg className={`arrow-icon-2 ${activeSubItem1 === i ? 'active' : ''}`} width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.375 11.25L15 20.625L5.625 11.25" stroke="#30302C" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div> */}
                          </div>
                        ) : (
                          <Link className='link item-1' href={e.href}>
                            {e.title}
                          </Link>
                        )}

                        {e.subNav2 && e.subNav2.length > 0 && (

                          <div className={`sub-menu-item-2 ${activeSubItem1 === i ? 'active' : ''}`}>
                            {
                              e.subNav2.map((e, i) => {
                                const hasSubNav3 = Array.isArray(e.subNav3) && e.subNav3.length > 0;

                                return (
                                  <div className='wrapper-item-2' key={i}>

                                    {hasSubNav3 ? (
                                      <div className='item-2-holder'>
                                        <Link className='link item-2' href={e.href}> {e.title}</Link>

                                        <div className='arrow-container' onClick={() => handleClickSubItem3(i)}>
                                          <svg className={`arrow-icon-3 ${activeSubItem3 === i ? 'active' : ''}`} width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24.375 11.25L15 20.625L5.625 11.25" stroke="#30302C" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                          </svg>
                                        </div>
                                      </div>
                                    ) :
                                      <Link className='link item-2' href={e.href}> {e.title}</Link>
                                    }

                                    <div className={`sub-menu-item-3 ${activeSubItem3 === i ? 'active' : ''}`} >
                                      {
                                        Array.isArray(e.subNav3) && e.subNav3.map((e, j) => (
                                          <div className='wrapper-item-3' key={j}>
                                            {/* Render something for each e */}
                                            {e.title && e.href && (
                                              <Link className='link item-3' href={e.href}>
                                                {e.title}
                                              </Link>
                                            )}
                                          </div>
                                        ))
                                      }
                                    </div>

                                  </div>
                                )

                              })
                            }
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div >

        <motion.div
          variants={{
            visible: { scale: 1, transition: { delay: .2 } },
            hidden: { scale: 0 }
          }}
          initial={{ scale: 0 }}
          animate={hideNav ? "visible" : "hidden"}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className='burger-menu-container'
        >

          <Magnetic className="">
            <div className='burger-menu'>
              <div onClick={() => {
                setIsActive(!isActive);
                // Add a class to the body element when the button is clicked
                if (!isActive) {
                  document.body.classList.add('active');
                  document.body.setAttribute("data-lenis-prevent", true)
                } else {
                  document.body.classList.remove('active');
                  document.body.removeAttribute("data-lenis-prevent")
                }
              }}>

                <div className='burger-button'>
                  <div className={`burger ${isActive ? 'burgerActive' : ""}`}></div>
                </div>
              </div>
            </div>
          </Magnetic>
        </motion.div>


      </motion.header >

      {/* SIDE NAVIGATION */}
      < aside className='side-nav-cointainer' ref={sideNavRef} >
        <AnimatePresence mode="wait">
          {isActive && <Nav />}
        </AnimatePresence>
      </aside >
    </>
  )
}
