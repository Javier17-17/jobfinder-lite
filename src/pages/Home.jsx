export default function Home() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-3">Hola, soy Javi 👋</h1>
      <p className="text-slate-700 mb-6">
        Soy Frontend Junior y este es mi showcase para feria de empleo. En 2
        minutos puedes ver mi forma de estructurar un proyecto, usar React y
        consumir una API.
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border p-5">
          <h2 className="font-semibold mb-1">Stack</h2>
          <p className="text-slate-700 text-sm">React • Tailwind • JavaScript</p>
        </div>

        <div className="bg-white rounded-xl border p-5">
          <h2 className="font-semibold mb-1">Fortalezas</h2>
          <p className="text-slate-700 text-sm">
            Componentes reutilizables y código claro
          </p>
        </div>

        <div className="bg-white rounded-xl border p-5">
          <h2 className="font-semibold mb-1">Objetivo</h2>
          <p className="text-slate-700 text-sm">Frontend Junior</p>
        </div>
      </div>
    </section>
  );
}
