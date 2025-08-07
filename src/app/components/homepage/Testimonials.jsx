import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { MdStar } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

// Custom Arrows
const PrevArrow = ({ onClick }) => (
  <button
    className="border border-[#40AEB9] 
            hover:bg-[#40AEB9] hover:text-white 
            max-lg:focus:bg-[#40AEB9] max-lg:focus:text-white 
            text-[#40AEB9] rounded-full mr-4 
            transition duration-300"
    onClick={onClick}
  >
    <IoIosArrowRoundBack size={50} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="border border-[#40AEB9] 
            hover:bg-[#40AEB9] hover:text-white 
            max-lg:focus:bg-[#40AEB9] max-lg:focus:text-white 
            text-[#40AEB9] rounded-full mr-4 
            transition duration-300"
    onClick={onClick}
  >
    <IoIosArrowRoundForward size={50} />
  </button>
);

// Testimonial data
const testimonials = [
  {
    name: "Geeta Rijhwani",
    date: "02-04-2025",
    image: "/testimonials/Geeta Rijhwani.png",
    rating: 5,
    review:
      "I had a surgery done recently by Dr Kunal Sayani for removal of trichilemmal cysts on my scalp. He made the whole process very smooth and easy for me, right from consultation",
    fullReview:
      "I had a surgery done recently by Dr Kunal Sayani for removal of trichilemmal cysts on my scalp. He made the whole process very smooth and easy for me, right from consultation to the actual procedure to post-op care and follow-ups.Thank you so much Dr Kunal Sayani for the stress-free experience and a great job done.",
  },
  {
    name: "Vishal Agrawal",
    date: "02-10-2024",
    image: "/testimonials/vishal.png",
    rating: 5,
    review:
      "2 PRP session/3.5 months - pleased with the results: I got introduced to Dr. Sayani by one of my office colleagues. I was not sure to go for any hair treatment but after I met Dr. Sayani,",
    fullReview:
      "2 PRP session/3.5 months - pleased with the results: I got introduced to Dr. Sayani by one of my office colleagues. I was not sure to go for any hair treatment but after I met Dr. Sayani, he helped me understand how Platelet-rich plasma (PRP) process works and how much safe it is. As my colleague himself had positive resuts with Dr. Sayani, I decided to go for a few PRP sessions. Results are promising in a span of just 3.5 months. I am very pleased with how quickly we could get results. I was more than happy with services provided. I recommend Dr. Sayani for hairfall treatment.",
  },
  {
     name: "Ankit Doshi",
    date: "29-02-2025",
    image: "/testimonials/Ankit Doshi.png",
    rating: 5,
    review:
      "I recently had a hair transplant on my vertex for thinning hair and under-eye fillers with Dr. Kunal Sayani at Tvameva Aesthetics in Mumbai, and the experience was exceptional.",
    fullReview:
      "I recently had a hair transplant on my vertex for thinning hair and under-eye fillers with Dr. Kunal Sayani at Tvameva Aesthetics in Mumbai, and the experience was exceptional. Dr. Sayani is extremely patient-centered, dedicating ample time to each patient, making them feel comfortable and well-cared for. As a doctor myself, Ive seen healthcare practices worldwide, and I can confidently say Dr. Sayani is among the best. The under-eye filler treatment effectively eliminated my dark circles, giving me a refreshed look. The hair transplant was performed with great care, and Im already seeing positive results just eight days post-op. I highly recommend Dr. Sayani for anyone seeking aesthetic treatments. ",
  },
  {
    name: "Sasmiitvijay Kalaskar",
    date: "12-06-2024",
    image: "/testimonials/tat.png",
    rating: 5,
    review:
      "Must visit place for hair problems and skin problems…",
    fullReview:
      "Must visit place for hair problems and skin problems…",
  },
  // {
  //   name: "Mridula Sarda",
  //   date: "05-04-2025",
  //   image: "/testimonials/Mridula Sarda.png",
  //   rating: 5,
  //   review:
  //     "Dr. Kunal skillfully stitched my daughter's eyelid cut with precision. His calm demeanor and expertise ensured a barely noticeable scar. Highly recommend him for cosmetic scar treatment!",
  //   fullReview:
  //     "I recently had the pleasure of working with Dr. Kunal, a plastic surgeon who skillfully stitched a cut over my 12-year-old daughters eyelid. Even myself being a doctor, I panicked that day looking at my daughters bleeding wound. After primary care, I started looking for some person who can take care of the wound in best cosmetic way as the cut was quite close to the eyelid. Dr Kunal was my rescue that day. I cannot thank him enough for his exceptional skills, good nature, and patient attitude during this difficult time. From the moment we arrived at his office, Dr. Kunal put us at ease with his calm and reassuring demeanor. He took the time to explain the procedure to us in detail and answered all of our questions with patience and kindness. It was clear that he genuinely cared about my daughters well-being and wanted to ensure the best possible outcome for her. Dr. Kunals expertise and precision were evident in the results of the surgery. The scar on my daughters eyelid is barely noticeable, thanks to his meticulous stitching and attention to detail. I am truly grateful for his exceptional work and the care he provided to my daughter. His staff is so warm and polite. I really want to take a minute to appreciate them genuinely. I wholeheartedly recommend Dr. Kunal to anyone in need of a plastic surgeon for cosmetic scar treatment. His skills, good nature, and patient attitude make him a standout in his field. I am thankful that I contacted him on the day of the emergency, and I am confident that anyone who seeks his services will be in excellent hands. Thank you, Dr. Kunal, for your outstanding care and expertise.",
  // },
  // {
  //   name: "Ankit Doshi",
  //   date: "29-02-2025",
  //   image: "/testimonials/Ankit Doshi.png",
  //   rating: 5,
  //   review:
  //     "Dr. Kunal Sayani's hair transplant and under-eye fillers were exceptional. His patient-centered care and expertise delivered great results. Highly recommend Twameva Aesthetics!",
  //   fullReview:
  //     "I recently had a hair transplant on my vertex for thinning hair and under-eye fillers with Dr. Kunal Sayani at Tvameva Aesthetics in Mumbai, and the experience was exceptional. Dr. Sayani is extremely patient-centered, dedicating ample time to each patient, making them feel comfortable and well-cared for. As a doctor myself, Ive seen healthcare practices worldwide, and I can confidently say Dr. Sayani is among the best. The under-eye filler treatment effectively eliminated my dark circles, giving me a refreshed look. The hair transplant was performed with great care, and Im already seeing positive results just eight days post-op. I highly recommend Dr. Sayani for anyone seeking aesthetic treatments.",
  // },
  // {
  //   name: "Tejal Panchal",
  //   date: "05-01-2025",
  //   image: "/testimonials/Tejal Panchal.png",
  //   rating: 5,
  //   review:
  //     "Dr. Kunal Sayani removed a benign breast tumor with minimal scarring. His compassion and clear guidance made the process seamless. Eternally grateful for his care!",
  //   fullReview:
  //     "Dr. Kunal Sayani is truly a gem of a person, very knowledgeable, dynamic. I had a huge tumor in my left breast, since many years, I couldnt express it to anyone. Booked an appointment and met Dr. Kunal, he was friendly, understood my state of mine, didnt judge me at all. He didnt judge me at all, was the reason I was all my heart open to him about my situation. He checked me throughly and guide me through the process, explained each and every aspect. Thankfully this tumor was benign, it was a giant fibroadenoma. All my reports were normal and he explained and discussed every small to small aspect very clearly about the surgery. November 30th 2024 was my surgery day. Dr. Kunal made me comfortable at every step, met me before the surgery, explained and did the markings on breast, and how he will conduct the surgery to me. Every instruction was crystal clear, I was not worried at all as I was in safe hands. After the surgery I was absolutely fit and fine, didnt even have the feeling of such a major surgery as Dr. Kunal Sayani handled it so well and smoothly. With minimum scars on my breast he did an excellent job. I am eternally grateful to Dr.Kunal Sayani for putting his best efforts not just for me, but for his every patient. Big salute to such doctors. After the surgery, every follow up was done on timely manner. Dr. Kunal Sayani is available for his patients 24×7 on call, personally comes to have a check on his patients after the surgery. I am really blessed to know him in person. Would 100% recommend anyone facing medical issues which is taken care by him, under his profile to once consult him without any hesitation. You will always be in safe hands. Thank you so much Dr. Kunal Sayani from the bottom of my heart, this surgery has changed my life in a very positive way. Cant thank you enough for all your efforts and excellent work. Keep doing the good work you always do and save the lives of people. Thanking you once again! 😊 🙏🏻",
  // },
  // {
  //   name: "Sameer Kanabar",
  //   date: "05-01-2025",
  //   image: "/testimonials/Sameer Kanabar.png",
  //   rating: 5,
  //   review:
  //     "Dr. Kunal Sayani at Twameva Clinic is exceptional. His expertise, care, and ethical approach make him the best for aesthetic and reconstructive surgeries. Highly recommend!",
  //   fullReview:
  //     "I highly recommend Dr Kunal Sayani of Tvameva Clinic Vile Parle West, specifically if you are in need of any of the following services Aesthetic / Cosmetic Surgical Procedures, Liposuction, Breast surgeries, Botox, Fillers, Scar revisions, Tattoo excision, Hair transplant, Hair fall treatment (PRP, GFC therapy etc.) & Reconstructive Surgery, wound management, etc. The reason for this strong recommendation is that not only is Dr Kunal Sayani the best in the industry, with an excellent track record, but he is also caring, benevolent, customer centric and ethical, Also Tvameva Clinic renders the best TLC to all that visit there even if it’s just for any small cosmetic treatment. I am genuinely touched with his humane approach in anticipating and addressing customer needs and feel that his unmatched patience and level of expertise are his greatest forte. Thanks and regards Sameer Kanabar",
  // },
  // {
  //   name: "Rohan Jadhav",
  //   date: "03-11-2024",
  //   image: "/testimonials/Rohan Jadhav.png",
  //   rating: 5,
  //   review:
  //     "Dr. Kunal Sayani's care during my wife's axillary fat surgery was exceptional. The results exceeded expectations, and his professionalism was outstanding. Highly recommend!",
  //   fullReview:
  //     "My wife recently had a axillary fat surgery with Dr. Kunal Sayani, and we couldn’t be more pleased with the entire experience. From the initial consultation to the follow-up appointments, Dr. Kunal Sayani was exceptional. he made sure my wife felt comfortable and fully informed every step of the way. The results have exceeded our expectations, and we are truly grateful for the care and professionalism shown throughout the process. I highly recommend Dr. Kunal Sayani for anyone seeking ethical and top-notch cosmetic surgery services.",
  // },
];

export default function Testimonials() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false, // Keep arrows false to use custom controls
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-20 relative">
      <Image
        src={"/testimonials/abstract1.png"}
        width={300}
        height={300}
        alt=""
        className="absolute max-lg:w-40  top-0 left-0"
      />
      <div className="flex justify-between w-full max-w-[1200px] max-lg:flex-col">
        {/* Left Section */}
        <div className="w-full flex justify-center px-4 flex-col items-start">
          <h2 className="text-4xl text-left mb-6">
            See What Our <br /> <span className="text-[#10217D]">Patients</span>{" "}
            Have To Say!
          </h2>

          {/* External Arrow Controls */}
          <div className="text-lg text-center mb-8 z-0 flex">
            <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
            <NextArrow onClick={() => sliderRef.current?.slickNext()} />
          </div>
        </div>

        {/* Right Section with Slider */}
        <div className="w-full flex justify-start items-center">
          <div className="w-full h-48 max-lg:h-auto max-lg:p-4 bg-[#40AEB9] flex justify-start max-lg:justify-center items-center rounded-lg">
            <div className="w-[30rem] max-lg:w-[22rem] ml-8 max-lg:ml-0 shadow-[0px_0px_10px_lightgray] rounded-2xl bg-gradient-to-l from-[#FFFFF0] to-[#E9F6FF]">
              <Slider ref={sliderRef} {...settings}>
                {testimonials.map((testimonial, index) => (
                  <div key={index}>
                    <div className="h-[18rem] flex flex-col p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex justify-center items-end gap-4">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={100}
                            height={100}
                            className="rounded-full"
                          />
                          <div className="flex flex-col">
                            <h1 className="text-[#10217D] font-bold text-lg">
                              {testimonial.name}
                            </h1>
                            <p className="text-gray-500">{testimonial.date}</p>
                            <div className="text-yellow-400 flex text-2xl">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <MdStar key={i} />
                              ))}
                            </div>
                          </div>
                        </div>
                        <FcGoogle size={30} />
                      </div>
                      <p className="mt-4 text-base max-lg:text-sm text-gray-700">
                        {testimonial.fullReview.slice(0, 330)}...
                        {testimonial.fullReview && (
                          <a
                            href="https://www.google.com/search?q=drkunal+sayani&oq=drkunal+sayani&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPDIGCAQQRRhBMgYIBRBFGEHSAQg0MDE2ajBqNKgCALACAQ&sourceid=chrome&ie=UTF-8#lrd=0x3be7b70ae5b76aef:0xbc36ee7fd47dd276,1,,,,"
                            className="text-[#40AEB9] hover:underline ml-1"
                                                     >
                            Read More
                          </a>
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}