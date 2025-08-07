"use client";

import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaUser, FaUserMd } from "react-icons/fa";
import { useRouter } from "next/navigation"; 

export default function About() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
      const router = useRouter();
    
      const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        purpose: "",
      });
      const [status, setStatus] = useState("");
      const [isSubmitting, setIsSubmitting] = useState(false);
    
      const iconMap = [FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt];
      const fieldNames = ["name", "email", "phone", "location"];
      const placeholders = [
        "Full Name",
        "Email Address",
        "Phone No",
        "Your Location",
      ];
      const inputTypes = ["text", "email", "tel", "text"];
    
      const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("");
        setIsSubmitting(true);
    
        const { name, email, phone, location, purpose } = formData;
        if (!name || !email || !phone || !location || !purpose) {
          setStatus("Please fill all fields.");
          setIsSubmitting(false);
          return;
        }
    
        try {
          const res = await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
    
          const data = await res.json();
          if (res.ok) {
            setStatus("Form submitted successfully!");
            router.push("/thank-you");
            setFormData({
              name: "",
              email: "",
              phone: "",
              location: "",
              purpose: "",
            });
          } else {
            setStatus(data.message || "Submission failed.");
          }
        } catch (err) {
          console.error(err);
          setStatus("Error submitting form.");
        } finally {
          setIsSubmitting(false);
        }
      };
    
    

  const images = ["image1", "image2", "image3", "image4"];
  const [show, setShow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(true);
    }, 120000); // 20 seconds
  }, []);
  return (
    <div>
      {/* About Doctor */}
      <section id="about" className="bg-white px-4 py-16">
        <div className="flex relative flex-col lg:flex-row items-start justify-center gap-12 max-w-6xl mx-auto">
          <div className="w-full  lg:w-1/3 text-center">
            <div className="">
              <Image
                src="/hero/about-doctor-logo.png"
                alt="Logo"
                className="w-[30rem] mb-4 absolute -left-0 opacity-20"
                width={1000}
                height={1000}
              />
              <Image
                src="/aboutdoctor/kunal_sayani1.png"
                alt="Dr. Kunal Sayani"
                width={500}
                height={500}
                className="rounded-lg object-cover w-full h-auto relative"
              />
            </div>
            <div className="w-full">
              <Slider {...settings}>
                {images.map((img, i) => (
                  <div key={i} className="px-2">
                    <div className="bg-white p-2 rounded-lg shadow-md w-26 h-26 max-md:w-24 max-md:h-24 mx-auto hover:scale-105 transition-transform">
                      <Image
                        src={`/aboutdoctor/${img}.png`}
                        alt={`Membership ${i + 1}`}
                        width={80}
                        height={60}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-[#10217D]">
              Dr. Kunal Sayani
              <span className="block text-lg font-normal text-black">
                Plastic Surgeon
              </span>
            </h2>
            <ul className="space-y-4 text-left">
              {[
                "Dr. Kunal Sayani is a Board-Certified Plastic & Aesthetic Surgeon based in Andheri, Mumbai.",
                "Over 8 years of experience in aesthetic and reconstructive surgery.",
                "Completed MCh and MS from Grant Medical College & Sir J.J. Hospital, Mumbai.",
                "Specializes in Hair Transplant, Tummy Tuck, Rhinoplasty, and Facial Aesthetic Surgeries.",
                "Known for delivering natural results with a patient-focused and safety-first approach.",
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-2">
                  <FaUserMd className="text-[#1AAEBC] mt-1" />
                  <p>{text}</p>
                </li>
              ))}
              <div className="flex items-center gap-3 sm:gap-5">
                <a
                  href="https://www.drkunalsayani.com/about-dr-kunal-sayani"
                  className="bg-[#1aaebc] hover:bg-[#148d98] text-white text-lg font-semibold px-6 py-3 max-lg:px-4 max-lg:py-2 rounded-md transition-colors duration-200"
                >
                  Read More
                </a>
              </div>
            </ul>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#10217D] mb-4">
                Expertise in Hair Transplant
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Hair Transplant", icon: "/hero/hair.png" },
                  {
                    label: "Scalp Micropigmentation",
                    icon: "/hero/prp.png",
                  },
                  { label: "PRP Therapy", icon: "/hero/hair2.png" },
                  { label: "FUE Technique", icon: "/hero/syringe.png" },
                ].map((item, i) => (
                  <button
                    key={i}
                    className="flex items-center  gap-2 border pr-2 border-gray-300 rounded-lg font-medium hover:bg-[#148d9821] transition"
                  >
                    <span className="text-xl">
                      <Image
                        src={item.icon}
                        alt=""
                        width={50}
                        height={50}
                        className="bg-blue-50 p-1 rounded-lg"
                      />
                    </span>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {show && (
        <div className="fixed inset-0 z-50 bg-[#1aaebc81] bg-opacity-50 flex justify-center items-center px-4">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
            <button
              onClick={() => setShow(false)}
              className="absolute top-0 right-3 text-4xl font-bold text-gray-600 hover:text-black"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-[#10217D] text-center mb-6">
              Book Your Appointment Today
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 w-full max-w-md mx-auto"
            >
              {iconMap.map((Icon, idx) => (
                <div key={idx} className="relative">
                  <Icon className="absolute left-3 top-3 text-[#1AAEBC]" />
                  <input
                    type={inputTypes[idx]}
                    name={fieldNames[idx]}
                    placeholder={placeholders[idx]}
                    value={formData[fieldNames[idx]]}
                    onChange={handleChange}
                    className="w-full pl-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
              ))}

              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                className="w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              >
                <option value="">Looking For</option>
                <option value="Hair Transplant">Hair Transplant</option>
                <option value="Hair Restoration PRP GFC Exosomes">
                  Hair Restoration PRP GFC Exosomes
                </option>
                <option value="Nano fat injection (SVF) for Hair Growth">
                  Nano fat injection (SVF) for Hair Growth
                </option>
                <option value="Other">Other</option>
              </select>

              {status && (
                <p
                  className={`text-center ${
                    status.includes("success")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {status}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1AAEBC] text-white hover:bg-[#148d98] py-2 rounded-lg transition font-bold"
              >
                {isSubmitting ? "Submitting..." : "BOOK NOW"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
