"use client";
import React, { useState } from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { BsYoutube } from "react-icons/bs";

export default function CTA() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const toggleShare = () => {
    setIsShareOpen(!isShareOpen);
  };

  return (
    <div className="">
      <div
        className="fixed rounded-tl-lg rounded-bl-lg  bg-[#0084ff] z-50 top-[30vh] right-0
        max-lg:bottom-0 max-lg:top-auto max-lg:w-full max-lg:flex max-lg:flex-row-reverse max-lg:rounded-none"
      >
        {/* Phone Button */}
        <a
          href="tel://919967267567"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white p-3 shadow-md rounded-tl-lg max-lg:rounded-tl-none 
          hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-700 
          transition duration-200 flex items-center justify-center max-lg:w-full"
          aria-label="Call for appointment"
        >
          <FiPhoneCall size={22} />
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919967267567"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-3 shadow-md 
          hover:bg-[#1ebe5d] focus:bg-[#1ebe5d] active:bg-[#1ebe5d] 
          transition duration-200 flex items-center justify-center max-lg:w-full"
          aria-label="WhatsApp appointment"
        >
          <FaWhatsapp size={22} />
        </a>

        {/* Email Button */}
        <a
          href="mailto:contact@drkunalsayani.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1AAEBC] text-white p-3 shadow-md 
          hover:bg-[#5fc1ca] focus:bg-[#5fc1ca] active:bg-[#5fc1ca] 
          transition duration-200 flex items-center justify-center max-lg:w-full"
          aria-label="Email appointment"
        >
          <MdOutlineMailOutline size={22} />
        </a>

        {/* Share Button */}
        <div className="relative group max-lg:w-full">
          <button
            onClick={toggleShare}
            className="text-white max-lg:rounded-bl-none bg-[#0084ff] rounded-bl-lg p-3 flex items-center justify-center 
            hover:bg-[#006acc] focus:bg-[#006acc] active:bg-[#006acc] transition duration-200 w-full"
            aria-label="Share this page"
          >
            <IoMdShare size={24} />
          </button>

          {/* Share Icons */}
          <div
            className={`absolute max-lg:w-14 max-lg:justify-center max-lg:items-center top-[-8rem]
                lg:group-hover:top-12 right-0 max-lg:left-1 bg-white rounded-l-lg shadow-lg py-2 px-3 
               flex-col gap-3 flex transition-all duration-300
              ${isShareOpen ? " max-lg:-top-[11rem]" : " max-lg:top-0 "} 
              max-lg:rounded-tr-lg max-lg:rounded-br-lg w-full -z-10`}
          >
            <a
              href="https://www.instagram.com/drkunalsayani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E1306C] hover:scale-110 focus:scale-110 active:scale-110 transition text-xl max-lg:text-3xl"
              aria-label="Share on Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u="
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2] hover:scale-110 focus:scale-110 active:scale-110 transition text-xl max-lg:text-3xl"
              aria-label="Share on Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF0000] hover:scale-110 focus:scale-110 active:scale-110 transition text-xl max-lg:text-3xl"
              aria-label="Share on YouTube"
            >
              <BsYoutube />
            </a>
            <a
              href="https://www.linkedin.com/shareArticle?mini=true&url="
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077B5] hover:scale-110 focus:scale-110 active:scale-110 transition text-xl max-lg:text-3xl"
              aria-label="Share on LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
