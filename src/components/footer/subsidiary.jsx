import { subsidiaryModalData } from "@/api/api"
import { useSubsidiaryModal } from '../modal/subsidiaryContext'
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import SubsidiaryModal from "../modal/subsidiaryModal";
// import "@/components/modal/modal.scss"

export default function Subsidiary() {

  // THIS CODE IS FOR SUBSIDIARY MODAL HOOK
  const { openModal } = useSubsidiaryModal();

  const handleOpenModal = () => {
    let data = subsidiaryModalData;
    openModal(data);
  };

  return <>
    <div className="subsidiary-container">
      <button onClick={handleOpenModal} className="btn subsidiary">View subsidiary websites
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
      </button>
    </div>

    {/* <SubsidiaryModal isModalOpen={isModalOpen} closeModal={closeModal} modalData={modalData} /> */}
  </>
}