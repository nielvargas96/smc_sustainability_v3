"use client"

import Link from 'next/link'
import './modal.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { useModal } from './modalContext'
import Image from 'next/image'


export default function Modal() {
  // { data, isOpen, setIsOpen }
  const { isModalOpen, closeModal, modalData } = useModal();

  return (
    <AnimatePresence mode="wait">
      {
        isModalOpen &&
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          whileHover={{ cursor: "pointer" }}
          onClick={() => closeModal()}
          className="modal-container"
          id="modal-container">

          <div className='btn-modal-outer-container'>
            <button className="modal-close-button outer" onClick={() => closeModal()}>
              <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 30 30" fill="none">
                <path d="M10.1386 19.8614L19.8613 10.1387" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.1386 10.1386L19.8613 19.8613" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: .2 } }}
            whileHover={{ cursor: "auto" }}
            exit={{ y: 100, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="modal" >
            <div className="modal-header">
              <div className="modal-title">
                <Image src={modalData.img} width={75} height={75} alt={`icon ${modalData.id}`} />
                <h2 className={`heading-2 ${modalData.color}`}>{modalData.title}</h2>
              </div>

              <button className="modal-close-button inner" onClick={() => closeModal()}>
                <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 30 30" fill="none">
                  <path d="M10.1386 19.8614L19.8613 10.1387" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10.1386 10.1386L19.8613 19.8613" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="modal-body">
              <p className='short-text'>
                {modalData.text}
              </p>
              <p className='short-text'>
                {modalData.text2}
              </p>
              {modalData.labeled.map(label => (
                <div className='label-seperator' key={Object.keys(label)[0]}>
                  {label[Object.keys(label)[0]].map(progress => (
                    <div className='label-container' key={progress.text}>
                      <p className={`sub-title ${modalData.color}`}>{progress.text}</p>

                      <div className=''>
                        {progress.items.map(item => (
                          <div className='item' key={item.id}>
                            <Image src={item.img} width={50} height={50} alt={`icon ${item.id}`} />

                            {/* Check if there is a list */}
                            {item.list ? (
                              <div>
                                <p>
                                  {item.text}
                                </p>

                                <ul>
                                  {item.list.map((listItem, index) => (
                                    <li key={index}>{listItem.item}</li>
                                  ))}
                                </ul>
                              </div>
                            ) :
                              <p>
                                {item.text}
                              </p>
                            }

                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}

            </div>

          </motion.div>
        </motion.section >

      }
    </AnimatePresence>
  )
}