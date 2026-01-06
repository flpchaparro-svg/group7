'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type InquiryType = 'general' | 'corporate' | 'sme';

interface ModalContextType {
  isOpen: boolean;
  inquiryType: InquiryType;
  openModal: (type: InquiryType) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>('general');

  const openModal = (type: InquiryType) => {
    setInquiryType(type);
    setIsOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  return (
    <ModalContext.Provider value={{ isOpen, inquiryType, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}




