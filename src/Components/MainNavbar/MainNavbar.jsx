import { Navbar, NavbarBrand, NavbarLink } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import logo from "../../assets/Images/logo-light.png"
export function MainNavbar() {
  const [isOpen, setIsOpen] = useState(null);
  const [show, setShow] = useState(true);
  const [NavBG, setNavBG] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setNavBG(true);
      } else {
        setNavBG(false);
      }
      if (scrollY > lastScrollY.current && scrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY.current = scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Navbar
      className={`nav fixed top-0 left-0 w-full z-20 h-20 xl:h-24 sm:max-xl:bg-[#312e29] [&>div]:lg:px-4 transition-all duration-300 ease-in-out 
        ${show ? "translate-y-0" : "-translate-y-full"} ${NavBG ? "bg-[#312e29]" : "bg-transparent"}`}
    >
      <NavbarBrand href="#" className="[&>img]:h-10">
        <img
          src={logo}
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
      </NavbarBrand>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="menuToggle xl:hidden"
      >
        <span className={`menu ${isOpen ? "active" : ""}`}></span>
      </button>
      {/* DeskTop */}
      <div className="links h-full sm:hidden xl:flex justify-center items-center ">
        <ul className="flex justify-center items-center gap-8">
          <NavbarLink
            href="#"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-white text-[17px] font-normal leading-7"
            active
          >
            Home
          </NavbarLink>
          <NavbarLink
            className="text-white text-[17px] font-normal leading-7"
            href="#about"
          >
            About
          </NavbarLink>
          <NavbarLink
            className="text-white text-[17px] font-normal leading-7"
            href="#services"
          >
            Services
          </NavbarLink>
          <NavbarLink
            className="text-white text-[17px] font-normal leading-7"
            href="#singleProject"
          >
            Single Project
          </NavbarLink>
          <NavbarLink
            className="text-white text-[17px] font-normal leading-7"
            href="#Testimonials"
          >
            Testimonials
          </NavbarLink>
          <NavbarLink
            className="text-white text-[17px] font-normal leading-7"
            href="#contact"
          >
            Contact Us
          </NavbarLink>
        </ul>
      </div>
      {/* Mobile */}
      <div
        className={`
          links
          absolute
          top-20
          left-0
          w-full
          bg-[#312e29]
          backdrop-blur-sm
          block
          overflow-hidden
          transition-all
          duration-500
          ease-linear
          ${isOpen ? "max-h-[500px]" : "max-h-0"}

          xl:hidden
        `}
      >
        <div className="py-2">
          <ul className="flex flex-col text-base font-normal text-center px-4 lg:px-8 w-full ">
            <NavbarLink
              href="#"
              className="text-[#fff] hover:text-[#d8b478] w-full text-start py-3 px-0 text-base leading-7 !border-[#f1f1f1] hover:!bg-transparent text-[17px] transition-all duration-300 ease-in-out "
              onClick={() => {
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </NavbarLink>

            <NavbarLink
              href="#about"
              className="text-[#fff] hover:text-[#d8b478] text-[17px] w-full text-start py-3 px-0 text-base leading-7 !border-[#f1f1f1] hover:!bg-transparent transition-all duration-300 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavbarLink>

            <NavbarLink
              href="#services"
              className="text-[#fff] hover:text-[#d8b478] text-[17px] w-full text-start py-3 px-0 text-base leading-7 !border-[#f1f1f1] hover:!bg-transparent transition-all duration-300 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              Services
            </NavbarLink>

            <NavbarLink
              href="#works"
              className="text-[#fff] hover:text-[#d8b478] text-[17px] w-full text-start py-3 px-0 text-base leading-7 !border-[#f1f1f1] hover:!bg-transparent transition-all duration-300 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              Works
            </NavbarLink>

            <NavbarLink
              href="#singleProject"
              className="text-[#fff] hover:text-[#d8b478] text-[17px] w-full text-start py-3 px-0 text-base leading-7 !border-[#f1f1f1] hover:!bg-transparent transition-all duration-300 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              Single Project
            </NavbarLink>

            <NavbarLink
              href="#contact"
              className="text-[#fff] hover:text-[#d8b478] text-[17px] w-full text-start py-3 px-0 text-base leading-7 !border-0 hover:!bg-transparent transition-all duration-300 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </NavbarLink>
          </ul>
        </div>
      </div>
    </Navbar>
  );
}
