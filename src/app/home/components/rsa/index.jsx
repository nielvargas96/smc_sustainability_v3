"use client"

import Image from 'next/image'
import Link from 'next/link'
import Description from '@/components/common/Description'
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player'
import Magnetic from '@/components/common/Magnetic'

// import SMC_AVP from '/images/112223_5PM_ SMC_AVP.mp4'

import { variants_2 } from './anim'

import './style.scss'

export default function Rsa() {

  const refContainer = useRef(null);
  const refContainer2 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refContainer,
    offset: ['start end', 'end start']
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], ["0", "-160vh"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0", "-150vh"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0", "-100vh"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["0", "-120vh"]);

  const isInView = useInView(refContainer2, { once: true });

  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);


  const [handlePlayVideo, setHandlePlayVideo] = useState(false);

  const [previewVideo, setPreviewVideo] = useState(false);
  const [mainVideo, setMainVideo] = useState(false);

  const refContainerVideo = useRef(null);
  const viewVideo = useInView(refContainerVideo)

  useEffect(() => {
    if (viewVideo) {
      setPreviewVideo(true)
      setMainVideo(true)
      // console.log('true')
    } else {
      setPreviewVideo(false)
      setMainVideo(false)
      // console.log('false')
    }
  }, [viewVideo])

  const clickVideo = () => {
    setHandlePlayVideo(!handlePlayVideo);

    if (setHandlePlayVideo) {
      setMainVideo(true)
    }
  }


  return (
    <>
      <section className='section-2' ref={refContainer}>
        <motion.section className='card'>
          <div className='bg-gradient'>
            <Image fill={true} sizes={100} src="bg_gradient.png" priority alt='Background Gradient' />
          </div>

          <motion.div
            // variants={variants_2}
            // initial="initial"
            // animate={isInView ? 'visible' : 'hidden'}
            className='card-wrapper'
            style={{ y: y }}
          >
            <div className='description'>
              <motion.h2 className='heading-1'>
                <Description>Message from our President and CEO</Description>
              </motion.h2>

              <motion.div
                ref={refContainer2}
                className='img-wrapper img-inner'
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <Image src="SMC_CEO_RSA.png" priority quality={100} width={640} height={523} alt='Ramon S. Ang | President and Chief Executive Officer' />
                </motion.div>
              </motion.div>

              <div className='message'>
                <Description>
                  Our four goals and sustainability roadmap will define for San Miguel a way forward in a world where supplies of basic needs like water and energy are limited and where far too many Filipinos live below the poverty line.
                </Description>
              </div>

              <div className='persona'>
                <p className='name'>Ramon S. Ang</p>
                <p className='role'>President and Chief Executive Officer</p>
              </div>
            </div>
            <motion.div
              ref={refContainer2}
              className='img-wrapper'
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                exit={{ opacity: 0 }}
                className='img-outer'
              >
                <Image src="SMC_CEO_RSA.png" priority quality={100} width={640} height={523} alt='Ramon S. Ang | President and Chief Operating Officer' />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            // initial={{ scale: 0 }}
            // whileInView={{ scale: 1 }}

            transition={{ ease: "linear", duration: .25 }}
            className='action-button'
            style={{ y: y2 }}
          >
            <Magnetic>
              <Link className='btn-rounded' href="/presidents-message" title='Read More'>
                <span>Read more</span>
              </Link>
            </Magnetic>
          </motion.div>
        </motion.section>

        <motion.div className='video-container' ref={refContainerVideo}
          style={{ y: y4 }}
        >
          {
            !handlePlayVideo &&
            <div className='play-button' onClick={clickVideo}>
              <div className='border-play'>
                <svg height="60" width="60" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 14 16">
                  <path d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984Z" />
                </svg>
              </div>
            </div>
          }
          <div className='video-wrapper'>
            {
              hasWindow &&
              <>
                {!handlePlayVideo ?
                  <ReactPlayer
                    className="video"
                    playing={previewVideo}
                    url="https://sxrtmwec.forapprovalonly.net/sustainability/images/video/SMCAVP_review.mp4"
                    loop
                    width='100%'
                    height='100%'
                    playsinline={true}
                    muted={true}
                  />
                  :
                  <ReactPlayer
                    className="video"
                    playing={mainVideo ? mainVideo : previewVideo}
                    url="https://sxrtmwec.forapprovalonly.net/sustainability/images/video/SMCAVP.mp4"
                    controls={true}
                    loop
                    width='100%'
                    height='100%'
                  />
                }

              </>

            }
          </div>
        </motion.div>

      </section >


    </>
  )
}