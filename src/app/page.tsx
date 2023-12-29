// components
import { Navbar, Footer, PartnersCard, FormContact } from "@/components";

// sections
import Hero from "./hero";
import VideoIntro from "./video-intro";
import Feature from "./feature";
import MobileConvenience from "./mobile-convenience";
import Testimonials from "./testimonials";
import Faqs from "./faqs";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoIntro />
      <Feature />
      <MobileConvenience />
      <PartnersCard />
      <Testimonials />
      <Faqs />
      <FormContact />
      <Footer />
    </>
  );
}