import Header from '@/components/Header';
import HomeSection from '@/components/HomeSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import AutomationsSection from '@/components/AutomationsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main className="pt-16 md:pt-20">
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AutomationsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
