import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import BackgroundGlow from "../components/BackgroundGlow";
import LightProvider from "../components/LightProvider";
import Section from "../components/Sections";
import CustomCursor from "../components/CustomCursor";

export default function Page() {
  return (
    <LightProvider>
      <CustomCursor />
      <main className="relative min-h-screen text-white overflow-x-hidden">
        <BackgroundGlow />
        <div className="pointer-events-none fixed inset-0 opacity-[0.03] mix-blend-overlay bg-[url('/noise.png')]" />

        <div className="relative z-10">
          <Navbar />

          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
            <Hero />

            <div className="mt-20 sm:mt-24 space-y-20 sm:space-y-24">
              <Section id="about" title="About">
                <About />
              </Section>

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
