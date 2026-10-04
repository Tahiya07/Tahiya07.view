import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import BackgroundGlow from "../components/BackgroundGlow";
import LightProvider from "../components/LightProvider";
import Section from "../components/Sections";
import CustomCursor from "../components/CustomCursor";
import ScrollProgress from "../components/ScrollProgress";

export default function Page() {
  return (
    <LightProvider>
      <CustomCursor />
      <ScrollProgress />
      <main className="relative min-h-screen text-white overflow-x-hidden">
        <BackgroundGlow />
        <div className="pointer-events-none fixed inset-0 opacity-[0.03] mix-blend-overlay bg-[url('/noise.png')]" />

        <div className="relative z-10">
          <Navbar />

          <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 py-14 sm:py-16">
            <Hero />

            <div className="mt-16 sm:mt-20 space-y-16 sm:space-y-20">
              <Section id="skills" title="Skills">
                <Skills />
              </Section>

              <Section id="experience" title="Experience">
                <Experience />
              </Section>

              <Section id="projects" title="Projects">
                <Projects />
              </Section>

              <Section id="contact" title="Contact">
                <Contact />
              </Section>
            </div>
          </div>
        </div>
      </main>
    </LightProvider>
  );
}
