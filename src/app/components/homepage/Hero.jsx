import React from "react";
import BookAppointment from "../BookAppointment";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-full flex justify-center max-lg:pt-18 items-center bg-blue-50 px-4 py-20 pt-22   text-center">
        <div className="w-full flex flex-col lg:flex-row items-center max-lg:flex-col-reverse max-lg:gap-10 justify-between max-w-[1500px] ">
          <div className="text-left max-w-2xl max-lg:text-center pl-20 max-lg:pl-0">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Gynecomastia Surgery by <br /> Dr. Kunal Sayani Restore Your Masculine Chest with Confidence
            </h1>
            <p className="text-base md:text-lg text-gray-900 mb-6">
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
              src="/hero/gynecomastia.jpg"
              alt="Hair Transplant"
              width={1000}
              height={1000}
              className="object-cover rounded-xl w-full h-[29rem] max-lg:h-[19rem]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
