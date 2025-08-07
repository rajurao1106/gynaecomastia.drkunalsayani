import React from 'react'
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaHeartbeat,
  FaRegThumbsUp,
} from "react-icons/fa";
import {
  FaUserMd,
  FaMicroscope,
  FaRegCheckCircle,
  FaStopwatch,
} from "react-icons/fa";

export default function Stats() {
     const features = [
        {
          icon: <FaUserMd size={32} className="" />,
          title: "Certified Surgeon",
        },
        {
          icon: <FaMicroscope size={32} className="" />,
          title: "Advanced Technology",
        },
        {
          icon: <FaRegCheckCircle size={32} className="" />,
          title: "Top Class Results",
        },
        {
          icon: <FaRegThumbsUp size={32} className="" />,
          title: "Low Transection Rate",
        },
      ];
  return (
    <div>
        {/* Features */}
            <div className="bg-[#1aaebc] py-10">
              <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md flex flex-col items-center justify-center text-center p-5"
                  >
                    <p className="text-[#1aaebc]">{feature.icon}</p>
                    <p className=" font-semibold mt-2">{feature.title}</p>
                  </div>
                ))}
              </div>
            </div>
    </div>
  )
}
