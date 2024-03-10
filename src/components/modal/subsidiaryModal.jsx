"use client"
import './modal.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { useSubsidiaryModal } from './subsidiaryContext'
import Link from 'next/link';
import { scale } from '../header/anim';

export default function SubsidiaryModal() {

  const { isModalOpen, closeModal, modalData } = useSubsidiaryModal();

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
          id="subsidiary-modal-container">

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: .2 } }}
            whileHover={{ cursor: "auto" }}
            exit={{ y: 100, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="modal" >

            <div className="modal-header">
              <div className="modal-title">
                <h2 className={`heading-2`}>Subsidiary Websites</h2>
              </div>

              <button className="modal-close-button" onClick={() => closeModal()}>
                <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 30 30" fill="none">
                  <path d="M10.1386 19.8614L19.8613 10.1387" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10.1386 10.1386L19.8613 19.8613" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="modal-body" >
              {modalData.map((item, index) => (
                <p key={index}>
                  <Link href={item.link} target='_blank' title={item.title}>{item.title}</Link>
                </p>
              ))}
            </div>


          </motion.div>

        </motion.section >

      }
    </AnimatePresence >
  )
}