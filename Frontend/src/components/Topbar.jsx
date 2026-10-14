import {
  Menu,
  Search,
  Bell,
  ChevronDown,
} from 'lucide-react'

function Topbar({ isCollapsed, setIsCollapsed }) {

  return (
    <header
      className={`fixed right-0 top-0 z-30 flex h-16 items-center justify-between border-b border-slate-800 bg-slate-950 px-4 text-white transition-all md:px-6 ${
        isCollapsed ? 'left-20' : 'left-64'
      }`}
    >

      {/* Left Side */}
      <div className="flex items-center gap-4">

        {/* Menu Button */}
        <button
          onClick={() => setIsCollapsed(prev => !prev)}
          className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-900 hover:text-white"
        >
          <Menu size={22} />
        </button>

      </div>

      {/* Search */}
      <div className="hidden w-72 items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 md:flex">
        <Search size={18} className="text-slate-500" />

        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">

        {/* Notification */}
        <button className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-900 hover:text-white">
          <Bell size={20} />
        </button>

        {/* Profile */}
        <button className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-slate-900">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-slate-950">
            A
          </div>

          <span className="hidden text-sm font-medium sm:block">
            Aniket
          </span>

          <ChevronDown
            size={16}
            className="hidden text-slate-400 sm:block"
          />

        </button>

      </div>

    </header>
  )
}

export default Topbar