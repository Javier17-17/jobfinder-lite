import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `px-3 py-2 rounded-lg text-sm font-medium transition ${
    isActive ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-200"
  }`;

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="font-bold">JobFinder Lite</div>

        <div className="flex gap-2">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Proyectos
          </NavLink>
          <NavLink to="/deep-dive" className={linkClass}>
            Deep Dive
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contacto
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
