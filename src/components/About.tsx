import { MotionDiv } from "./Motion";

export default function About() {
  return (
    <MotionDiv>
      <div className="max-w-3xl space-y-5">
        <p className="text-lg text-white/70 leading-relaxed">
          I am a Computer Science and Engineering undergraduate with a strong
          interest in software development and artificial intelligence.
        </p>

        <p className="text-white/50 leading-relaxed">
          I enjoy building web applications and practical AI/ML projects with
          a focus on useful, reliable, and well-engineered software.
        </p>

        <p className="text-white/50 leading-relaxed">
          My work spans frontend development, local AI systems, retrieval-based
          applications, and applied machine learning.
        </p>
      </div>
    </MotionDiv>
  );
}
