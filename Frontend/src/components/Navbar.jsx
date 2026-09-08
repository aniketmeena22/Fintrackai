import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-800/80 bg-slate-950/85 px-6 py-4 text-white backdrop-blur lg:px-8">

      <Link to="/" className="text-xl font-bold tracking-tight">
        FinTrack <span className="text-emerald-400">AI</span>
      </Link>

      <div className="hidden gap-7 text-sm text-slate-400 md:flex">
        <Link to="/" className="transition hover:text-white">Home</Link>
        <a href="#features" className="transition hover:text-white">Features</a>
        <a href="#" className="transition hover:text-white">About</a>
      </div>

      <div className="flex items-center gap-4 text-sm">
        <Link to="/login" className="font-medium text-slate-300 transition hover:text-white">Login</Link>

        <Link
          to="/register"
          className="rounded-lg bg-emerald-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-emerald-300"
        >
          Get Started
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;
