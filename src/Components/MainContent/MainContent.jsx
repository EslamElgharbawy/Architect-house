import  {MainNavbar}  from "../MainNavbar/MainNavbar";
import  CopyRight  from "../CopyRight/CopyRight";
import  Hero  from "../../Sections/Hero/Hero";
import Services from "../../Sections/Services/Services";
import SingleProject from "../../Sections/SingleProject/SingleProject";
import Contact from "../../Sections/Contact/Contact";
import Testimonials  from "../../Sections/Testimonials/Testimonials";
import Works from "../../Sections/Works/Works";
import  About  from "../../Sections/About/About";
import  {FooterComponent}  from "../FooterComponent/FooterComponent";

export default function MainContent() {
  return (
    <>
      <MainNavbar />
      <Hero />
      <main className="relative z-10 bg-white mt-[100vh]">
        <About />
        <Services />
        <Works />
        <SingleProject />
        <Testimonials />
        <Contact />
      </main>
      <footer>
        <FooterComponent />
        <CopyRight />
      </footer>
    </>
  );
}
