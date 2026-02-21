import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ResearchSection } from "@/components/ResearchSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { PatentsAndBooksSection } from "@/components/PatentsAndBooksSection";
import { AwardsSection } from "@/components/AwardsSection";
import { AcademicActivitiesSection } from "@/components/AcademicActivitiesSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ResearchSection />
        <PublicationsSection />
        <PatentsAndBooksSection />
        <AwardsSection />
        <AcademicActivitiesSection />
        <ContactSection />
      </main>

      <footer className="py-8 text-center text-slate-400 text-sm mt-20 border-t border-slate-200/50 backdrop-blur-sm bg-white/30">
        <p>&copy; {new Date().getFullYear()} Dr. N. Bharathiraja. All rights reserved.</p>
      </footer>
    </div>
  );
}
