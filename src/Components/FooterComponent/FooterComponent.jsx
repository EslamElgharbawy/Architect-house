import {
  Footer,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";

export function FooterComponent() {
  return (
    <Footer className="relative z-10 bg-[#262626] rounded-none py-14">
      <div className="w-full lg:px-[50px] xl:px-[136px]">
        <div className="grid w-full grid-cols-1 gap-8 px-4 lg:px-6 py-8 lg:grid-cols-2 xl:grid-cols-3">
          <div>
            <FooterTitle
              title="About us"
              className="text-white text-xl leading-7 font-normal mb-6 normal-case"
            />
            <FooterLinkGroup col>
              <div className="textwidget text-[#797979] text-base leading-7">
                <p className="mb-5">
                  I am text block. Click edit button to change this text. Lorem
                  ipsum dolor sit amet, consectetur. I am text block. Click edit
                  button to change this text. Lorem ipsum dolor sit amet,
                  consectetur.
                </p>
                <p>
                  We are the champions! We are the most amazing theme of all
                  time, yeah.
                </p>
              </div>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle
              title="Opening Hours"
              className="text-white text-xl leading-7 font-normal mb-6 normal-case"
            />
            <FooterLinkGroup col className="[&>li:last-child]:border-b-0">
              <FooterLink className="footer_info pb-2 mb-2 text-[#797979] border-b-2 border-[#ffffff0d] text-base font-normal leading-7 [&>a]:hover:no-underline">
                <div className="flex items-center gap-1">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  <div>Monday 10AM – 9PM</div>
                </div>
              </FooterLink>
              <FooterLink className="footer_info pb-2 mb-2 text-[#797979] border-b-2 border-[#ffffff0d] text-base font-normal leading-7 [&>a]:hover:no-underline">
                <div className="flex items-center gap-1">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  <div>Tuesday 10AM – 9PM</div>
                </div>
              </FooterLink>
              <FooterLink className="footer_info pb-2 mb-2 text-[#797979] border-b-2 border-[#ffffff0d] text-base font-normal leading-7 [&>a]:hover:no-underline">
                <div className="flex items-center gap-1">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  <div>Wednesday 10AM – 9PM</div>
                </div>
              </FooterLink>
              <FooterLink className="footer_info pb-2 mb-2 text-[#797979] border-b-2 border-[#ffffff0d] text-base font-normal leading-7 [&>a]:hover:no-underline">
                <div className="flex items-center gap-1">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  <div>Thursday 10AM – 10PM</div>
                </div>
              </FooterLink>
              <FooterLink className="footer_info pb-2 mb-2 text-[#797979] border-b-2 border-[#ffffff0d] text-base font-normal leading-7 [&>a]:hover:no-underline">
                <div className="flex items-center gap-1">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  <div>Friday 10AM – 10PM</div>
                </div>
              </FooterLink>
              <FooterLink className="footer_info pb-2 mb-2 text-[#797979] border-b-2 border-[#ffffff0d] text-base font-normal leading-7 [&>a]:hover:no-underline">
                <div className="flex items-center gap-1">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  <div>Weekends 10AM – 11PM</div>
                </div>
              </FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle
              title="Contact Details"
              className="text-white text-xl leading-7 font-normal mb-6 normal-case"
            />
            <FooterLinkGroup
              col
              className="contact relative  [&>li:last-child]:border-b-0"
            >
              <FooterLink className="footer_info text-[#797979] border-b-2 border-[#ffffff0d] !pb-3 !mb-3 text-base font-normal leading-7 [&>a]:hover:no-underline">
                <div className="flex gap-4">
                  <div>
                    <i className="fa-solid fa-location-dot text-base !leading-4 text-[#636363]"></i>
                  </div>
                  <div>
                    Manchester Road 123-78B, Silictown 7854MD, Great Country
                  </div>
                </div>
              </FooterLink>
              <FooterLink className="footer_info text-[#797979] border-b-2 border-[#ffffff0d] !pb-3 !mb-3 text-base font-normal leading-7 [&>a]:hover:no-underline">
                <div className="flex items-center gap-4">
                  <div>
                    <i className="fa-solid fa-phone text-base !leading-4 text-[#636363]"></i>
                  </div>
                  <div>123 456 7893</div>
                </div>
              </FooterLink>
              <FooterLink className="footer_info text-[#797979] border-b-2 border-[#ffffff0d] !pb-3 !mb-3 text-base font-normal leading-7 [&>a]:hover:no-underline">
                <div className="flex items-center gap-4">
                  <div>
                    <i className="fa-solid fa-envelope text-base !leading-4 text-[#636363]"></i>
                  </div>
                  <div>hello@sitename.com</div>
                </div>
              </FooterLink>
              <FooterLink className="footer_info text-[#797979] border-b-2 border-[#ffffff0d] !pb-3 !mb-3 text-base font-normal leading-7 [&>a]:hover:no-underline">
                <div className="flex items-center gap-4">
                  <div>
                    <i className="fa-solid fa-earth-europe text-base !leading-4 text-[#636363] "></i>
                  </div>
                  <div>http://www.sitename.com</div>
                </div>
              </FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
      </div>
    </Footer>
  );
}
