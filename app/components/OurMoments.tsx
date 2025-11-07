"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function OurMoments() {
    return (
        <>
      <section className="mt-20 text-center">
        <h3 className="text-2xl font-semibold mb-4">Our Moments</h3>
        <div className="w-25 h-1 bg-gray-500 mx-auto mt-6 rounded-full shadow"></div>
      </section>
      <div className="w-full max-w-3xl mx-auto mt-10">

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          loop={true}
          className="rounded-2xl shadow-md"
        >
          <SwiperSlide>
            <img
              src="/centiill.svg"
              alt="Foto 1"
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/Centil gunkid.svg"
              alt="Foto 2"
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/Centil makrab.svg"
              alt="Foto 3"
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      </>
    )
}
