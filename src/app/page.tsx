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

          <div className="max-w-6xl mx-auto px-6 py-20">
            <Hero />

            <div className="mt-24 space-y-28 sm:space-y-32">
              <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                <Section id="about" title="About">
                  <About />
                </Section>

                <Section id="skills" title="Skills">
                  <Skills />
                </Section>
              </div>

              <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
                <Section id="education" title="Education">
                  <Education />
                </Section>

                <Section id="experience" title="Experience">
                  <Experience />
                </Section>
              </div>

              <Section id="research" title="Research">
                <Research />
              </Section>

              <Section id="projects" title="Projects">
                <Projects />
              </Section>

              <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                <Section id="awards" title="Awards">
                  <Awards />
                </Section>

                <Section id="github" title="GitHub">
                  <GitHub />
                </Section>
              </div>

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
