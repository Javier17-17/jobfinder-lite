import useFetch from "../hooks/useFetch";
import { reposUrl } from "../services/githubApi";

export default function Projects() {
  const username = "Javier17-17";

  
  const featuredRepoNames = [
    "Proyecto-CRM",             // 
    "ascensor-social-dashboard", // 
    "jobfinder-lite",  // este sí debería coincidir
  ].map((n) => n.toLowerCase());

  const { data, loading, error } = useFetch(reposUrl(username));
  const repos = Array.isArray(data) ? data : [];

  // Filtramos SOLO los repos elegidos
  const featured = repos.filter((r) =>
    featuredRepoNames.includes(r.name.toLowerCase())
  );

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-2">Proyectos destacados</h1>
      <p className="text-slate-700 mb-6">
        Estos son mis proyectos principales (selección para feria).
      </p>

      {loading && <p className="text-sm text-slate-600">Cargando...</p>}

      {error && (
        <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="font-semibold">Error:</p>
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <>
          {featured.length === 0 ? (
            <div className="bg-white border rounded-xl p-5">
              <p className="font-semibold">No se han encontrado los repos seleccionados.</p>
              <p className="text-sm text-slate-700 mt-2">
                Revisa los nombres en <b>featuredRepoNames</b>. Deben coincidir EXACTO
                con los nombres de tu GitHub.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-4">
              {featured.map((repo) => (
                <div key={repo.id} className="bg-white rounded-xl border p-5">
                  <h2 className="font-semibold text-lg">{repo.name}</h2>

                  <p className="text-slate-700 text-sm mt-2 line-clamp-3">
                    {repo.description || "Proyecto personal (sin descripción)."}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-700">
                    <span className="px-2 py-1 rounded-full bg-slate-100 border">
                      ⭐ {repo.stargazers_count}
                    </span>
                    <span className="px-2 py-1 rounded-full bg-slate-100 border">
                      🍴 {repo.forks_count}
                    </span>
                    <span className="px-2 py-1 rounded-full bg-slate-100 border">
                      🧠 {repo.language || "N/A"}
                    </span>
                  </div>

                  <div className="mt-5 flex gap-2">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium"
                    >
                      Ver código
                    </a>

                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center px-4 py-2 rounded-lg border text-sm font-medium hover:bg-slate-50"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Extra: enlace a tu GitHub */}
          <div className="mt-8 text-sm text-slate-700">
            Más repos en:{" "}
            <a
              className="underline font-medium"
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noreferrer"
            >
              github.com/{username}
            </a>
          </div>
        </>
      )}
    </section>
  );
}
