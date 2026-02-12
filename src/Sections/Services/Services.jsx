import sec3_img from "../../assets/Images/archi-4-700x640.jpg";

export default function Services() {
  return (
    <>
      <section
        id="services"
        className="Architecture pt-12 pb-24 lg:px-[50px] xl:px-[136px] flex justify-center sm:max-xl:scroll-mt-20"
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
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="mb-6 text-2xl xl:text-3xl leading-8">
                  Architecture is a visual art.
                </h2>

                <p className=" text-[#686868] text-[15px] leading-7">
                  We have been operating for over 30 years and are Members of
                  The Federation of Master Builders. We work on projects big and
                  small from small residential extensions to full house. We are
                  so happy with this theme. Everyday it make our lives better.
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

          <div className="w-full lg:w-1/2 px-4">
            <img src={sec3_img} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
