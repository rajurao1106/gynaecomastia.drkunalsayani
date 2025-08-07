"use client";
import Image from "next/image";
import {
  FaEnvelope,
  FaPhone,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import { MdPhone } from "react-icons/md";

export default function Footer() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = -150; // adjust this based on header height
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition + offset,
        behavior: "smooth",
      });
    }
  };
  return (
    <footer className="bg-[#3E3E43] text-white py-10 max-lg:pb-20">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-4 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:text-center">
        {/* About */}
        <div className="flex justify-center items-start max-lg:items-center flex-col max-lg:mb-10">
          <a href="https://drkunalsayani.com">
            <Image
              src="/hero/logo_footer.png"
              alt="Logo"
              className="w-26 mb-4"
              width={1000}
              height={1000}
            />
          </a>
          <p className="text-base leading-relaxed">
            Transform How You Feel Not Just How You Look{" "}
          </p>
        </div>

        {/* Links */}
        <div className="max-lg:mb-10">
          <h3 className="text-xl font-bold mb-4 ">LINKS</h3>
          <ul className="space-y-2 text-base">
            <li>
              <a
                href="#costing"
                onClick={(e) => handleScroll(e, "costing")}
                className="hover:text-[#1AAEBC]"
              >
                Get Costing
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "about")}
                className="hover:text-[#1AAEBC]"
              >
                About Doctor
              </a>
            </li>
            <li>
              <a
                href="#faq"
                onClick={(e) => handleScroll(e, "faq")}
                className="hover:text-[#1AAEBC]"
              >
                FAQ's
              </a>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div className="lg:pr-10 max-lg:mb-10 max-lg:px-8">
          <h3 className="text-xl font-bold mb-4">ADDRESS</h3>
          <a
            href="https://maps.google.com/maps/dir//Dr.KUNAL+SAYANI+TVAMEVA+AESTHETICS+-+501%2F502+Sapphire+Plaza+Dadabhai+road+Swami+Vivekananda+Rd,+Vile+Parle+West+Mumbai,+Maharashtra+400056/@19.1059305,72.8413161,13z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3be7b70ae5b76aef:0xbc36ee7fd47dd276"
            className="flex items-start gap-2 max-lg:gap-0 text-base"
          >
            <IoMdPin className="mt-1 text-[#1AAEBC] w-10" />
            TVAMEVA AESTHETICS - 501/502 Sapphire Plaza, Dadabhai Road, Swami
            Vivekananda Rd, Vile Parle West, Mumbai, Maharashtra
          </a>
        </div>

        {/* Contact */}
        <div className="max-lg:flex max-lg:justify-center max-lg:items-center max-lg:flex-col">
          <h3 className="text-xl font-bold mb-4">CONTACT US</h3>
          <div className="flex items-center gap-2 text-base mb-2">
            <FaEnvelope className="text-[#1AAEBC]" />
            <a
              href="mailto:contact@drkunalsayani.com"
              className="hover:text-white break-all hover:underline"
            >
              contact@drkunalsayani.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-base mb-4">
            <FaPhone className="text-[#1AAEBC]" />
            <li className="flex items-start gap-2">
              <a
                href="tel:+919967267567"
                className="hover:text-white hover:underline"
              >
                +91-9967267567,
              </a>
              <a
                href="tel:+9102246056767"
                className="hover:text-white hover:underline"
              >
                02246056767
              </a>
            </li>
          </div>
          <div className="flex gap-4 text-xl">
            <a href="#">
              <FaYoutube className="hover:text-[#1AAEBC]" />
            </a>
            <a href="#">
              <FaFacebookF className="hover:text-[#1AAEBC]" />
            </a>
            <a href="#">
              <FaInstagram className="hover:text-[#1AAEBC]" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Divider */}
      <hr className="w-full my-8 border-gray-600" />

      {/* Copyright */}
      <div className="text-center text-gray-300 text-base max-lg:text-xs px-4">
        © {new Date().getFullYear()}{" "}
        <a
          href="https://www.drkunalsayani.com/"
          className="text-white hover:underline"
        >
          drkunalsayani
        </a>
        . All rights reserved. Designed & Developed by{" "}
        <a
          href="https://pracharkarsolutions.com"
          className="text-white hover:underline"
        >
          pracharkarsolutions
        </a>
        {/* Disclaimer Section */}
        <section className="max-w-5xl text-base max-lg:text-xs mx-auto pt-5 text-white">
          <p className="mb-2 max-md:mb-8">
            <span className="text-yellow-400"> Disclaimer:</span> The
            information in the Web Site is provided for informational purposes
            only and is not meant to substitute the advice provided by your
            doctor or other health care professional. You should not use the
            information available on or through the Web Site for diagnosing or
            treating a health problem or disease, or prescribing any medication.
            All images used on this website are for illustrative purposes only,
            actual results and process may vary.
          </p>
        </section>
      </div>
    </footer>
  );
}
