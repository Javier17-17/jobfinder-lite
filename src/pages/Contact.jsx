export default function Contact() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-3">Contacto</h1>
      <p className="text-slate-700 mb-6">
        Aquí tienes mis enlaces. (Luego añadiremos el QR a la web y al GitHub).
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          className="px-4 py-2 rounded-lg bg-slate-900 text-white text-center"
          href="https://github.com/TU_USUARIO"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="px-4 py-2 rounded-lg border text-center"
          href="mailto:TU_EMAIL@gmail.com"
        >
          Email
        </a>
        <a
          className="px-4 py-2 rounded-lg border text-center"
          href="https://www.linkedin.com/in/TU_PERFIL"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
