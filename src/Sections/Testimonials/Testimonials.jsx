import TestmonialCard from "../../Components/TestimonialsCard/TestmonialCard";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef } from "react";

export default function Testimonials() {
  const parallaxRef2 = useRef(null);
  useEffect(() => {
    const handleScroll  = () => {
      if (!parallaxRef2.current) return;
      const windowH = window.innerHeight;
      const el = parallaxRef2.current;
      const x = el.parentElement.getBoundingClientRect();
      const progress2 = Math.min(
        Math.max((windowH - x.top) / (windowH + x.height), 0),
        1,
      );
      const topTestimonials = -30 + progress2 * 30;
      el.style.top = `${topTestimonials}%`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Testmonials = [
    {
      id: 1,
      content:
        "Humanitatis per seacula quarta decima et quinta decima. Modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum quarta decima.",
      author: "John Smith",
      company: "Microsoft",
    },
    {
      id: 2,
      content:
        "Formas humanitatis per seacula quarta decima et quinta decima. Modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum quarta decima et quinta decima.",
      author: "Britney Doe",
      company: "Google",
    },
    {
      id: 3,
      content:
        "Per seacula quarta decima et quinta decima. Modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum quarta decima. Lorem ipsum dolorum have a great day.",
      author: "Michael Moore",
      company: "Apple",
    },
  ];

  return (
    <>
      <section id="Testimonials" className="Testimonials relative pt-24 pb-20 lg:px-[50px] xl:px-[136px] overflow-hidden">
        <div className="px-4 relative z-10">
          <div className="mt-2 mb-14  text-center">
            <h3 className="text-white text-3xl leading-10">Testimonials</h3>
            <p className="text-lg leading-10 text-white mt-4">
              What our awesome clients say about us.
            </p>
          </div>
          <div>
            <Swiper
              loop={true}
              pagination={{
                clickable: true,
              }}
              spaceBetween={30}
              breakpoints={{
                0: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
              }}
              modules={[Pagination]}
              className="mySwiper "
            >
              {Testmonials.map((item) => {
                return (
                  <SwiperSlide
                    key={item.id}
                    className="!text-start lg:!flex justify-center items-center gap-7 !bg-transparent"
                  >
                    <TestmonialCard {...item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div ref={parallaxRef2} className="sec6_img"></div>
      </section>
    </>
  );
}
