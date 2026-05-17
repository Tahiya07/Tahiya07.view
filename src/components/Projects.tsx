import { MotionDiv } from "./Motion";
import GlassCard from "../components/UI/Glasscard";

export default function Projects() {
  const projects = [
     {
      title: "UAP CSE Website",
      desc: "Academic platform with scalable UI architecture.",
      tag: "Team Project",
    },
    {
      title: "WatchCraft",
      desc: "Modern frontend UI with spatial design principles.",
      tag: "Frontend",
    },
   
    {
      title: "Firefighting IoT Robot",
      desc: "ESP32-based safety system with real-time monitoring.",
      tag: "IoT",
    },
  ];

  return (
    <div className="space-y-6">
      {projects.map((p, i) => (
        <MotionDiv key={p.title} delay={i * 0.08}>
          
          <GlassCard>
            <div className="space-y-3">

              {/* tag */}
              <p className="text-xs text-white/40 uppercase tracking-widest">
                {p.tag}
              </p>

              {/* title */}
              <h3 className="text-2xl font-medium">
                {p.title}
              </h3>

              {/* description */}
              <p className="text-white/50">
                {p.desc}
              </p>

            </div>
          </GlassCard>

        </MotionDiv>
      ))}
    </div>
  );
}