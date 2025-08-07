import React from 'react'
import BookAppointment from './BookAppointment'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-center items-center fixed z-50 w-full bg-white">
              <nav className="w-full  max-w-[1200px] flex items-center justify-between px-4 sm:px-8 py-1 ">
              {/* Logo */}
              <a href="/" className="flex items-center">
                <Image
                  src="/hero/logo.png"
                  alt="Dr. Kunal Sayani Logo"
                  width={90}
                  height={40}
                  priority
                  className="max-lg:w-[4rem]"
                />
              </a>
      
              {/* Right Side */}
             <BookAppointment/>
            </nav>
          </div>
    </div>
  )
}
