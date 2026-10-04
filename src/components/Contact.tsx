export default function Contact() {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h3 className="text-3xl md:text-4xl font-light tracking-tight">
        Let’s build something meaningful.
      </h3>

      <p className="text-white/50 mt-6 leading-relaxed">
        Based in Dhaka, Bangladesh — open to software development, AI/ML,
        frontend engineering, and research opportunities.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="mailto:tahiyazareen.07@gmail.com"
          className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-white/70 hover:text-white hover:border-white/30 transition"
        >
          tahiyazareen.07@gmail.com
        </a>

        <a
          href="https://github.com/Tahiya07"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-white/70 hover:text-white hover:border-white/30 transition"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/tahiya-zareen-hiya-967a542ab"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-white/70 hover:text-white hover:border-white/30 transition"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
