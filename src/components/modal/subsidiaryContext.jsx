"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';

const SubsidiaryModalContext = createContext();

export function SubsidiaryModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = (data) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalData(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('active');
      document.documentElement.setAttribute("data-lenis-prevent", "true");
    } else {
      document.body.classList.remove('active');
      document.documentElement.removeAttribute("data-lenis-prevent");
    }
  }, [isModalOpen]);

  return (
    <SubsidiaryModalContext.Provider value={{ isModalOpen, openModal, closeModal, modalData }}>
      {children}
    </SubsidiaryModalContext.Provider>
  );
}

export function useSubsidiaryModal() {
  return useContext(SubsidiaryModalContext);
}