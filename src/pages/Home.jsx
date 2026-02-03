export default function Home() {
  return (
    <section className="relative overflow-hidden">
      {/* Fondo con degradado */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-amber-400 opacity-90" />
      {/* “Brillos” decorativos */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 py-14">
        {/* Tarjeta principal */}
        <div className="bg-white/90 backdrop-blur border border-white/40 rounded-2xl shadow-xl p-8 md:p-12">
          <p className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium">
            Showcase Frontend • React + Tailwind
          </p>

          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
  Javier Sánchez Cañaveras
</h1>


          <p className="mt-4 text-lg text-slate-700 leading-relaxed max-w-3xl">
  Me llamo <span className="font-semibold">Javier Sánchez</span> y soy
  <span className="font-semibold"> FullStack Junior</span>. En este proyecto
  muestro cómo trabajo con React y cómo estructuro una aplicación frontend
  para que sea clara, ordenada y fácil de entender en pocos minutos.
  <br />
  <br />
  Aquí puedes ver mi forma de crear componentes reutilizables, gestionar el
  estado con hooks, consumir datos desde una API y aplicar un diseño moderno
  y responsive. 
</p>

          {/* Chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["React", "Tailwind", "JavaScript", "Vite", "Git"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-sm border"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Botones */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="/deep-dive"
              className="px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold text-center hover:opacity-95 transition"
            >
              Ver proyecto principal
            </a>

            <a
              href="/projects"
              className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold text-center border hover:bg-slate-50 transition"
            >
              Ver proyectos
            </a>

            <a
              href="/contact"
              className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold text-center border hover:bg-slate-50 transition"
            >
              Contacto
            </a>
          </div>

          {/* Mini bloque “lo que quiero que veas” */}
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            <div className="rounded-xl bg-white border p-4">
              <p className="text-sm font-semibold text-slate-900">
                Lo que quiero que veas primero
              </p>
              <p className="text-sm text-slate-700 mt-1">
                UI clara + estructura limpia
              </p>
            </div>

            <div className="rounded-xl bg-white border p-4">
              <p className="text-sm font-semibold text-slate-900">Demo técnica</p>
              <p className="text-sm text-slate-700 mt-1">
                API + búsqueda + detalle + favoritos
              </p>
            </div>

            <div className="rounded-xl bg-white border p-4">
              <p className="text-sm font-semibold text-slate-900">
                Buenas prácticas
              </p>
              <p className="text-sm text-slate-700 mt-1">
                Componentes, hooks, separación por carpetas
              </p>
            </div>
          </div>
        </div>

        {/* Texto inferior */}
        
      </div>
    </section>
  );
}
