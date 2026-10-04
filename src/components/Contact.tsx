export default function Contact() {
  return (
    <div className="text-center max-w-xl mx-auto">
      <h3 className="text-2xl md:text-3xl font-light tracking-tight">
        Let’s build something meaningful.
      </h3>

      <p className="text-sm sm:text-base text-white/50 mt-5 leading-relaxed">
        Based in Dhaka, Bangladesh — open to software development, AI/ML,
        frontend engineering, and research opportunities.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="mailto:tahiyazareen.07@gmail.com"
          className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/70 hover:text-white hover:border-white/30 transition"
        >
          tahiyazareen.07@gmail.com
        </a>

        <a
          href="https://github.com/Tahiya07"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/70 hover:text-white hover:border-white/30 transition"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/tahiya-zareen-hiya-967a542ab"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/70 hover:text-white hover:border-white/30 transition"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
