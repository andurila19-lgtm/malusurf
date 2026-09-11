"use client";

import React, { createContext, useContext, useState } from "react";

interface BookingModalContextType {
  isOpen: boolean;
  initialPackage: string;
  openBookingModal: (packageId?: string) => void;
  closeBookingModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export function BookingModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialPackage, setInitialPackage] = useState("private-lesson");

  const openBookingModal = (packageId?: string) => {
    if (packageId) {
      setInitialPackage(packageId);
    }
    setIsOpen(true);
  };

  const closeBookingModal = () => {
    setIsOpen(false);
  };

  return (
    <BookingModalContext.Provider
      value={{
        isOpen,
        initialPackage,
        openBookingModal,
        closeBookingModal,
      }}
    >
      {children}
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error("useBookingModal must be used within a BookingModalProvider");
  }
  return context;
}
