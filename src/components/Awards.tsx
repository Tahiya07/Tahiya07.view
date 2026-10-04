export default function Awards() {
  const awards = [
    ["Dean’s Award", "Spring 2024"],
    ["Dean’s Award", "Fall 2024"],
    ["Vice Chancellor’s Award", "Fall 2025"],
  ];

  return (
    <div className="space-y-5">
      {awards.map(([title, term]) => (
        <div key={term} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <h3 className="text-lg sm:text-xl font-semibold tracking-tight">{title}</h3>
          <p className="text-sm text-white/50">{term} <span className="text-white/35">•</span> University of Asia Pacific</p>
        </div>
      ))}
    </div>
  );
}
