import About from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
      <main className="flex flex-col items-center justify-center px-4"> 
      <Intro></Intro> 
      <SectionDivider></SectionDivider>    
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Experience></Experience>
      <Education></Education>
      <Contact></Contact>
      </main>
    
  );
}
