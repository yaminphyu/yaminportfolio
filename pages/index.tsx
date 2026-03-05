import AboutMe from "@/components/AboutMe";
import ConactWithMe from "@/components/ConactWithMe";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MyProjects from "@/components/MyProjects";
import WorkExperiences from "@/components/WorkExperiences";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <WorkExperiences />
      <MyProjects />
      <ConactWithMe />
      <Footer />
    </>
  );
}
