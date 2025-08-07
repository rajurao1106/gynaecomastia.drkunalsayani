"use client"; 
import { BsWhatsapp } from "react-icons/bs";

export default function Whatsapp() {
  return (
    <button
      className="fixed bottom-6 max-lg:bottom-14 text-4xl p-3 left-6 max-lg:hidden z-50 bg-green-500 text-white 
        rounded-full shadow-lg  transition"
      aria-label="Scroll to top"
    >
      <a href="https://wa.me/919970939063">
        <BsWhatsapp />
      </a>
    </button>
  );
}
