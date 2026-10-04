import { MotionDiv } from "./Motion";
import GlassCard from "../components/UI/Glasscard";

const projects = [
  {
    title: "EduGuard",
    desc: "Lightweight local offline academic assistant combining LLM generation, Bloom's Taxonomy classification, retrieval, OCR-based document processing, and role-based student and teacher workflows.",
    tag: "AI / ML • Thesis",
    tech: "Python, PyTorch, Hugging Face, llama.cpp",
    href: "https://docs.google.com/document/d/1TjWHN_VCOVyKRzPoLacD2SQSm1_-bpp4LsrgCmtcCH0/edit?tab=t.0",
    linkLabel: "Project document",
  },
  {
    title: "UAP CSE Assistant",
    desc: "RAG-based university website assistant with semantic and lexical retrieval, metadata filtering, fuzzy person-name matching, and conversation-aware follow-up resolution.",
    tag: "RAG • Web & Android",
    tech: "Next.js, TypeScript, Capacitor, GitHub Actions",
    href: "https://uap-cse-bot.vercel.app/",
    linkLabel: "Live demo",
  },
  {
    title: "ELIO",
    desc: "Rule-based chatbot with predefined conversation flows and animated interactions, packaged for Android with Capacitor.",
    tag: "Chatbot • Web & Android",
    tech: "React, Next.js, TypeScript, Capacitor",
    href: "https://elio-bot.vercel.app/",
    linkLabel: "Live demo",
  },
  {
    title: "Market Pulse",
    desc: "Mobile prototype for browsing and filtering fictional disclosed-insider activity, with searchable screening, trade-detail views, and responsive layouts.",
    tag: "Mobile",
    tech: "React Native, Expo, TypeScript",
    href: "https://drive.google.com/drive/folders/1TYC9n21ta7SGWsQ6CsMQmby0uT-0-1HYK?usp=sharing",
    linkLabel: "App download",
  },
  {
    title: "UAP CSE Department Website Redevelop",
    desc: "Redesigned the department website with a focus on information structure, accessibility, and responsive presentation.",
    tag: "Web • 2025",
    tech: "HTML, CSS, JavaScript, Django",
    href: "https://cse.uap-bd.edu",
    linkLabel: "Live site",
  },
];

export default function Projects() {
  return (
    <div className="space-y-6">
      {projects.map((p, i) => (
        <MotionDiv key={p.title} delay={i * 0.08}>
          <GlassCard>
            <div className="space-y-3">
              <p className="text-xs text-white/40 uppercase tracking-widest">
                {p.tag}
              </p>

              <h3 className="text-2xl font-medium">{p.title}</h3>

              <p className="text-white/50 leading-relaxed">{p.desc}</p>

              <p className="text-sm text-white/40">{p.tech}</p>

              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-sm text-white/60 hover:text-white transition"
              >
                {p.linkLabel} →
              </a>
            </div>
          </GlassCard>
        </MotionDiv>
      ))}
    </div>
  );
}
