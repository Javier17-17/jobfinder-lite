import { useMemo, useState } from "react";
import useFetch from "../hooks/useFetch";
import useLocalStorage from "../hooks/useLocalStorage";
import { reposUrl } from "../services/githubApi";
import SearchBar from "../components/SearchBar";
import RepoCard from "../components/RepoCard";

export default function DeepDive() {
  const [username, setUsername] = useState("facebook");
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const { data, loading, error, refetch } = useFetch(reposUrl(username));
  const repos = Array.isArray(data) ? data : [];

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return repos.filter((r) => r.name.toLowerCase().includes(q));
  }, [repos, query]);

  const toggleFav = (name) => {
    setFavorites((prev) =>
      prev.includes(name) ? prev.filter((x) => x !== name) : [...prev, name]
    );
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-2">Deep Dive: JobFinder Lite</h1>
      <p className="text-slate-700 mb-6">
        Demo técnica: consumo de API, búsqueda, detalle por ruta y favoritos en
        localStorage.
      </p>

      <div className="bg-white border rounded-xl p-5 mb-6">
        <div className="flex flex-col md:flex-row gap-3 md:items-end">
          <div className="flex-1">
            <SearchBar
              label="Usuario de GitHub"
              value={username}
              onChange={setUsername}
              placeholder="facebook"
            />
          </div>

          <button
            onClick={refetch}
            className="px-4 py-2 rounded-lg bg-slate-900 text-white font-medium"
          >
            Cargar repos
          </button>

          <div className="flex-1">
            <SearchBar
              label="Buscar repo"
              value={query}
              onChange={setQuery}
              placeholder="react..."
            />
          </div>
        </div>

        {loading && <p className="mt-4 text-sm text-slate-600">Cargando...</p>}
        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
        <p className="mt-4 text-xs text-slate-500">
          Favoritos guardados: {favorites.length}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((repo) => (
          <RepoCard
            key={repo.id}
            repo={repo}
            username={username}
            isFav={favorites.includes(repo.name)}
            onToggleFav={toggleFav}
          />
        ))}
      </div>
    </section>
  );
}
