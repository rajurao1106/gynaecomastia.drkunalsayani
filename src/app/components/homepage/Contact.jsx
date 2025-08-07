"use client";

import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useRouter } from "next/navigation"; // <-- This is for App Router
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Contact() {
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
    
      const [show, setShow] = useState(false);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setShow(true);
        }, 120000); // 20 seconds
      }, []);
    
  return (
    <div>
        {/* Booking Section */}
      <section
        id="costing"
        className="container mx-auto flex max-lg:flex-col max-lg:text-center justify-center items-center gap-10 px-4 py-16"
      >
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl md:text-xl font-bold mb-4 text-[#10217D]">
            Get in Touch
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact Us To Get Better Information
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Reach out to us! We're here to provide you with comprehensive
            details and answer your questions. Contact us today for personalized
            assistance and enhanced understanding.
          </p>
        </div>
        <div className="w-full max-w-md p-6 max-lg:px-10 bg-white rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-6">
            Book Your Appointment Today
          </h3>
        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md mx-auto">
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
        <option value="Hair Restoration PRP GFC Exosomes">Hair Restoration PRP GFC Exosomes</option>
        <option value="Nano fat injection (SVF) for Hair Growth">Nano fat injection (SVF) for Hair Growth</option>
        <option value="Other">Other</option>
      </select>

      {status && (
        <p className={`text-center ${status.includes("success") ? "text-green-600" : "text-red-600"}`}>
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
      </section>
    </div>
  )
}
