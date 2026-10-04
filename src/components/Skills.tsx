import { MotionDiv } from "../components/Motion";
import GlassCard from "../components/UI/Glasscard";

const groups = [
  { title: "Programming", items: "Python, Java, JavaScript, TypeScript, HTML, CSS" },
  { title: "Frontend", items: "React, Next.js, Tailwind CSS, Vite, Framer Motion" },
  { title: "Backend", items: "Django, FastAPI, Node.js" },
  { title: "Mobile", items: "Expo, Capacitor" },
  { title: "Databases", items: "PostgreSQL, MySQL" },
  {
    title: "AI / Machine Learning",
    items: "PyTorch, TensorFlow, scikit-learn, Hugging Face Transformers, LLMs, NLP, RAG, Computer Vision, OCR, Federated Learning",
  },
  { title: "Tools & Platforms", items: "Git, GitHub, Linux, VS Code, Figma, Vercel, Render, Railway" },
  { title: "Coding Agents", items: "Cursor, Codex, Devin" },
];

export default function Skills() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {groups.map((g, i) => (
        <MotionDiv key={g.title} delay={i * 0.05}>
          <GlassCard>
            <div className="space-y-2.5">
              <h3 className="text-base font-medium">{g.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{g.items}</p>
            </div>
          </GlassCard>
        </MotionDiv>
      ))}
    </div>
  );
}
