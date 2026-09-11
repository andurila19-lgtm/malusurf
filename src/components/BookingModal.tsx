"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useBookingModal } from "@/context/BookingModalContext";
import BookingForm from "./BookingForm";

export default function BookingModal() {
  const { isOpen, initialPackage, closeBookingModal } = useBookingModal();

  // Prevent background body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBookingModal}
            className="fixed inset-0 bg-primary-dark/80 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Dialog Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 w-full max-w-xl my-auto"
          >
            {/* Close Button */}
            <button
              onClick={closeBookingModal}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 rounded-full bg-surface-low text-primary shadow-sm flex items-center justify-center hover:bg-sand transition-colors border border-outline-light cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Booking Form (Pass isModal=true for 1-screen zero-scroll mobile layout) */}
            <BookingForm
              initialPackage={initialPackage}
              onSuccess={closeBookingModal}
              isModal={true}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

