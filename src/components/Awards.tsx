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
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-sm text-white/40">{term} • University of Asia Pacific</p>
        </div>
      ))}
    </div>
  );
}
