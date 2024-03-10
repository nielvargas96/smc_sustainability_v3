'use client'

import './style.scss';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
// import { useRef } from 'react';
// import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
// import Rounded from '../common/RoundedButton'
// import Magnetic from '../common/Magnetic'

import { footerItemsLeft } from '@/api/api'
import { footerItemsRight } from '@/api/api'


import SocialsLink from './socials';
import Subsidiary from './subsidiary';
import { useState } from 'react';



export default function Index() {
  // const container = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start end", "end end"]
  // })

  // const x = useTransform(scrollYProgress, [0, 1], [0, 100])
  // const y = useTransform(scrollYProgress, [0, 1], [0, 0])
  // const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])

  const [activeIndexLeft, setActiveIndexLeft] = useState(null);

  const toggleAccordionItemLeft = (index) => {
    setActiveIndexLeft(activeIndexLeft === index ? null : index);
  };

  const [activeIndexRight, setActiveIndexRight] = useState(null);

  const toggleAccordionItemRight = (index) => {
    setActiveIndexRight(activeIndexRight === index ? null : index);
  };

  const getYear = () => {
    return new Date().getFullYear();
  }

  return (
    <footer className="footer-container" id="footer-container">
      <div className="footer-body">
        <div className="footer-content">
          <div className="socials">
            <div className='f-logo'>
              <Image src="forbes.svg" alt='Time and Forbes' height={120} width={250} />
              {/* <Link className='footer-logo' href="https://www.sanmiguel.com.ph/" title="SMC">
                <Image src="smc_escudo_footer.svg" alt='SMC Footer Logo' height={90} width={60} />
              </Link> */}
            </div>

            <div className='socials-container'>
              <SocialsLink />
            </div>
          </div>

          {/* <div className="footer-logo">
            <Link href="https://www.sanmiguel.com.ph/" title="SMC">
              <Image src="smc_logo_footer.svg" width={270} height={80} alt="SMC LOGO" />
            </Link>
          </div> */}

          <div className="subsidiary-website">
            <Subsidiary /> <br />
            <Link className="btn subsidiary policies" href='https://www.sanmiguel.com.ph/page/company-policy' target='_blank'>View Corporate Policies
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clipPath="url(#clip0_1_536)">
                  <path d="M3.125 10H16.875" stroke="#2E2E2F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 3.125V16.875" stroke="#2E2E2F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_1_536">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
        </div>

        <div className='footer-accordion-container'>
          <div className='footer-accordion'>
            <div className='accordion-left'>
              {footerItemsLeft.map((item, index) => (
                <motion.div
                  key={index}
                  className={`f-item ${activeIndexLeft === index ? 'active' : ''}`}
                >
                  <div className='f-title' onClick={() => toggleAccordionItemLeft(index)}>
                    <p>{item.title}</p>
                    <div className='icon'>
                      {
                        activeIndexLeft === index ?
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <g clipPath="url(#clip0_382_865)">
                              <path d="M15 26.25C21.2132 26.25 26.25 21.2132 26.25 15C26.25 8.7868 21.2132 3.75 15 3.75C8.7868 3.75 3.75 8.7868 3.75 15C3.75 21.2132 8.7868 26.25 15 26.25Z" stroke="#464646" strokeWidth="2" strokeMiterlimit="10" />
                              <path d="M10.3125 15H19.6875" stroke="#464646" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                              <clipPath id="clip0_382_865">
                                <rect width="30" height="30" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          :
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <g clipPath="url(#clip0_382_865)">
                              <path d="M15 26.25C21.2132 26.25 26.25 21.2132 26.25 15C26.25 8.7868 21.2132 3.75 15 3.75C8.7868 3.75 3.75 8.7868 3.75 15C3.75 21.2132 8.7868 26.25 15 26.25Z" stroke="#464646" strokeWidth="2" strokeMiterlimit="10" />
                              <path d="M10.3125 15H19.6875" stroke="#464646" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M15 10.3125V19.6875" stroke="#464646" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                              <clipPath id="clip0_382_865">
                                <rect width="30" height="30" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                      }
                    </div>
                  </div>
                  {/* <AnimatePresence> */}
                  {/* {activeIndexLeft === index && ( */}
                  <motion.div
                    className='f-details'
                    initial={{ height: 0 }}
                    animate={{ height: activeIndexLeft === index ? 'auto' : 0 }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.text && <div dangerouslySetInnerHTML={{ __html: item.text }}></div>}
                    <p>{item.email && `Email: ${item.email}`}</p>
                    {/* {item.address && <div >{item.address}</div>} */}
                    {item.address && <div dangerouslySetInnerHTML={{ __html: item.address }}></div>}
                    <p>{item.fax && `Fax: ${item.fax}`}</p>
                    <p>{item.tel && `Telephone: ${item.tel}`}</p>
                    <p> {item.link && <>Link: <Link href={item.link} target='_blank' title={item.titleLink}>{item.titleLink}</Link></>} </p>
                    {item.image && <Image src={item.image} alt='Some Alt Text' />}
                  </motion.div>
                  {/* // )} */}
                  {/* </AnimatePresence> */}
                </motion.div>
              ))
              }
            </div>

            <div className='accordion-right'>
              {footerItemsRight.map((item, index) => (
                <motion.div
                  key={index}
                  className={`f-item ${activeIndexRight === index ? 'active' : ''}`}
                >
                  <div className='f-title' onClick={() => toggleAccordionItemRight(index)}>
                    <p>{item.title}</p>
                    <div className='icon'>
                      {
                        activeIndexRight === index ?
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <g clipPath="url(#clip0_382_865)">
                              <path d="M15 26.25C21.2132 26.25 26.25 21.2132 26.25 15C26.25 8.7868 21.2132 3.75 15 3.75C8.7868 3.75 3.75 8.7868 3.75 15C3.75 21.2132 8.7868 26.25 15 26.25Z" stroke="#464646" strokeWidth="2" strokeMiterlimit="10" />
                              <path d="M10.3125 15H19.6875" stroke="#464646" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                              <clipPath id="clip0_382_865">
                                <rect width="30" height="30" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          :
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <g clipPath="url(#clip0_382_865)">
                              <path d="M15 26.25C21.2132 26.25 26.25 21.2132 26.25 15C26.25 8.7868 21.2132 3.75 15 3.75C8.7868 3.75 3.75 8.7868 3.75 15C3.75 21.2132 8.7868 26.25 15 26.25Z" stroke="#464646" strokeWidth="2" strokeMiterlimit="10" />
                              <path d="M10.3125 15H19.6875" stroke="#464646" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M15 10.3125V19.6875" stroke="#464646" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                              <clipPath id="clip0_382_865">
                                <rect width="30" height="30" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                      }
                    </div>
                  </div>
                  {/* <AnimatePresence> */}
                  {/* {activeIndexRight === index && ( */}
                  <motion.div
                    className='f-details'
                    initial={{ height: 0 }}
                    animate={{ height: activeIndexRight === index ? 'auto' : 0 }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.text && <div dangerouslySetInnerHTML={{ __html: item.text }}></div>}
                    <p>{item.email && `Email: ${item.email}`}</p>

                    {item.address && <div dangerouslySetInnerHTML={{ __html: item.address }}></div>}

                    <p>{item.fax && `Fax: ${item.fax}`}</p>
                    <p>{item.tel && `Telephone: ${item.tel}`}</p>
                    <p> {item.link && <>Link: <a href={item.link}>{item.titleLink}</a></>} </p>
                    {item.image && <Image src={item.image} alt='Some Alt Text' />}
                  </motion.div>
                  {/* // )} */}
                  {/* </AnimatePresence> */}
                </motion.div>
              ))
              }
            </div>

            {/* <div className='f-item'>
              <div className='f-title'>
                <p>Corporate Head Office</p>
                <div className='icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <g clipPath="url(#clip0_382_865)">
                      <path d="M15 26.25C21.2132 26.25 26.25 21.2132 26.25 15C26.25 8.7868 21.2132 3.75 15 3.75C8.7868 3.75 3.75 8.7868 3.75 15C3.75 21.2132 8.7868 26.25 15 26.25Z" stroke="#464646" strokeWidth="2" strokeMiterlimit="10" />
                      <path d="M10.3125 15H19.6875" stroke="#464646" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15 10.3125V19.6875" stroke="#464646" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_382_865">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className='f-details'>
                <p>

                </p>
              </div>
            </div> */}


          </div>
        </div>

        <div className="copyright">
          <div className="container">
            Copyright &copy;{getYear()} San Miguel Corporation All rights reserved  |   <Link href="https://www.sanmiguel.com.ph/" title="San Miguel Corporation">San Miguel Corporation</Link>   | <Link href="/kasaganahan/data-privacy-and-security" title="Website Privacy Statement">Website Privacy Statement</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
