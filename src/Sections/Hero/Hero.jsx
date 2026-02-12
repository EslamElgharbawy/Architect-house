import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/Images/home-1.jpg";
import img2 from "../../assets/Images/home-2.jpg";
import img3 from "../../assets/Images/home-3.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { EffectFade, Navigation, Autoplay } from "swiper/modules";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroBgRef = useRef(null);
  const heroContentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = Math.min(scrollY * 0.3, 360);
      const opacity = Math.max(1 - scrollY / 600, 0);

      if (heroBgRef.current) {
        heroBgRef.current.style.transform = `translateY(-${offset}px)`;
      }

      if (heroContentRef.current) {
        heroContentRef.current.style.opacity = opacity;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section id="hero" className="relative h-[100svh] overflow-hidden ">
        <div
          ref={heroBgRef}
          className="absolute inset-0 w-full h-full will-change-transform"
        >
          <Swiper
            navigation={true}
            effect={"fade"}
            speed={1000}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            fadeEffect={{ crossFade: true }}
            loop={isFinite}
            modules={[EffectFade, Navigation, Autoplay]}
            className="mySwiper relative h-full"
          >
            <div
              ref={heroContentRef}
              className="hero-content z-20 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-center  w-[90%]"
            >
              <div className="hero-content-inner">
                <p className="hero-top-heading mb-1 text-[#ffffffeb] text-base sm:text-lg lg:text-[22px] leading-relaxed">
                  Architect house
                </p>
                <h1 className="hero-heading mb-4 text-white text-[32px] sm:text-[42px] lg:text-[72px] leading-tight">
                  Creativity &amp; Contemporary
                </h1>
                <p className="hero-subtitle mb-5 text-[#ffffffeb] text-base sm:text-lg lg:text-2xl leading-relaxed">
                  Whatever good things we build end up building us.
                </p>
                <div className="hero-buttons flex justify-center items-center gap-2 mt-7 ">
                  <a
                    href="#"
                    className="w-full sm:w-auto text-center border-2 border-white rounded-md py-3 px-6 font-semibold text-white hover:text-[#333] hover:bg-white transition-all duration-200 "
                  >
                    Learn More
                  </a>
                  <a
                    href="#"
                    className="w-full sm:w-auto text-center border-2 border-white rounded-md py-3 px-6 font-semibold bg-white text-[#121212] hover:bg-white/75 transition-all duration-200 "
                  >
                    About us
                  </a>
                </div>
              </div>
            </div>
            <SwiperSlide>
              <div className="bg_overlay"></div>
              <div>
                <div className="w-full h-[100vh]">
                  <img src={img1} alt="" className="object-cover" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg_overlay"></div>
              <div>
                <div className="w-full h-[100vh]">
                  <img src={img2} alt="" className="object-cover" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg_overlay"></div>
              <div>
                <div className="w-full h-[100vh]">
                  <img src={img3} alt="" className="object-cover" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
