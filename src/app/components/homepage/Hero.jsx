import React from "react";
import BookAppointment from "../BookAppointment";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-full flex justify-center max-lg:pt-28 items-center bg-blue-50 px-4 py-20 pt-38  text-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between max-w-[1100px] gap-8">
          <div className="text-left max-w-xl max-lg:text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Gynecomastia Surgery by Dr. Kunal Sayani Restore Your Masculine
              Chest with Confidence
            </h1>
            <p className="text-lg md:text-xl text-gray-900 mb-6">
              Say goodbye to male breast enlargement with advanced, scarless
              gynecomastia surgery by Dr. Kunal Sayani — leading plastic surgeon
              in Mumbai. Experience USFDA-approved technology, same-day
              discharge, fast recovery, and natural-looking results. Book your
              consultation today and take the first step toward a
              more confident you.
            </p>
            <BookAppointment />
          </div>
          <div className="">
            <Image
              src="/hero/hair-transplant.png"
              alt="Hair Transplant"
              width={1000}
              height={1000}
              className="object-cover rounded-xl w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
