"use client";

import React, { useState, useEffect, useRef } from "react";

export default function BookAppointment() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus trap when modal opens
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999]"
          onClick={() => setIsOpen(false)}
        >
          <div
            ref={modalRef}
            tabIndex={-1}
            className="bg-white w-[90%] max-w-3xl h-[80%] rounded-lg overflow-hidden relative shadow-lg animate-fadeIn outline-none"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-0 right-3 z-50 text-4xl text-gray-600 hover:text-red-600 transition duration-200"
              aria-label="Close modal"
              title="Close"
            >
              &times;
            </button>

            {/* Modal Title (optional) */}
            <div className="text-center py-2 text-xl font-semibold border-b text-gray-700">
              Book an Appointment
            </div>

            {/* Iframe for Booking */}
            <iframe
              src="https://kivihealth.com/iam/kunal.sayani.68p1u4blxsrm/bookslot"
              title="Book Appointment"
              className="w-full h-full border-none"
            />
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#1aaebc] text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-[#148d98] transition-colors duration-200"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}
