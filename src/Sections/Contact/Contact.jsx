export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-[50px] xl:px-[136px] bg-[#f8f8f8] sm:max-xl:scroll-mt-20"
      >
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-9">
          <div className="w-full lg:w-1/2">
            <div className="text-[#686868]">
              <div className="mb-8">
                <h3 className="text-[#303030] text-2xl leading-8 mb-6">
                  Contact Information
                </h3>
                <p className="text-base leading-7">
                  I am text block. Click edit button to change this text. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                  tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>

              <div className="mb-5">
                <p className="text-base leading-7">Our contact details:</p>
              </div>

              <ul className="text-base leading-7 space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-[36px] h-[36px] rounded-full border border-[#00000026] flex justify-center items-center shrink-0">
                    <i className="fa-regular fa-map"></i>
                  </span>
                  <span className="text-sm sm:text-base">
                    Manchester St 123-78B, Random 713, UK
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="w-[36px] h-[36px] rounded-full border border-[#00000026] flex justify-center items-center shrink-0">
                    <i className="fa fa-phone"></i>
                  </span>
                  <span className="text-sm sm:text-base">+46 123 456 789</span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="w-[36px] h-[36px] rounded-full border border-[#00000026] flex justify-center items-center shrink-0">
                    <i className="fa fa-headphones"></i>
                  </span>
                  <span className="text-sm sm:text-base">+37 431 456 789</span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="w-[36px] h-[36px] rounded-full border border-[#00000026] flex justify-center items-center shrink-0">
                    <i className="fa-regular fa-envelope"></i>
                  </span>
                  <span className="text-sm sm:text-base">
                    hello@sitename.com
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="w-full h-[300px] sm:h-[400px] lg:h-[520px] rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387196.0767056161!2d-73.6498593956587!3d40.69667268749136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z2YbZitmI2YrZiNix2YPYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2seg!4v1770642386491!5m2!1sar!2seg"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="border-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
