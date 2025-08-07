"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaHeartbeat,
} from "react-icons/fa";
import {
  FaUserMd,
  FaMicroscope,
  FaRegCheckCircle,
  FaStopwatch,
} from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { useRouter } from "next/navigation"; // <-- This is for App Router


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FAQSection from "./components/homepage/FAQSection";
import Testimonials from "./components/homepage/Testimonials";
import { IoIosHappy } from "react-icons/io";
import Footer from "./components/Footer";
import Knowledge from "./components/homepage/Knowledge";
import BookAppointment from "./components/BookAppointment";
import Hero from "./components/homepage/Hero";
import Stats from "./components/homepage/Stats";
import About from "./components/homepage/About";
import Navbar from "./components/Navbar";
import Contact from "./components/homepage/Contact";
import Map from "./components/homepage/Map";

export default function Page() {

  return (
    <div className="min-h-screen flex flex-col  ">
      <Navbar/>
      <Hero/>
      <Stats/>
      <About/>
      <Contact/>
      <Knowledge />
      <Testimonials />
      <FAQSection />
      <Map/>
      <Footer />
    </div>
  );
}
