export default function Projects() {
  const projects = [
    {
      title: "JobFinder Lite",
      desc: "Dashboard con API + búsqueda + favoritos (proyecto principal).",
    },
    {
      title: "ToDo Simple",
      desc: "CRUD básico con React: crear, completar y borrar tareas.",
    },
    {
      title: "Landing Responsive",
      desc: "Landing page moderna con diseño responsive.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Proyectos destacados</h1>

      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((p) => (
          <div key={p.title} className="bg-white rounded-xl border p-5">
            <h2 className="font-semibold mb-2">{p.title}</h2>
            <p className="text-slate-700 text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
