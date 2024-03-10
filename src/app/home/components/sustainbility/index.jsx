"use client"

import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useScroll, useTransform } from "framer-motion"
import './style.scss'
import SustainabilityItem from './item'
import Image from 'next/image'
import Description from '@/components/common/Description'
import { useMediaQuery } from 'usehooks-ts'
import { variants_4, variants } from './anim'



export default function Sustainability() {
  const ref = useRef(null);
  // const ref2 = useRef(null);
  const isInView = useInView(ref, { once: true });
  // const isInView2 = useInView(ref2, { once: true });

  const refContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refContainer,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 330]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-200, 230]);

  const slideUpVariants = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.85,
        duration: .75
      }
    },
    exit: { opacity: 0, y: 100 },
  }

  const slideUpVariants2 = {
    initial: { y: 50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: .35,
        duration: .5
      }
    },
    exit: { y: 50, opacity: 0 }
  }

  const matches = useMediaQuery('(min-width: 1025px)');

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className='section-4' ref={refContainer}>
      <div className='block-content'>

        <motion.div
          variants={slideUpVariants}
          initial="initial"
          animate={isInView ? "animate" : "exit"}
          className='background-scroll'
        >

          <motion.div className='top' style={{ y: y }}>
            <Image src="sustainability_image_1.png" width={291} height={315} alt='Sustainability Background' />
            <Image src="sustainability_image_2.png" width={389} height={286} alt='Sustainability Background' />
          </motion.div>

          <motion.div className='bottom' style={{ y: y2 }}>
            <Image src="sustainability_image_3.png" width={291} height={243} alt='Sustainability Background' />
            <Image src="sustainability_image_4.png" width={315} height={243} alt='Sustainability Background' />
          </motion.div>
        </motion.div>

        <div className='description-container' >
          <div className='description'>
            <motion.h2
              variants={slideUpVariants2}
              initial="initial"
              animate={isInView ? "animate" : "exit"}

              className='heading-1'>Our Sustainability Pillars</motion.h2>
            {/* <motion.h3
              variants={slideUpVariants2}
              initial="initial"
              animate={isInView ? "animate" : "exit"}

              className='heading-xl'>A WORLD OF GOOD</motion.h3>
            <motion.p
              variants={slideUpVariants2}
              initial="initial"
              animate={isInView ? "animate" : "exit"}

            >We envision a world of good, where our business fosters a sustainable future that is good for the planet, good for people, and good for progress, benefiting present and future generations of Filipinos.</motion.p> */}
          </div>
        </div>


        <section ref={ref}>
          {
            isClient ?
              <>
                {
                  matches ?
                    <div className='wrapper' >
                      <SustainabilityItem isInView={isInView} />
                    </div>
                    :
                    <>
                      <div className='wrapper-mobile'>

                        {/* KALIKASAN */}
                        <div className='item'>
                          <div className='img'>
                            <motion.svg width="100" height="100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">

                              <motion.path
                                variants={variants_4}
                                animate={isInView ? "open" : "closed"}
                                d="M100 200C155.228 200 200 155.228 200 100C200 44.7717 155.228 0 100 0C44.7717 0 0 44.7717 0 100C0 155.228 44.7717 200 100 200Z" fill="#55B047" />

                              <motion.path
                                variants={variants}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}

                                d="M111.617 65.7706C111.617 65.7706 103.615 61.6956 96.6622 61.4979C89.531 61.2951 83.132 66.4827 85.9805 70.0432C88.829 73.6038 95.2381 70.0432 103.071 72.8917C110.905 75.7402 113.753 77.8765 118.738 80.7249C123.723 83.5734 128.707 82.8613 133.692 78.5886C138.677 74.3159 137.965 70.2678 137.965 67.9069C137.965 65.546 136.597 62.21 132.268 56.5131C127.939 50.8162 121.586 47.2556 121.586 47.2556C121.586 47.2556 115.889 42.983 104.495 41.5587C93.1017 40.1345 87.4048 41.5587 80.2836 44.4072C73.1624 47.2556 69.2459 50.8162 66.0414 55.0889C62.8369 59.3616 62.4808 60.7858 63.1929 62.21C63.9051 63.6342 66.7535 61.4979 66.7535 61.4979" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

                              <motion.path
                                variants={variants}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}

                                d="M79.5716 51.5284C79.5716 51.5284 74.5868 53.6647 66.7535 61.498C63.5821 64.6694 60.5453 70.5044 61.0566 73.6039C61.3855 75.5977 63.294 76.2503 63.9051 75.0281" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              <motion.path
                                variants={variants}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}

                                d="M90.2531 52.2405C90.2531 52.2405 80.3419 55.5638 73.8745 61.4979C67.3477 67.4866 63.5505 75.3793 63.1928 76.4523C62.4807 78.5887 61.7686 82.1492 63.905 83.5734C66.0413 84.9977 68.1776 84.2856 69.6018 81.4371C71.026 78.5887 74.5866 71.4675 78.8593 67.907C83.1319 64.3464 86.6925 61.4979 94.5258 61.4979C102.359 61.4979 111.616 65.7706 111.616 65.7706" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              <motion.path
                                variants={variants}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}

                                d="M87.3834 134.133C87.3834 134.133 95.3848 138.208 102.338 138.406C109.469 138.609 115.868 133.421 113.019 129.861C110.171 126.3 103.762 129.861 95.9287 127.012C88.0955 124.164 85.247 122.028 80.2623 119.179C75.2775 116.331 70.2926 117.043 65.3078 121.315C60.3231 125.588 61.0352 129.636 61.0352 131.997C61.0352 134.358 62.4028 137.694 66.7321 143.391C71.0614 149.088 77.4138 152.648 77.4138 152.648C77.4138 152.648 83.1107 156.921 94.5045 158.345C105.898 159.769 111.595 158.345 118.716 155.497C125.838 152.648 129.754 149.088 132.959 144.815C136.163 140.542 136.519 139.118 135.807 137.694C135.095 136.27 132.247 138.406 132.247 138.406" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              <motion.path
                                variants={variants}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}

                                d="M119.428 148.376C119.428 148.376 124.413 146.239 132.246 138.406C135.418 135.235 138.455 129.4 137.943 126.3C137.615 124.306 135.706 123.654 135.095 124.876" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              <motion.path
                                variants={variants}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}

                                d="M108.747 147.664C108.747 147.664 118.658 144.34 125.126 138.406C131.652 132.418 135.45 124.525 135.807 123.452C136.519 121.315 137.231 117.755 135.095 116.331C132.959 114.906 130.822 115.619 129.398 118.467C127.974 121.315 124.413 128.437 120.141 131.997C115.868 135.558 112.307 138.406 104.474 138.406C96.641 138.406 87.3835 134.133 87.3835 134.133" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              <motion.path
                                variants={variants}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}

                                d="M73.8181 97.1036C73.8181 97.1036 79.515 106.361 95.8936 104.225C112.272 102.088 120.818 97.1036 120.818 97.1036" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              <motion.path
                                variants={variants}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}

                                d="M98.742 96.3915C98.742 96.3915 95.1813 98.5278 95.1814 103.513C95.1814 108.497 100.878 109.922 100.878 109.922" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              <motion.path
                                variants={variants}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}

                                d="M82.3633 102.8C82.3633 101.376 82.3633 87.8461 95.8934 86.4219C101.889 85.7907 110.258 90.6679 117.257 91.4067C126.051 92.335 132.923 89.2703 132.923 89.2703C132.923 89.2703 130.075 97.1036 119.393 107.073C108.711 117.043 98.0298 117.043 90.9086 114.194C83.7875 111.346 82.3633 104.225 82.3633 102.8Z" stroke="white" strokeWidth="3" strokeLinejoin="round" />
                            </motion.svg>
                          </div>
                          <div className="desc">
                            <h3 className="label green"> Kalikasan</h3>
                            <p className="sub-label">Good For Planet</p>
                            <p className="text">We uplift the well-being of all the lives we touch, including people within our organization and in our communities.</p>
                          </div>
                        </div>

                        {/* KALINGA */}
                        <div className='item'>
                          <div className='img'>
                            <motion.svg width="100" height="100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <motion.path
                                variants={variants_4}
                                animate={isInView ? "open" : "closed"}

                                d="M100 200C155.228 200 200 155.228 200 100C200 44.7717 155.228 0 100 0C44.7717 0 0 44.7717 0 100C0 155.228 44.7717 200 100 200Z" fill="#F58232" />

                              <motion.path
                                variants={variants}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}
                                exit="exit"

                                // transition={{ ease: "linear", duration: .25 }}

                                d="M89.3286 155.866L88.695 138.128C88.695 138.128 92.4962 134.327 93.1297 129.259C93.7632 124.19 89.9621 120.389 88.0615 119.122C86.161 117.855 77.9252 114.688 73.4905 110.253C69.0558 105.818 69.6894 102.228 66.5218 100.116C63.3541 98.0048 60.1865 100.75 60.1865 102.651"
                                stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              <motion.path
                                variants={variants}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}


                                d="M68.4222 114.688C68.4222 114.688 61.01 111.52 60.1864 103.284C59.9963 101.384 59.5529 96.9489 61.4534 90.6137C63.354 84.2784 69.0557 78.5767 65.2546 76.6762C61.4534 74.7756 56.3853 83.6449 56.3853 83.6449C56.3853 83.6449 47.5159 100.117 50.6836 113.42C53.8512 126.724 68.4222 136.227 68.4222 136.227V146.997" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              <motion.path
                                variants={variants}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}

                                d="M109.671 155.866L110.305 138.128C110.305 138.128 106.504 134.327 105.87 129.259C105.237 124.19 109.038 120.389 110.938 119.122C112.839 117.855 121.075 114.688 125.509 110.253C129.944 105.818 129.311 102.228 132.478 100.116C135.646 98.0048 138.813 100.75 138.813 102.651"
                                stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              <motion.path
                                variants={variants}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}

                                d="M130.578 114.688C130.578 114.688 137.99 111.52 138.814 103.284C139.004 101.384 139.447 96.9489 137.547 90.6137C135.646 84.2784 129.944 78.5767 133.745 76.6762C137.547 74.7756 142.615 83.6449 142.615 83.6449C142.615 83.6449 151.484 100.117 148.316 113.42C145.149 126.724 130.578 136.227 130.578 136.227V146.997" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              <motion.path
                                variants={variants}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}

                                d="M85.5274 65.2727C85.5274 65.2727 74.124 65.9062 74.124 70.9744C74.124 76.0426 74.124 80.4773 74.124 83.0113C74.124 85.5454 78.5587 86.179 78.5587 86.179M78.8106 74.142V101.185" stroke="white" strokeWidth="3" strokeLinecap="square" strokeLinejoin="round" />
                              <motion.path
                                variants={variants}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}

                                d="M115.936 65.2727C115.936 65.2727 127.34 65.9062 127.34 70.9744C127.34 76.0426 127.34 80.4773 127.34 83.0113C127.34 85.5454 122.905 86.179 122.905 86.179M122.653 74.142V101.185" stroke="white" strokeWidth="3" strokeLinecap="square" strokeLinejoin="round" />
                              <motion.rect
                                variants={variants}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}
                                x="80.6921" y="50.3011" width="8.40341" height="10.9375" rx="3.5" stroke="white" strokeWidth="3" />
                              <motion.rect
                                variants={variants}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}
                                x="95.8967" y="46.5" width="8.40341" height="10.9375" rx="3.5" stroke="white" strokeWidth="3" />
                              <motion.rect
                                variants={variants}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}
                                x="112.368" y="50.3011" width="8.40341" height="10.9375" rx="3.5" stroke="white" strokeWidth="3" />

                              <motion.path
                                variants={variants}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}

                                d="M92.4962 83.6449C92.4962 83.6449 88.6951 83.0113 88.6951 79.8437C88.6951 76.6761 88.6951 72.875 88.6951 67.8068C88.6951 62.7386 97.5644 61.4716 100.732 61.4716C103.9 61.4716 112.135 62.7386 112.135 67.8068C112.135 72.875 112.135 76.6761 112.135 79.8437C112.135 83.0113 108.334 83.6449 108.334 83.6449M93.1297 71.6079V100.75M107.701 71.6079V100.75M100.732 83.0113V100.75" stroke="white" strokeWidth="3" strokeLinecap="square" strokeLinejoin="round" />
                            </motion.svg>
                          </div>
                          <div className="desc">
                            <h3 className="label orange"> Kalinga</h3>
                            <p className="sub-label">Good for People</p>
                            <p className="text"> We protect and nurture the environment, through urgent climate action, efficient resource management, and a circular economy approach.</p>
                          </div>
                        </div>


                        {/* KALINGA */}
                        <div className='item'>
                          <div className='img'>
                            <motion.svg width="100" height="100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <motion.path
                                variants={variants_4}
                                animate={isInView ? "open" : "closed"}
                                d="M100 200C155.228 200 200 155.228 200 100C200 44.7717 155.228 0 100 0C44.7718 0 0 44.7717 0 100C0 155.228 44.7718 200 100 200Z" fill="#00A4D6" />

                              <motion.path
                                variants={variants}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}

                                d="M144.57 60.975C144.57 60.975 146.688 60.2693 148.805 62.3866C151.857 65.4392 148.099 68.7383 148.099 68.7383L129.044 87.7935C129.044 87.7935 132.79 85.0118 136.101 84.9705C138.887 84.9358 141.512 87.0878 141.042 88.4993C140.571 89.9108 138.533 90.069 133.278 93.4395C128.552 96.4711 123.149 102.838 116.34 104.026C105.813 105.861 100.108 99.0855 100.108 99.0855C100.108 99.0855 94.4622 93.4395 94.4622 84.9705C94.4622 77.2073 99.4024 73.7076 103.637 68.0325C107.871 62.3575 109.283 56.7406 111.4 57.4463C113.122 58.0204 114.179 61.6808 113.517 64.5038C112.691 68.0325 108.577 72.9728 108.577 72.9728L129.044 51.8004C129.044 51.8004 131.867 48.2717 135.396 51.0946C138.924 53.9176 135.396 57.4463 135.396 57.4463" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              <motion.path
                                variants={variants}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}

                                d="M122.692 70.1497L139.63 53.2118C139.63 53.2118 142.453 49.683 145.982 52.506C149.511 55.329 145.982 58.8578 145.982 58.8578L128.338 76.5015" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              <motion.path
                                variants={variants}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}

                                d="M138.561 144.475C138.561 144.475 139.256 146.595 137.128 148.702C134.06 151.739 130.78 147.964 130.78 147.964L111.823 128.811C111.823 128.811 114.585 132.572 114.609 135.883C114.63 138.669 112.464 141.283 111.055 140.805C109.646 140.327 109.499 138.289 106.155 133.017C103.148 128.275 96.8079 122.84 95.6555 116.025C93.874 105.489 100.679 99.818 100.679 99.818C100.679 99.818 106.354 94.201 114.822 94.2443C122.586 94.2841 126.06 99.2421 131.713 103.506C137.367 107.769 142.976 109.209 142.26 111.323C141.677 113.042 138.011 114.08 135.191 113.404C131.667 112.559 126.748 108.421 126.748 108.421L147.815 128.995C147.815 128.995 151.329 131.836 148.488 135.351C145.647 138.865 142.137 135.318 142.137 135.318" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              <motion.path
                                variants={variants}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}

                                d="M129.498 122.55L146.349 139.574C146.349 139.574 149.864 142.415 147.023 145.929C144.181 149.444 140.671 145.897 140.671 145.897L123.118 128.163" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              <motion.path
                                variants={variants}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}

                                d="M55.4297 60.975C55.4297 60.975 53.3125 60.2693 51.1952 62.3866C48.1427 65.4392 51.901 68.7383 51.901 68.7383L70.9562 87.7935C70.9562 87.7935 67.2095 85.0118 63.8987 84.9705C61.1131 84.9358 58.488 87.0878 58.9585 88.4993C59.429 89.9108 61.4668 90.069 66.7217 93.4395C71.4481 96.4711 76.8506 102.838 83.6597 104.026C94.1865 105.861 99.8919 99.0855 99.8919 99.0855C99.8919 99.0855 105.538 93.4395 105.538 84.9705C105.538 77.2073 100.598 73.7076 96.3631 68.0325C92.1286 62.3575 90.7171 56.7406 88.5999 57.4463C86.8775 58.0204 85.8213 61.6808 86.4826 64.5038C87.3093 68.0325 91.4229 72.9728 91.4229 72.9728L70.9562 51.8004C70.9562 51.8004 68.1332 48.2717 64.6044 51.0946C61.0757 53.9176 64.6044 57.4463 64.6044 57.4463" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              <motion.path
                                variants={variants}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}

                                d="M77.3079 70.1497L60.3699 53.2118C60.3699 53.2118 57.5469 49.683 54.0182 52.506C50.4894 55.329 54.0182 58.8578 54.0182 58.8578L71.6619 76.5015" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              <motion.path
                                variants={variants}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}

                                d="M61.4393 144.475C61.4393 144.475 60.7444 146.595 62.8725 148.702C65.9407 151.739 69.2205 147.964 69.2205 147.964L88.178 128.811C88.178 128.811 85.4155 132.572 85.3911 135.883C85.3706 138.669 87.536 141.283 88.9451 140.805C90.3542 140.327 90.502 138.289 93.8456 133.017C96.8529 128.275 103.193 122.84 104.345 116.025C106.127 105.489 99.3217 99.818 99.3217 99.818C99.3217 99.818 93.6469 94.201 85.1781 94.2443C77.4149 94.2841 73.9406 99.2421 68.2873 103.506C62.634 107.769 57.0244 109.209 57.7409 111.323C58.3238 113.042 61.9896 114.08 64.8091 113.404C68.3336 112.559 73.2527 108.421 73.2527 108.421L52.1853 128.995C52.1853 128.995 48.6711 131.836 51.5121 135.351C54.353 138.865 57.8637 135.318 57.8637 135.318" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              <motion.path
                                variants={variants}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}

                                d="M70.5015 122.55L53.6505 139.574C53.6505 139.574 50.1362 142.415 52.9772 145.929C55.8183 149.444 59.3289 145.897 59.3289 145.897L76.8821 128.163" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </motion.svg>
                          </div>
                          <div className="desc">
                            <h3 className="label blue"> Kasaganahan</h3>
                            <p className="sub-label">Good For Progress </p>
                            <p className="text">We promote inclusive economic growth and ensure that progress occurs in harmony with nature and society, so that all may enjoy comfortable, secure, and prosperous lives.</p>
                          </div>
                        </div>

                      </div>
                    </>
                }
              </>
              :
              <>
              </>
          }
        </section >




      </div >


    </section >
  )
}
