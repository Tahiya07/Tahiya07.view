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
      const res = await fetch(
        "https://api.github.com/users/Tahiya07/repos"
      );
      const data = await res.json();

      // simple cleanup: most recently updated first
      const sorted = data
        .sort((a: any, b: any) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
        .slice(0, 6);

      setRepos(sorted);
    }

    fetchRepos();
  }, []);

  return (
    <section id="github" className="py-32 px-6 max-w-5xl mx-auto">
      
      <h2 className="text-3xl font-bold mb-3">GitHub</h2>
      <p className="text-white/50 mb-10 text-sm">
        Latest repositories and development activity
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {repos.map((repo) => (
          <a
            key={repo.name}
            href={repo.html_url}
            target="_blank"
            className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 transition"
          >
            
            {/* top row */}
            <div className="flex justify-between items-start">
              <h3 className="font-semibold group-hover:translate-x-1 transition">
                {repo.name}
              </h3>

              <span className="text-xs text-white/40">
                ⭐ {repo.stargazers_count}
              </span>
            </div>

            {/* description */}
            <p className="text-white/60 text-sm mt-3 line-clamp-2">
              {repo.description || "No description provided"}
            </p>

            {/* footer */}
            <div className="mt-5 flex items-center justify-between">
              
              <span className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/50">
                {repo.language || "Code"}
              </span>

              <span className="text-xs text-white/30 group-hover:text-white/60 transition">
                View →
              </span>

            </div>

          </a>
        ))}
      </div>

    </section>
  );
}