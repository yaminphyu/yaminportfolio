import AboutMe from "@/components/AboutMe";
import ConactWithMe from "@/components/ConactWithMe";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WorkExperiences from "@/components/WorkExperiences";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <WorkExperiences />
      <ConactWithMe />
      <Footer />
    </>
  );
}
