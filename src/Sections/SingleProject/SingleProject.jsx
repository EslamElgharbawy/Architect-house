import img4 from "../../assets/Images/archi-17.png";

export default function SingleProject() {
  return (
    <>
      <section
        id="singleProject"
        className="w-full pt-20 pb-16 lg:px-[50px] xl:px-[136px] flex justify-center sm:max-xl:scroll-mt-20"
      >
        <div className="px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 ">
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="mb-4 text-2xl xl:text-2xl leading-8">
                    Buildings should serve people, not the other way around.
                  </h2>

                  <p className=" text-[#686868] text-[18px] leading-8">
                    Morbi pellentesque, nisl id semper bibendum, nibh sem
                    fermentum magna, eget commodo leo velit sit amet velit.
                    Aliquam fermentum, lorem quis posuere mattis, est justo
                    porttitor magna.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2  sm:max-lg:mt-8">
              <img src={img4} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 ">
            <div className="flex justify-center items-start w-full gap-4">
              <div>
                <i className="fa-regular fa-lightbulb text-3xl text-[#686868]"></i>
              </div>
              <div className="icon-box-content pr-4">
                <h5 className="icon-box-title mb-2 text-[#303030]">
                  Creativity
                </h5>
                <p className="icon-description leading-7 text-[#888]">
                  Morbi pellentesque, nisl id semper bibendum, nibh sem
                  fermentum magna.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-start w-full gap-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-pencil-icon lucide-pencil text-[#686868]"
                >
                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                  <path d="m15 5 4 4" />
                </svg>
              </div>
              <div className="icon-box-content pr-4">
                <h5 className="icon-box-title mb-2 text-[#303030] ">
                  Unique Design
                </h5>
                <p className="icon-description leading-7 text-[#888]">
                  Morbi pellentesque, nisl id semper bibendum, nibh sem
                  fermentum magna.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-start w-full gap-4">
              <div>
                <i className="fa-regular fa-heart text-3xl text-[#686868]"></i>
              </div>
              <div className="icon-box-content pr-4">
                <h5 className="icon-box-title mb-2 text-[#303030] ">
                  Satisfied Clients
                </h5>
                <p className="icon-description leading-7 text-[#888]">
                  Morbi pellentesque, nisl id semper bibendum, nibh sem
                  fermentum magna.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-start w-full gap-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sticky-note-icon lucide-sticky-note text-[#686868]"
                >
                  <path d="M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" />
                  <path d="M15 3v5a1 1 0 0 0 1 1h5" />
                </svg>
              </div>
              <div className="icon-box-content pr-4">
                <h5 className="icon-box-title mb-2 text-[#303030] ">
                  Portfolios
                </h5>
                <p className="icon-description leading-7 text-[#888]">
                  Morbi pellentesque, nisl id semper bibendum, nibh sem
                  fermentum magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
