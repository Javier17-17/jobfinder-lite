import { useMemo, useState } from "react";
import useFetch from "../hooks/useFetch";
import useLocalStorage from "../hooks/useLocalStorage";
import { reposUrl } from "../services/githubApi";
import SearchBar from "../components/SearchBar";
import RepoCard from "../components/RepoCard";

export default function DeepDive() {
  // Input (lo que escribes)
  const [usernameInput, setUsernameInput] = useState("facebook");
  // Usuario “confirmado” (el que se usa para pedir datos)
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

  const handleLoad = () => {
    const clean = usernameInput.trim();
    if (!clean) return;
    setUsername(clean);
    // refetch aquí NO es obligatorio porque el cambio de username ya cambia la URL
    // pero lo dejamos por claridad:
    setTimeout(() => refetch(), 0);
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
              value={usernameInput}
              onChange={setUsernameInput}
              placeholder="facebook"
            />
          </div>

          <button
            onClick={handleLoad}
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

        {error && (
          <div className="mt-4 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="font-semibold">Error:</p>
            <p>{error}</p>
            <p className="mt-2 text-xs text-red-700/80">
              Tip: si pone “API rate limit exceeded”, prueba en unos minutos o
              usa menos recargas.
            </p>
          </div>
        )}

        {!loading && !error && repos.length === 0 && (
          <p className="mt-4 text-sm text-slate-600">
            No hay repos para este usuario (o el usuario no existe).
          </p>
        )}

        <p className="mt-4 text-xs text-slate-500">
          Usuario actual: <span className="font-semibold">{username}</span> •
          Favoritos: {favorites.length}
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
