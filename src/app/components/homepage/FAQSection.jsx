"use client";

import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What is a hair transplant?",
    answer:
      "A hair transplant is a surgical procedure that moves healthy hair follicles from a dense donor area (usually the back or sides of the head) to areas of the scalp experiencing thinning or baldness. The goal is to restore natural hair growth and create a fuller, more youthful appearance.",
  },
  {
    question: "Who is a good candidate for a hair transplant?",
    answer:
      "Ideal candidates are individuals with male or female pattern baldness, sufficient healthy donor hair, and realistic expectations about the results. General good health is also important. Dr. Kunal Sayani will assess your suitability during a detailed consultation.",
  },
  {
    question: "What are the different types of hair transplant procedures?",
    answer:
      "The two primary methods are:\n• FUE (Follicular Unit Extraction): Individual follicular units are extracted directly from the donor area, leaving tiny, almost undetectable dot scars.\n• FUT (Follicular Unit Transplantation) / Strip Method: A strip of scalp tissue is removed from the donor area, from which follicular units are dissected. This leaves a linear scar. Dr. Kunal Sayani will recommend the best technique for your specific needs.",
  },
  {
    question: "How long does a hair transplant procedure take?",
    answer:
      "The duration varies significantly depending on the number of grafts needed. A smaller procedure might take 4-6 hours, while a larger session could last 8-10 hours, often spread over one or two days.",
  },
  {
    question: "Is a hair transplant painful?",
    answer:
      "During the procedure, you will receive local anesthesia, so you should not feel any pain. After the procedure, you may experience mild discomfort, soreness, and numbness, which can be managed with prescribed pain medication.",
  },
  {
    question: "Will my transplanted hair look natural?",
    answer:
      "Absolutely. Dr. Kunal Sayani's expertise and artistic skill are crucial for natural results. He meticulously designs the hairline and places each graft at the correct angle, direction, and density to mimic natural hair growth, ensuring an undetectable and aesthetically pleasing outcome.",
  },
  {
    question: "How much hair can be transplanted in one session?",
    answer:
      "The number of grafts transplanted in one session depends on the patient's donor hair density, the area to be covered, and the chosen technique. Dr. Kunal Sayani will determine the optimal number for your case during the consultation, always prioritizing safety and density.",
  },
  {
    question: "Will I need more than one hair transplant session?",
    answer:
      "This depends on the extent of your hair loss, the desired density, and the availability of donor hair. Some patients achieve their goals in one session, while others may opt for a second session years later if more hair loss occurs or if they desire even greater density.",
  },
  {
    question: "What is the recovery like after a hair transplant?",
    answer:
      "You can typically return to light activities within a few days. Swelling and scabbing are common for the first week or two. Most transplanted hairs will shed around 2-4 weeks post-op (shock loss), and new growth usually begins within 3-4 months.",
  },
  {
    question: "How long does it take for the transplanted hair to grow?",
    answer:
      "Initial shedding of transplanted hair occurs around 2-4 weeks. New growth typically begins around 3-4 months. Significant growth and thickening will be noticeable by 6-9 months, with final results becoming fully apparent around 12-18 months.",
  },
  {
    question: "Are the results of a hair transplant permanent?",
    answer:
      "Yes, the transplanted hair follicles are typically taken from the donor area (back and sides of the head), which are genetically resistant to the hormone that causes balding. Therefore, these transplanted hairs will continue to grow permanently and are not susceptible to future hair loss.",
  },
  {
    question: "Will there be scars after a hair transplant?",
    answer:
      "Yes, any surgical procedure leaves scars.\n• FUE: Leaves tiny, dot-like scars in the donor area, which are often barely visible, even with very short hair.\n• FUT: Leaves a linear scar in the donor area, which is usually thin and easily concealed by surrounding hair. Dr. Kunal Sayani is skilled at minimizing scar visibility.",
  },
  {
    question: "Can I wear my hair short after an FUE transplant?",
    answer:
      "Yes, one of the advantages of FUE is that the donor area heals with tiny, scattered dot scars, allowing you to wear your hair much shorter than with FUT, where a linear scar might be visible.",
  },
  {
    question: "When can I resume normal activities and exercise?",
    answer:
      "Light activities can usually be resumed within a few days. Strenuous exercise, heavy lifting, and swimming should be avoided for at least 2-4 weeks, or as advised by Dr. Kunal Sayani, to protect the grafts and aid healing.",
  },
  {
    question: "Myth: Hair transplant results look unnatural, like 'pluggy' hair.",
    answer:
      "Fact: This is an outdated myth. Modern hair transplant techniques, especially those utilized by Dr. Kunal Sayani (FUE and refined FUT), focus on transplanting individual follicular units. This, combined with careful artistic placement that mimics natural growth patterns, ensures natural-looking results that are virtually undetectable.",
  },
  {
    question: "Myth: Hair transplants are only for men.",
    answer:
      "Fact: While male pattern baldness is a common indication, hair transplants are also a highly effective solution for women experiencing female pattern hair loss, hair loss due to trauma, or thinning around the hairline. Dr. Kunal Sayani customizes procedures for both men and women.",
  },
  {
    question: "Myth: Hair from someone else can be transplanted.",
    answer:
      "Fact: No, this is a myth. Hair transplant surgery involves moving your own hair follicles from one part of your body to another. Using hair from another person would result in rejection by your immune system, similar to organ transplantation. Your own hair is used to ensure compatibility and permanent growth.",
  },
  {
    question: "Myth: Hair transplant is a cure for all types of hair loss.",
    answer:
      "Fact: Not all types of hair loss are treatable with a transplant. It is most effective for androgenetic alopecia (male/female pattern baldness) where there's a stable donor area. Hair loss due to certain medical conditions, medications, or extensive autoimmune disorders may not be suitable. Dr. Kunal Sayani will conduct a thorough diagnosis to determine if you are a candidate.",
  },
  {
    question: "Myth: Transplanted hair will fall out after a few years.",
    answer:
      "Fact: This is false. The transplanted hair follicles retain the characteristics of their original donor area, meaning they are genetically programmed to be resistant to the balding process. Therefore, these hairs will continue to grow naturally and permanently throughout your lifetime.",
  },
  {
    question: "Myth: Hair transplants damage existing hair.",
    answer:
      "Fact: When performed by a skilled surgeon like Dr. Kunal Sayani, hair transplants are designed to enhance existing hair, not damage it. While some temporary 'shock loss' of existing hair around the transplanted area can occur (which usually regrows), careful technique minimizes any long-term negative impact.",
  },
  {
    question: "Myth: Hair transplant is an extremely painful procedure.",
    answer:
      "Fact: During the procedure, the scalp is fully numbed with local anesthesia, so you will not feel pain. Post-operatively, discomfort is typically mild and managed effectively with over-the-counter or prescribed pain medication. Most patients find the recovery process quite manageable.",
  },
  {
    question: "Myth: Hair transplants yield instant results.",
    answer:
      "Fact: Hair transplant results are gradual. After the initial 'shock loss' phase (where transplanted hairs shed), new growth begins around 3-4 months. Significant growth is seen around 6-9 months, and the final, full results typically take 12-18 months to mature. Patience is essential.",
  },
  {
    question: "Myth: Hair transplant is a quick fix for hair loss.",
    answer:
      "Fact: While the procedure itself takes several hours, the entire process of hair growth and maturation is a journey. It requires commitment to post-operative care and patience for the final results to appear over many months. Dr. Kunal Sayani emphasizes that it's a long-term investment in your hair.",
  },
  {
    question: "Myth: You can run out of donor hair.",
    answer:
      "Fact: The donor area (typically the back and sides of the head) has a finite supply of hair follicles. Dr. Kunal Sayani carefully assesses your donor density and the extent of your baldness to ensure that the harvesting is sustainable and doesn't deplete the donor area, maintaining a natural look. Strategic planning is crucial.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq"  className="flex justify-center px-4 md:px-8 my-16">
      <div className="flex flex-col lg:flex-row w-full max-w-[1300px] gap-8">
        {/* Image Section */}
        <div className="relative w-full md:w-[485px] h-[300px] md:h-[461px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={"/hero/hair-transplant.png"}
            alt="Facial treatment"
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