"use client"

import './style.scss'
import { useRef } from 'react'
import Magnetic from '@/components/common/Magnetic'
import Description from '@/components/common/Description'
import { motion, useScroll, useTransform } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'

export default function AnnualReport() {

  const refContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refContainer,
    offset: ['start end', 'end start']
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <>
      <section className="section-7" ref={refContainer}>
        <div className="block-content" >
          <div className="card" >

            <div className="description-container">
              <div className="title">
                <h2>
                  <span>2022 Sustainability</span>
                  <span>Report</span> <br />
                  <span>&ldquo;Ready for Tomorrow&rdquo;</span>
                </h2>
              </div>
              <p>
                Our 2022 Sustainability Report entitled “Ready for Tomorrow” encapsulates our transformative journey toward a sustainable future. It reflects our readiness to drive change, innovate, and collaborate, as we help lay the foundation for a better world. At its core, “Ready for Tomorrow” acknowledges the need for immediate action and the urgency to address the complex challenges of climate change, resource depletion, and social inequities. It recognizes that tomorrow’s world will be shaped by today’s actions. We invite you to delve into our organization’s commitment to creating positive environmental, social, and economic impacts. Through this, we hope to inspire and engage our stakeholders to join us in building a world that is not only prepared for tomorrow but thrives in it. We believe that together, we can create a sustainable legacy that stands the test of time.
              </p>
            </div>

            <div className="img-container" >
              <Image priority src="annual_report.png" width={478} height={679} alt="Annual Report" />
              <Image priority src="annual_report_2.png" width={556} height={520} alt="Annual Report" />
              <motion.svg
                // initial={{ scale: 0 }}
                // whileInView={{ scale: 1 }}
                style={{ x }} xmlns="http://www.w3.org/2000/svg" width="117" height="117" viewBox="0 0 117 117" fill="none">
                <path d="M116.58 58.5C116.58 90.5325 90.6126 116.5 58.5801 116.5C26.5476 116.5 0.580078 90.5325 0.580078 58.5C0.580078 26.4675 26.5476 0.5 58.5801 0.5C90.6126 0.5 116.58 26.4675 116.58 58.5Z" fill="#1A7B0B" fillOpacity="0.7" />
              </motion.svg>
            </div>

          </div>


          <motion.div className='action-button'
            // initial={{ scale: 0, delay: 5 }}
            // whileInView={{ scale: 1 }}
            transition={{ ease: "linear", duration: .25 }}
            style={{ x }}>
            <Magnetic>
              <Link className='btn-rounded' target='_blank' href="https://www.sanmiguel.com.ph/files/reports/SMC_2022_SR_1012A_single.pdf" title='Read More'>
                <span>Read more</span>
              </Link>
            </Magnetic>
          </motion.div>
        </div>

      </section>
    </>)
}