export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} • Showcase Frontend • React + Tailwind</p>
      </div>
    </footer>
  );
}
