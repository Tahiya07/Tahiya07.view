import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Awards from "../components/Awards";
import Research from "../components/Research";
import Projects from "../components/Projects";
import GitHub from "../components/Github";
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

          <div className="max-w-6xl mx-auto px-6 py-24">
            <Hero />

            <div className="flex flex-col gap-40">
              <Section id="about" title="About">
                <About />
              </Section>

              <Section id="education" title="Education">
                <Education />
              </Section>

              <Section id="experience" title="Experience">
                <Experience />
              </Section>

              <Section id="awards" title="Awards">
                <Awards />
              </Section>

              <Section id="skills" title="Skills">
                <Skills />
              </Section>

              <Section id="research" title="Research">
                <Research />
              </Section>

              <Section id="projects" title="Projects">
                <Projects />
              </Section>

              <GitHub />

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
