import React from 'react'
import BookAppointment from '../BookAppointment'
import Image from 'next/image'

export default function Hero() {
  return (
    <div>
       {/* Hero Section */}
            <section className="w-full flex justify-center max-lg:pt-28 items-center bg-blue-50 px-4 py-20 pt-38  text-center">
              <div className="w-full flex flex-col lg:flex-row items-center justify-between max-w-[1100px] gap-8">
                <div className="text-left max-w-xl max-lg:text-center">
                  <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                    Hair Transplant for Ultimate Restoration!
                  </h1>
                  <p className="text-lg md:text-xl text-gray-900 mb-6">
                    Get permanent hair restoration with advanced transplant techniques
                    that ensure natural results, minimal downtime, and long-lasting
                    confidence.
                  </p>
                  <BookAppointment/>
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
  )
}
