"use client";

import { useEffect, useState } from "react";

type Repo = {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  language: string;
};

export default function GitHub() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    async function fetchRepos() {
      const res = await fetch("https://api.github.com/users/Tahiya07/repos");
      const data = await res.json();

      const sorted = data
        .sort((a: any, b: any) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
        .slice(0, 6);

      setRepos(sorted);
    }

    fetchRepos();
  }, []);

  return (
    <div>
      <p className="text-white/60 leading-relaxed mb-7">
        Latest repositories and development activity
      </p>

      <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
        {repos.map((repo) => (
          <a
            key={repo.name}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 transition"
          >
            <div className="flex justify-between items-start gap-4">
              <h3 className="font-semibold text-base sm:text-lg tracking-tight group-hover:translate-x-1 transition">
                {repo.name}
              </h3>

              <span className="text-xs text-white/50 shrink-0">
                ⭐ {repo.stargazers_count}
              </span>
            </div>

            <p className="text-white/65 text-sm mt-3 leading-relaxed line-clamp-2">
              {repo.description || "No description provided"}
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/55">
                {repo.language || "Code"}
              </span>

              <span className="text-xs text-white/45 group-hover:text-white/75 transition">
                View →
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
