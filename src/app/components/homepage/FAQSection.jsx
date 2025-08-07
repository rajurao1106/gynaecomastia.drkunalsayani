"use client";

import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What causes gynecomastia?",
    answer:
      "Gynecomastia is primarily caused by hormonal imbalances, especially an increase in estrogen or decrease in testosterone. It can also be linked to medications, medical conditions, obesity, or puberty.",
  },
  {
    question: "Is gynecomastia surgery suitable for me?",
    answer:
      "If you experience enlarged male breasts causing physical discomfort or emotional distress, and non-surgical treatments have been ineffective, you may be a candidate. A consultation with Dr. Sayani will determine the best course of action.",
  },
  {
    question: "Is gynecomastia surgery painful?",
    answer:
      "Some discomfort and swelling are normal after surgery but are typically well-controlled with medications. Most patients describe the pain as mild to moderate and manageable.",
  },
  {
    question: "How long does the surgery take?",
    answer:
      "The procedure usually lasts 1 to 2 hours, depending on the extent of tissue removal.",
  },
  {
    question: "Will there be visible scars?",
    answer:
      "Incisions are made in discreet locations such as around the areola or chest folds to minimize visible scarring. Scars fade significantly over time with proper care.",
  },
  {
    question: "Is gynecomastia surgery permanent?",
    answer:
      "Yes, the removal of glandular tissue and fat is permanent. However, weight gain or hormonal changes can affect chest appearance later.",
  },
  {
    question: "Can gynecomastia recur after surgery?",
    answer:
      "While surgery removes existing excess tissue, maintaining a stable weight and avoiding substances that can cause hormonal imbalances helps prevent recurrence.",
  },
  {
    question: "Can I return to normal activities after surgery?",
    answer:
      "Most patients return to non-strenuous work within a week and resume light exercise after 2-3 weeks. Full physical activity is usually permitted after 4–6 weeks, pending Dr. Sayani's evaluation.",
  },
  {
    question: "Does gynecomastia surgery affect nipple sensation?",
    answer:
      "Temporary changes in nipple sensation are common but usually improve within months. Permanent changes are rare.",
  },
  {
    question: "Are there non-surgical treatments for gynecomastia?",
    answer:
      "Mild cases may respond to medication or lifestyle changes, but surgery is the most effective and permanent solution for moderate to severe gynecomastia.",
  },
  
  {
    question: "Is the procedure covered by insurance?",
    answer:
      "Coverage varies by insurance provider and policy. If gynecomastia causes significant physical symptoms, some insurers may cover the procedure. It's advisable to consult your insurance company for specific information.",
  },
  {
    question: "Why choose Dr. Kunal Sayani for gynecomastia surgery?",
    answer:
      "Dr. Kunal Sayani is a highly experienced aesthetic and plastic surgeon with over 8 years of expertise in gynecomastia treatment. He uses advanced, minimally invasive techniques that ensure effective, safe, and natural-looking results, along with compassionate patient care throughout the treatment journey.",
  },
  {
    question: "What are common myths about gynecomastia?",
    answer:
      "Myth: Gynecomastia only affects overweight men. \n Fact: It can affect men of all body types due to hormonal imbalances or other causes.\n\n" +
      "Myth: Gynecomastia will go away on its own without treatment. \n Fact: Some cases resolve, especially in puberty, but many require surgery for permanent correction.\n\n" +
      "Myth: Gynecomastia surgery is very painful and requires long hospitalization. \n Fact: The surgery is minimally invasive with mild pain and usually done as a day procedure.\n\n" +
      "Myth: Gynecomastia surgery leaves large, noticeable scars. \n Fact: Scars are minimal and strategically placed to be inconspicuous.\n\n" +
      "Myth: Exercise alone can cure gynecomastia. \n Fact: Exercise can reduce fat but cannot remove glandular breast tissue causing gynecomastia.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex justify-center px-4 md:px-8 my-16">
      <div className="flex flex-col lg:flex-row w-full max-w-[1300px] gap-8">
        {/* Image Section */}
        <div className="relative w-full md:w-[485px] h-[300px] md:h-[461px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={"/images/services/men/Gynaecomastia.jpeg"}
            alt="Clinic Image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/100 to-transparent text-white p-6">
            <div className="flex items-center space-x-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-lg font-semibold">Opening Hours:</span>
            </div>
            <p className="text-sm">Mon - Sat : 10.00 AM - 8.00PM</p>
            <p className="text-sm">Sunday : Closed</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full">
          <h2 className="text-3xl md:text-5xl mb-6 text-[#10217D] font-marcellus">
            Got questions? We've got answers!
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`border rounded-lg overflow-hidden transition-all duration-300 shadow-sm ${
                    isOpen ? "border-[#40AEB9]" : "border-gray-200"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-4 py-4 bg-white flex justify-between items-center 
                    text-left hover:bg-gray-50 focus:outline-none"
                  >
                    <span className="text-base md:text-lg font-semibold text-[#000000]">
                      {faq.question}
                    </span>
                    <motion.span
                      className="text-2xl text-[#40AEB9]"
                      initial={false}
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isOpen ? <BsDash /> : <BsPlus />}
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-4 pb-4 bg-[#f9fafa] whitespace-pre-line">
                          <p className="text-gray-700 text-sm md:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}