
import React, { useState } from 'react'
import './style.scss';
import { motion, AnimatePresence, useAnimate, stagger } from "framer-motion";
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import Link from 'next/link';
import Curve from './Curve';
import { navItems } from '@/api/api';


export default function Index() {
  const pathname = usePathname();
  const [openAccordion, setOpenAccordion] = useState(false);

  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(false);
    } else {
      setOpenAccordion(index);
    }
  };

  // const [openAccordion2, setOpenAccordion2] = useState(false);

  // const toggleAccordion2 = (index) => {
  //   if (openAccordion2 === index) {
  //     setOpenAccordion2(false);
  //   } else {
  //     setOpenAccordion2(index);
  //   }
  // };

  return (
    <motion.aside data-lenis-prevent variants={menuSlide} initial="initial" animate="enter" exit="exit" className="side-nav-menu">
      <div className="side-nav-body">

        {/* <div className='nav-head'>
          <p>Navigation</p>
        </div> */}

        <div className="nav">
          {navItems.map((data, index) => (
            <div key={index} className="side-menu-wrapper">
              {data.title === "News & Updates" || data.title === "Careers" ? (
                <>
                  <span onClick={() => toggleAccordion(index)} className='side-menu-item'>
                    <Link href={data.href} title={data.title}>{data.title}</Link>
                  </span>
                </>
              ) : (
                <span className='side-menu-item-wrapper-2'>
                  <Link href={data.href} title={data.title} className='side-menu-item'>{data.title}</Link>
                  <span onClick={() => toggleAccordion(index)} >
                    <svg className={`${openAccordion === index ? 'arrowActive' : 'arrow'}`} width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24.375 11.25L15 20.625L5.625 11.25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </span>
              )}

              {/* SUB NAVIGATION */}
              <AnimatePresence mode="wait">
                {openAccordion === index && (
                  <motion.div
                    initial={{ opacity: 0, height: "0" }}
                    animate={{ opacity: 1, height: "100%", overflow: "hidden" }}
                    exit={{ opacity: 0, height: "0" }}
                    className={`${openAccordion === index ? "active" : ''}`}
                  >

                    {data.subNav?.map((subNavItem, subIndex) => (
                      <motion.div
                        key={subIndex}
                        className="side-item"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ delay: subIndex * 0.1 }}
                      >
                        {
                          subNavItem.subNav2 && subNavItem.subNav2.length > 0 ? (
                            <div className="side-item-2" >
                              {
                                subNavItem.href === "#" ?
                                  <>
                                    <span className={subNavItem.href === pathname ? "activePage link" : 'link no-bg'}>
                                      {subNavItem.title}
                                    </span>
                                  </>
                                  :
                                  <>
                                    <Link href={subNavItem.href} className={subNavItem.href === pathname ? "activePage link" : 'link no-bg'}>
                                      {subNavItem.title}
                                    </Link>
                                  </>
                              }
                            </div>
                          ) : (
                            <div className="side-item-2" >
                              <Link href={subNavItem.href} className={subNavItem.href === pathname ? "activePage link" : 'link no-bg'}>
                                {subNavItem.title}
                              </Link>
                            </div>
                          )
                        }

                        {/* {openAccordion2 === index && ( )} */}
                        <div className='side-item-2-container'>
                          {subNavItem.subNav2?.map((e, i) => (
                            <div className='side-item-3-container' key={i}>
                              <Link className='link' href={e.href} title={e.title}>
                                {e.title}
                              </Link>


                              <div className='side-item-4-container'>
                                {
                                  e.subNav3?.map((e, i) => (
                                    <div key={i}>
                                      <Link className='link' href={e.href} title={e.title}>
                                        {e.title}
                                      </Link>
                                    </div>
                                  ))
                                }
                              </div>

                            </div>

                          ))
                          }
                        </div>

                      </motion.div>
                    ))}

                  </motion.div>
                )}
              </AnimatePresence>


            </div>

          ))}

        </div>

        {/* <div className='footer-head'>
          <p>MAIN SITE - SAN MIGUEL CORPORATION</p>
        </div> */}
        {/* Other linkout */}
        {/* <Others /> */}


      </div>
      <Curve />
    </motion.aside>
  )
}