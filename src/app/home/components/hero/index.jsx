"use client"

import './style.scss'
import Image from 'next/image'
import ParallaxText from '@/components/common/ParallaxText'
import { useMediaQuery } from 'usehooks-ts'
import { useState, useEffect, useRef } from 'react'
import { animate, motion, useInView, useScroll, useTransform } from "framer-motion"

export default function Hero() {
  const matches = useMediaQuery('(min-width: 1025px)');

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const bgImgY3 = useTransform(scrollYProgress, [0, 1], ["0", "-15%"]);
  const bgImgY2 = useTransform(scrollYProgress, [0, 1], ["0", "-25%"]);
  const bgImgY1 = useTransform(scrollYProgress, [0, 1], [0, -700]);

  return (
    <section className='section-1' ref={ref}>
      <motion.figure
      >
        <Image
          src='hero/1-sky-ff.png'
          quality={100}
          // priority
          fill={true}
          sizes={100}
          alt="A World of Good"
        />
      </motion.figure>

      <motion.figure
        style={{ y: bgImgY3 }}
        initial={{ y: "5%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%" }}
        transition={{ delay: .75, duration: 1 }}
      >
        <Image
          src='hero/2-mountain-ff-2.png'
          // quality={100}
          // priority
          fill={true}
          sizes={100}
          alt="A World of Good"
          // data-scroll data-scroll-speed=".15"
          style={{ marginLeft: "-10px" }}
        />
      </motion.figure>

      <motion.figure
        style={{ y: bgImgY2 }}

        initial={{ y: "5%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%" }}
        transition={{ delay: .5, duration: 1 }}

      >
        <Image

          src='hero/3-mountain-ff.png'
          // data-scroll data-scroll-speed=".2"
          quality={100}
          // priority
          fill={true}
          sizes={100}
          alt="A World of Good"
        />
      </motion.figure>

      <motion.div className='text-wrapper'
        style={{ y: textY }}
      // data-scroll data-scroll-speed="-.25"
      >
        {
          isClient ?
            <>
              {
                matches ?
                  <h1 className='desktop-title' >
                    <div className='first-title'>
                      <div>
                        {/* <div data-scroll-container>
                          <div data-scroll-section>
                            <h1 data-scroll>Hey</h1>
                            <p data-scroll>👋</p>
                            <p data-scroll data-scroll-speed=".5">😬</p>
                          </div>
                          <div data-scroll-section>
                            <h2 data-scroll data-scroll-speed="5">What's up?</h2>
                          </div>
                        </div> */}
                        <motion.p
                          initial={{ y: "100%" }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: "100%" }}
                          transition={{ delay: 1, duration: .975 }}
                        >
                          A World of Good
                        </motion.p>
                      </div>
                      <div>
                        <motion.p
                          initial={{ y: "100%" }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: "100%" }}
                          transition={{ delay: 1, duration: .975 }} >
                          {/* Good */}
                        </motion.p>
                      </div>
                    </div>
                    {/* <div className='second-title'>
              <ParallaxText baseVelocity={2}>A World of Good&nbsp;</ParallaxText>
            </div> */}
                  </h1>
                  // <motion.h1
                  //   initial={{ opacity: 0 }}
                  //   animate={{ opacity: 1 }}
                  //   transition={{ delay: .2 }}
                  // >

                  //   <ParallaxText baseVelocity={2}>A World of Good&nbsp;</ParallaxText>

                  // </motion.h1>
                  :
                  <h1>
                    <div><motion.p
                      initial={{ y: "100%" }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "100%" }}
                      transition={{ delay: .2, duration: .5 }}
                    >
                      A World of
                    </motion.p></div>
                    <div><motion.p
                      initial={{ y: "100%" }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "100%" }}
                      transition={{ delay: .4, duration: .5 }} >
                      Good
                    </motion.p></div>
                  </h1>
              }
            </> : <></>
        }
      </motion.div>

      <motion.figure
      >
        <Image
          src='hero/5-bg-white.png'
          quality={100}
          // priority
          fill={true}
          sizes={100}
          alt="White background"
        />
      </motion.figure>

      <motion.figure
        className='front-img'
        style={{ y: bgImgY1 }}

      >
        <Image
          src='hero/4-main-ff.png'
          quality={100}
          // priority
          fill={true}
          sizes={100}
          alt="A World of Good"
        // data-scroll data-scroll-speed=".75"
        />
      </motion.figure>

    </section >
  )

}
