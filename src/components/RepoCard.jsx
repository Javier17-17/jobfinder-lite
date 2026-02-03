import { Link } from "react-router-dom";

export default function RepoCard({ repo, username, isFav, onToggleFav }) {
  return (
    <div className="bg-white border rounded-xl p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="font-semibold">{repo.name}</h2>
          <p className="text-sm text-slate-700 line-clamp-2">
            {repo.description || "Sin descripción"}
          </p>
        </div>

        <button
          onClick={() => onToggleFav(repo.name)}
          className={`px-3 py-1 rounded-lg text-sm border ${
            isFav ? "bg-yellow-100 border-yellow-300" : "hover:bg-slate-100"
          }`}
          title="Favorito"
        >
          {isFav ? "★" : "☆"}
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-slate-600">
          ⭐ {repo.stargazers_count} • 🍴 {repo.forks_count}
        </span>

        <Link
          to={`/repo/${repo.name}`}
          state={{ repo, username }}
          className="text-sm font-medium text-slate-900 underline"
        >
          Ver detalle
        </Link>
      </div>
    </div>
  );
}
