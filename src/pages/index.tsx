import { Image } from "@chakra-ui/react";
import ContactSection from "@components/ContactSection";
import Container from "@components/Container";
import Footer from "@components/Footer";
import Hero from "@components/Hero";
import Navbar from "@components/Navbar";
import SectionGrid from "@components/SectionGrid";
import Sponsor from "@components/Sponsor";
import TestimoniSection from "@components/TestimoniSection";

const Home = () => {
  return (
    <>
      <Image src="/bg_top.svg" alt="bg_top" position={"absolute"} top={0} />
      <Image
        src="/bg_middle.svg"
        alt="bg_middle"
        position={"absolute"}
        top={"30%"}
        right={0}
      />
      <Container>
        <Navbar />
        <Hero />
        <Sponsor />
        <SectionGrid
          title="Branding & Design System"
          desc="Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups"
          imagePosition="left"
          image="branding_section.svg"
        />
        <SectionGrid
          title="Custome & Plugin Development"
          desc="Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups"
          imagePosition="right"
          image="dev_section.svg"
        />
        <TestimoniSection />
        <ContactSection />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
