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
    visual: "from-indigo-500/35 via-violet-500/10 to-cyan-400/20",
    motif: "AI",
  },
  {
    title: "UAP CSE Assistant",
    desc: "RAG-based university website assistant with semantic and lexical retrieval, metadata filtering, fuzzy person-name matching, and conversation-aware follow-up resolution.",
    tag: "RAG • Web & Android",
    tech: "Next.js, TypeScript, Capacitor, GitHub Actions",
    href: "https://uap-cse-bot.vercel.app/",
    linkLabel: "Live demo",
    visual: "from-cyan-400/25 via-blue-500/10 to-indigo-500/30",
    motif: "RAG",
  },
  {
    title: "ELIO",
    desc: "Rule-based chatbot with predefined conversation flows and animated interactions, packaged for Android with Capacitor.",
    tag: "Chatbot • Web & Android",
    tech: "React, Next.js, TypeScript, Capacitor",
    href: "https://elio-bot.vercel.app/",
    linkLabel: "Live demo",
    visual: "from-violet-500/30 via-fuchsia-500/10 to-pink-400/20",
    motif: "CHAT",
  },
  {
    title: "Market Pulse",
    desc: "Mobile prototype for browsing and filtering fictional disclosed-insider activity, with searchable screening, trade-detail views, and responsive layouts.",
    tag: "Mobile",
    tech: "React Native, Expo, TypeScript",
    href: "https://drive.google.com/drive/folders/1TYC9n21ta7SGWsQ6CsMQmby0uT0-1HYK?usp=sharing",
    linkLabel: "App download",
    visual: "from-emerald-400/20 via-teal-500/10 to-cyan-400/25",
    motif: "MOBILE",
  },
  {
    title: "UAP CSE Department Website Redevelop",
    desc: "Redesigned the department website with a focus on information structure, accessibility, and responsive presentation.",
    tag: "Web • 2025",
    tech: "HTML, CSS, JavaScript, Django",
    href: "https://cse.uap-bd.edu",
    linkLabel: "Live site",
    visual: "from-slate-400/20 via-blue-500/10 to-indigo-400/25",
    motif: "WEB",
  },
];

function ProjectThumbnail({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br ${project.visual} border border-white/10`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.10),transparent_35%)] transition duration-700 group-hover:scale-110 group-hover:rotate-1" />

      <div className="absolute inset-5 rounded-lg border border-white/15 bg-black/20 backdrop-blur-sm shadow-2xl transition duration-500 group-hover:scale-[1.025] group-hover:bg-black/10">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
        </div>

        <div className="relative flex h-[calc(100%-29px)] items-center justify-center overflow-hidden">
          <div className="absolute h-28 w-28 rounded-full bg-white/10 blur-3xl transition duration-700 group-hover:scale-150" />
          <span className="relative text-[clamp(1rem,2.2vw,1.5rem)] font-semibold tracking-[0.22em] text-white/80 transition duration-500 group-hover:scale-110 group-hover:text-white">
            {project.motif}
          </span>

          <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-50">
            <span className="h-1.5 flex-1 rounded-full bg-white/30" />
            <span className="h-1.5 w-1/4 rounded-full bg-white/20" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-black/10 transition duration-500 group-hover:bg-black/30" />
    </div>
  );
}

export default function Projects() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((p, i) => (
        <MotionDiv key={p.title} delay={i * 0.08}>
          <a
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.055] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <ProjectThumbnail project={p} />

            <div className="relative p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
                    {p.tag}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-white/90">
                    {p.title}
                  </h3>
                </div>

                <span className="mt-1 shrink-0 text-sm text-white/35 transition duration-300 group-hover:translate-x-1 group-hover:text-white/70">
                  ↗
                </span>
              </div>

              <div className="mt-4 hidden h-0 overflow-hidden rounded-xl border border-white/10 bg-white/[0.06] p-4 opacity-0 backdrop-blur-xl transition-all duration-500 md:block md:group-hover:h-[132px] md:group-hover:opacity-100">
                <p className="text-sm leading-relaxed text-white/65">
                  {p.desc}
                </p>
                <p className="mt-3 text-xs text-white/40">{p.tech}</p>
              </div>

              <div className="mt-4 md:hidden">
                <p className="text-sm leading-relaxed text-white/60">{p.desc}</p>
                <p className="mt-3 text-xs text-white/40">{p.tech}</p>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/[0.035] to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
          </a>
        </MotionDiv>
      ))}
    </div>
  );
}
