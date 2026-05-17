export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute w-125 h-125 bg-cyan-500/20 blur-3xl rounded-full -top-25 -left-25" />
      <div className="absolute w-100 h-100 bg-purple-500/20 blur-3xl rounded-full -bottom-25 -right-25" />
      <div className="absolute inset-0 bg-linear-to-b from-black via-black/80 to-black" />
    </div>
  );
}