import React from 'react'

export default function Map() {
  return (
    <div>
      <div className="w-full h-[300px] md:h-[400px] mt-8 overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30152.58286277929!2d72.7589144!3d19.1059122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b70ae5b76aef%3A0xbc36ee7fd47dd276!2sTVAMEVA%20AESTHETICS%20-%20501%2F502%20Sapphire%20Plaza!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="TVAMEVA AESTHETICS Location"
        ></iframe>
      </div>
    </div>
  )
}
