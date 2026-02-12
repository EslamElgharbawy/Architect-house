import sec2_img from "../../assets/Images/archi-8-700x640.jpg";
export default function About() {
  return (
    <>
      <div id="about" className="sm:max-xl:scroll-mt-20">
        <section className="pt-20 pb-6 lg:px-[50px] xl:px-[136px]">
          <div className="vc_column-inner mx-auto px-4 xl:w-2/3">
            <div className="wpb_wrapper">
              <div className="wpb_wrapper mb-8">
                <h2 className="text-[22px] leading-8 text-center">
                  Architecture is the thoughtful making of space.
                </h2>
              </div>

              <div className="wpb_wrapper mb-8 text-center">
                <p className="leading-8 text-lg text-[#606060]">
                  Vivamus justo sem, vulputate at mi ut, maximus consequat
                  augue. Curabitur in tortor et libero tincidunt vulputate nec
                  vehicula nunc. Donec mollis non lectus eu vestibulum. Nunc
                  elementum justo nec iaculis egestas. Fusce eleifend nibh non
                  libero interdum.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="less_more pt-12 pb-24 lg:px-[50px] xl:px-[136px] flex justify-center"
        >
          <div
            className="
    w-full
      sm:max-md:w-[390px]
      md:max-lg:w-[480px]
      lg:max-xl:w-[820px]
      flex
      flex-col
      lg:flex-row
      items-center
      gap-10
      xl:gap-12
    "
          >
            <div className="w-full lg:w-1/2 px-4">
              <img
                src={sec2_img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full lg:w-1/2 px-4">
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="mb-6 text-2xl xl:text-3xl leading-8">
                    Less is more.
                  </h2>

                  <p className=" text-[#686868] text-[15px] leading-7">
                    We have been operating for over 30 years and are Members of
                    The Federation of Master Builders. We work on projects big
                    and small from small residential extensions to full house.
                    We are so happy with this theme. Everyday it make our lives
                    better.
                  </p>
                </div>

                <ul className="icon-list flex flex-col gap-3 text-[#686868] text-[15px]">
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check text-lg"></i>
                    Aliquam fermentum lorem quis posuere mattis.
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check text-lg"></i>
                    Sed mollis sapien erat id pellentesque libero.
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check text-lg"></i>
                    Pellentesque nisl id semper bibendum.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
