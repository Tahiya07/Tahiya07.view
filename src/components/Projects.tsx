"use client";

import { MotionDiv } from "./Motion";

const projects = [
  {
    title: "EduGuard",
    desc: "Lightweight local offline academic assistant combining LLM generation, Bloom's Taxonomy classification, retrieval, OCR-based document processing, and role-based student and teacher workflows.",
    tag: "AI / ML • Thesis",
    tech: "Python, PyTorch, Hugging Face, llama.cpp",
    href: "https://docs.google.com/document/d/1TjWHN_VCOVyKRzPoLacD2SQSm1_-bpp4LsrgCmtcCH0/edit?tab=t.0",
    linkLabel: "Project document",
    ratio: "aspect-[4/3]",
    featured: true,
  },
  {
    title: "UAP CSE Assistant",
    desc: "RAG-based university website assistant with semantic and lexical retrieval, metadata filtering, fuzzy person-name matching, and conversation-aware follow-up resolution.",
    tag: "RAG • Web & Android",
    tech: "Next.js, TypeScript, Capacitor, GitHub Actions",
    href: "https://uap-cse-bot.vercel.app/",
    preview: "https://uap-cse-bot.vercel.app/",
    linkLabel: "Live demo",
    ratio: "aspect-[16/10]",
  },
  {
    title: "ELIO",
    desc: "Rule-based chatbot with predefined conversation flows and animated interactions, packaged for Android with Capacitor.",
    tag: "Chatbot • Web & Android",
    tech: "React, Next.js, TypeScript, Capacitor",
    href: "https://elio-bot.vercel.app/",
    preview: "https://elio-bot.vercel.app/",
    linkLabel: "Live demo",
    ratio: "aspect-[5/4]",
  },
  {
    title: "Market Pulse",
    desc: "Mobile prototype for browsing and filtering fictional disclosed-insider activity, with searchable screening, trade-detail views, and responsive layouts.",
    tag: "Mobile",
    tech: "React Native, Expo, TypeScript",
    href: "https://drive.google.com/drive/folders/1TYC9n21ta7SGWsQ6CsMQmby0uT0-1HYK?usp=sharing",
    linkLabel: "App download",
    ratio: "aspect-[16/11]",
  },
  {
    title: "UAP CSE Department Website Redevelop",
    desc: "Redesigned the department website with a focus on information structure, accessibility, and responsive presentation.",
    tag: "Web • 2025",
    tech: "HTML, CSS, JavaScript, Django",
    href: "https://cse.uap-bd.edu",
    preview: "https://cse.uap-bd.edu",
    linkLabel: "Live site",
    ratio: "aspect-[3/2]",
  },
];

function ProjectThumbnail({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <div
      className={`relative ${project.ratio} overflow-hidden border-b border-white/10 bg-black/30`}
    >
      {project.preview ? (
        <iframe
          src={project.preview}
          title={`${project.title} preview`}
          loading="lazy"
          className="pointer-events-none absolute inset-0 h-full w-full origin-center scale-[1.01] border-0 bg-white transition duration-700 group-hover:scale-[1.035]"
          tabIndex={-1}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.28),transparent_40%),radial-gradient(circle_at_75%_75%,rgba(34,211,238,0.16),transparent_42%)]">
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/55">
            Thesis project
          </span>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent opacity-70 transition duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-0 bg-black/10 backdrop-blur-[0.5px] transition duration-500 group-hover:bg-black/25" />
    </div>
  );
}

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5 items-start">
      {projects.map((p, i) => (
        <MotionDiv
          key={p.title}
          delay={i * 0.05}
          className={p.featured ? "md:col-span-7" : "md:col-span-5"}
        >
          <a
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="group relative block overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] transition duration-500 hover:-translate-y-1 hover:border-white/25"
          >
            <ProjectThumbnail project={p} />

            <div className="relative p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-white/45">
                    {p.tag}
                  </p>
                  <h3 className="mt-1 text-base font-semibold tracking-tight text-white/90">
                    {p.title}
                  </h3>
                </div>

                <span className="mt-0.5 shrink-0 text-sm text-white/35 transition duration-300 group-hover:translate-x-1 group-hover:text-white/75">
                  ↗
                </span>
              </div>

              <div className="mt-2.5 max-h-0 overflow-hidden rounded-lg border border-white/10 bg-black/30 px-3 opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:max-h-32 group-hover:py-2.5 group-hover:opacity-100">
                <p className="text-xs leading-relaxed text-white/70">{p.desc}</p>
                <p className="mt-1.5 text-[10px] text-white/45">{p.tech}</p>
              </div>

              <div className="mt-2.5 text-[11px] text-white/35 transition group-hover:text-white/60">
                {p.linkLabel} →
              </div>
            </div>
          </a>
        </MotionDiv>
      ))}
    </div>
  );
}
