"use client";

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="
        relative scroll-mt-32
        transition-all duration-700
      "
    >
      {/* header */}
      <div className="mb-10">
        <p className="text-xs tracking-[0.25em] uppercase text-white/40">
          {title}
        </p>
        <div className="h-px w-24 bg-white/10 mt-3" />
      </div>

      {/* content */}
      <div className="relative">
        {children}
      </div>
    </section>
  );
}