export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-[82vh] flex items-center justify-center px-4"
    >
      <div className="max-w-2xl text-center space-y-7">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.05]">
          Tahiya Zareen Hiya
        </h1>

        <p className="text-white/55 tracking-[0.2em] uppercase text-xs sm:text-sm font-medium">
          Software Developer • AI/ML
        </p>

        <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          Computer Science and Engineering undergraduate building practical
          software and AI/ML systems with a focus on useful, reliable, and
          well-engineered solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-full bg-white/[0.05] backdrop-blur-xl border border-white/10 text-sm text-white/70 hover:text-white hover:border-white/25 hover:bg-white/[0.08] transition duration-300"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full bg-white/[0.05] backdrop-blur-xl border border-white/10 text-sm text-white/70 hover:text-white hover:border-white/25 hover:bg-white/[0.08] transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
