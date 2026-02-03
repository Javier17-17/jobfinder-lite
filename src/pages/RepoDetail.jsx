import { Link, useLocation, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { repoUrl } from "../services/githubApi";

export default function RepoDetail() {
  const { name } = useParams();
  const location = useLocation();
  const stateRepo = location.state?.repo;
  const username = location.state?.username || "facebook";

  const { data, loading, error } = useFetch(
    stateRepo ? null : repoUrl(username, name)
  );

  const repo = stateRepo || data;

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <Link to="/deep-dive" className="text-sm underline">
        ← Volver
      </Link>

      {loading && <p className="mt-4 text-sm text-slate-600">Cargando...</p>}
      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      {repo && (
        <div className="mt-4 bg-white border rounded-xl p-6">
          <h1 className="text-2xl font-bold">{repo.name}</h1>
          <p className="text-slate-700 mt-2">
            {repo.description || "Sin descripción"}
          </p>

          <div className="mt-4 flex gap-4 text-sm text-slate-700">
            <span>⭐ {repo.stargazers_count}</span>
            <span>🍴 {repo.forks_count}</span>
            <span>🧠 {repo.language || "N/A"}</span>
          </div>

          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 px-4 py-2 rounded-lg bg-slate-900 text-white"
          >
            Ver en GitHub
          </a>
        </div>
      )}
    </section>
  );
}
