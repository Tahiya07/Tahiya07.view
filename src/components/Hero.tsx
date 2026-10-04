import ProfileOrb from "../components/ProfileOrb";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl text-center space-y-10">
        <div className="flex justify-center">
          <ProfileOrb />
        </div>

        <p className="text-white/40 tracking-[0.3em] uppercase text-[11px]">
          Software Developer • AI/ML
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.05]">
          Tahiya Zareen Hiya
        </h1>

        <p className="text-white/50 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Computer Science and Engineering undergraduate building practical
          software and AI/ML systems with a focus on useful, reliable, and
          well-engineered solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-white/[0.05] backdrop-blur-xl border border-white/10 text-white/70 hover:text-white hover:border-white/25 hover:bg-white/[0.08] transition duration-300"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full bg-white/[0.05] backdrop-blur-xl border border-white/10 text-white/70 hover:text-white hover:border-white/25 hover:bg-white/[0.08] transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
