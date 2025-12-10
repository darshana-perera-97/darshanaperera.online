import HeroSection from "../components/home/HeroSection";
import ContactBar from "../components/home/ContactBar";
import AboutMe from "../components/home/AboutMe";
import ExperienceSection from "../components/home/ExperienceSection";
import EducationSkills from "../components/home/EducationSkills";
import LatestWork from "../components/home/LatestWork";
import ContactSection from "../components/home/ContactSection";
import SEO from "../components/layout/SEO";
import { buildUrl, seoDefaults } from "../utils/seo";

const Home = () => {
  return (
    <>
      <SEO
        title={seoDefaults.title}
        description={seoDefaults.description}
        url={buildUrl("/")}
        image={buildUrl(seoDefaults.image)}
        keywords={seoDefaults.keywords}
        siteName={seoDefaults.siteName}
        type="website"
      />
      <main>
        <HeroSection />
        <ContactBar />
        <AboutMe />
        <ExperienceSection />
        <EducationSkills />
        <LatestWork />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;

