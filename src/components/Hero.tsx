import ProfileOrb from "../components/ProfileOrb";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="max-w-3xl text-center space-y-10">

        {/* 🧿 ORB */}
        <div className="flex justify-center">
          <ProfileOrb />
        </div>

        {/* contextual label */}
        <p className="text-white/40 tracking-[0.3em] uppercase text-[11px]">
          Frontend Developer • UI Designer • CSE Student
        </p>

        {/* name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.05]">
          Tahiya Zareen Hiya
        </h1>

        {/* description */}
        <p className="text-white/50 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Crafting clean, modern web experiences with focus on clarity,
          performance, and spatial UI systems inspired by Vision Pro design language.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">

          <a
            href="#projects"
            className="
              px-6 py-3 rounded-full
              bg-white/[0.05]
              backdrop-blur-xl
              border border-white/10
              text-white/70
              hover:text-white
              hover:border-white/25
              hover:bg-white/[0.08]
              transition duration-300
            "
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="
              px-6 py-3 rounded-full
              bg-white/[0.05]
              backdrop-blur-xl
              border border-white/10
              text-white/70
              hover:text-white
              hover:border-white/25
              hover:bg-white/[0.08]
              transition duration-300
            "
          >
            Download Resume
          </a>

        </div>

      </div>

    </section>
  );
}