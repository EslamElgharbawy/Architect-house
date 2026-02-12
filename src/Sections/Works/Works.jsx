import { useEffect, useRef } from "react";
import { CountUp } from "countup.js";
export default function Works() {
  const counterSectionRef = useRef(null);
  const parallaxRef1 = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef1.current) return;
      const windowH = window.innerHeight;
      const el = parallaxRef1.current;
      const rect = el.parentElement.getBoundingClientRect();
      // progress من 0 → 1
      const progress = Math.min(
        Math.max((windowH - rect.top) / (windowH + rect.height), 0),
        1,
      );
      // من -50% إلى 0%
      const topPercent = -50 + progress * 50;

      el.style.top = `${topPercent}%`;
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const counters = [
            { id: "likes", value: 1430 },
            { id: "locations", value: 64 },
            { id: "ideas", value: 960 },
            { id: "comments", value: 420 },
          ];

          counters.forEach(({ id, value }) => {
            const counter = new CountUp(id, value, {
              duration: 3,
              separator: "",
              easingFn: (t, b, c, d) => c * (t / d) + b,
            });

            if (!counter.error) {
              counter.start();
            }
          });
        }
      },
      {
        rootMargin: "-100px",
      },
    );

    if (counterSectionRef.current) {
      observer.observe(counterSectionRef.current);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section
        ref={counterSectionRef}
        className="goals relative pt-24 pb-14 lg:px-[50px] xl:px-[136px] overflow-hidden scroll-mt-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 justify-center items-center">
          <div>
            <div className="px-4">
              <div className="text-center text-[rgba(255,253,252,0.8)] mb-9 relative z-10">
                <div className="counter-icon mb-8">
                  <i className="fa-regular fa-thumbs-up text-4xl"></i>
                </div>
                <div className="counter-value mb-5 text-white">
                  <div
                    className="counter-number text-[52px] leading-none"
                    id="likes"
                  ></div>
                </div>
                <div className="counter-title text-xl leading-7">
                  Page Likes
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="px-4">
              <div className="text-center text-[rgba(255,253,252,0.8)] mb-9 relative z-10">
                <div className="counter-icon mb-8">
                  <i className="fa-solid fa-store text-4xl"></i>
                </div>
                <div className="counter-value mb-5 text-white">
                  <div
                    className="counter-number text-[52px] leading-none"
                    id="locations"
                  ></div>
                </div>
                <div className="counter-title text-xl leading-7">Locations</div>
              </div>
            </div>
          </div>
          <div>
            <div className="px-4">
              <div className="text-center text-[rgba(255,253,252,0.8)] mb-9 relative z-10">
                <div className="counter-icon mb-8">
                  <i className="fa-regular fa-lightbulb text-4xl"></i>
                </div>
                <div className="counter-value mb-5 text-white">
                  <div
                    className="counter-number text-[52px] leading-none"
                    id="ideas"
                  ></div>
                </div>
                <div className="counter-title text-xl leading-7">
                  Great Ideas
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="px-4">
              <div className="text-center text-[rgba(255,253,252,0.8)] mb-9 relative z-10">
                <div className="counter-icon mb-8">
                  <i className="fa-regular fa-comment text-4xl"></i>
                </div>
                <div className="counter-value mb-5 text-white">
                  <div
                    className="counter-number text-[52px] leading-none"
                    id="comments"
                  ></div>
                </div>
                <div className="counter-title text-xl leading-7">Comments</div>
              </div>
            </div>
          </div>
        </div>
        <div ref={parallaxRef1} className="sec4_img"></div>
      </section>
    </>
  );
}
