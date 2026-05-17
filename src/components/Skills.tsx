import { MotionDiv } from "../components/Motion";
import GlassCard from "../components/UI/Glasscard";

export default function Skills() {
  const groups = [
    { title: "Frontend", items: "React, Next.js, Tailwind, Framer Motion" },
    { title: "Backend", items: "Django, Python, Java, SQL" },
    { title: "AI / ML", items: "NLP, LLMs, PyTorch, TensorFlow" },
    { title: "Design", items: "Figma, UI/UX, Prototyping" },
    { title: "Tools", items: "Git, GitHub, Linux, Agile" },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {groups.map((g, i) => (
        <MotionDiv key={g.title} delay={i * 0.05}>
          
          <GlassCard>
            <div className="space-y-3">

              {/* title */}
              <h3 className="text-lg font-medium">
                {g.title}
              </h3>

              {/* items */}
              <p className="text-white/50">
                {g.items}
              </p>

            </div>
          </GlassCard>

        </MotionDiv>
      ))}
    </div>
  );
}