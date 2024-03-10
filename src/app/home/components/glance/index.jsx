"use client"

import Image from 'next/image'
import './style.scss'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

import { glanceItem } from '@/api/api'

import AnimatedCounter from '@/components/common/AnimatedCounter'
import { useMediaQuery } from 'usehooks-ts'


export default function SustainabilityGlance() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordionItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  const matches = useMediaQuery('(min-width: 1025px)');

  return (
    <>
      <section className="section-6">
        <div className="background-container">
          <Image src="sustainability_glance_bg.png" fill={true} sizes="100" alt="Background" />
        </div>
        <div className="block-content">
          <div className="header-title">
            <h2>Sustainability at a Glance</h2>
          </div>

          <div className="accordion-container">
            {glanceItem.map((item, index) => (
              <div key={index} className={`accordion-item ${activeIndex === index ? 'active' : ''}`}>
                <div className={`accordion-title ${item.color}`} onClick={() => toggleAccordionItem(index)}>
                  <h3 >{item.title}</h3>

                  <div className={`acc-arrow ${activeIndex === index ? 'active' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 17 17" fill="none">
                      <path d="M14.1794 6.69705L8.95215 11.9243C8.9036 11.9729 8.84595 12.0115 8.7825 12.0378C8.71904 12.0641 8.65102 12.0776 8.58232 12.0776C8.51363 12.0776 8.44561 12.0641 8.38215 12.0378C8.31869 12.0115 8.26104 11.9729 8.21249 11.9243L2.98522 6.69705C2.88713 6.59896 2.83203 6.46593 2.83203 6.32722C2.83203 6.1885 2.88713 6.05547 2.98522 5.95739C3.0833 5.8593 3.21634 5.8042 3.35505 5.8042C3.49376 5.8042 3.62679 5.8593 3.72488 5.95739L8.58232 10.8155L13.4398 5.95739C13.4883 5.90882 13.546 5.8703 13.6094 5.84401C13.6729 5.81773 13.7409 5.8042 13.8096 5.8042C13.8783 5.8042 13.9463 5.81773 14.0097 5.84401C14.0732 5.8703 14.1309 5.90882 14.1794 5.95739C14.228 6.00595 14.2665 6.06361 14.2928 6.12707C14.3191 6.19052 14.3326 6.25853 14.3326 6.32722C14.3326 6.3959 14.3191 6.46391 14.2928 6.52737C14.2665 6.59082 14.228 6.64848 14.1794 6.69705Z" fill="#2E2E2F" />
                    </svg>
                  </div>
                </div>

                <motion.div className={`accordion-details ${activeIndex === index ? 'active' : ''}`}
                  initial={{ height: 0 }}
                  animate={{ height: activeIndex === index ? 'auto' : 0 }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="acc-list"

                  >
                    {Array.isArray(item.items) && item.items.map((detail, index) => (
                      <div key={index} className="acc-item">
                        <div className="icons">
                          <Image src={detail.icon} height={45} width={45} alt='icon' />
                        </div>
                        <div className="desc">
                          <span className="heading-3">{detail.title} </span>
                          <p>{detail.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}