import { Link, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  ArrowLeftRight,
  Brain,
  Plus,
  Settings,
} from 'lucide-react'

function Sidebar({ isCollapsed }) {
  const location = useLocation()

  const linkClass = (path) =>
    `flex items-center rounded-lg px-4 py-3 text-sm font-medium transition ${
      isCollapsed ? 'justify-center' : 'gap-3'
    } ${
      location.pathname === path
        ? 'bg-slate-800 text-white'
        : 'text-slate-400 hover:bg-slate-900 hover:text-white'
    }`

  const navLinks = [
    { to: '/dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { to: '/transactions', icon: <ArrowLeftRight size={20} />, label: 'Transactions' },
    { to: '/smartadvisor', icon: <Brain size={20} />, label: 'Smart Advisor' },
  ]

  return (
    <aside
      className={`fixed left-0 top-0 flex h-screen flex-col border-r border-slate-800 bg-slate-950 p-5 text-white ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Logo */}
      <div className="mb-10">
        {isCollapsed ? (
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500">
            <span className="font-bold text-slate-950">F</span>
          </div>
        ) : (
          <h2 className="text-xl font-bold">
            FinTrack <span className="text-emerald-400">AI</span>
          </h2>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {navLinks.map(({ to, icon, label }) => (
          <Link key={to} to={to} className={linkClass(to)}>
            {icon}
            {!isCollapsed && <span>{label}</span>}
          </Link>
        ))}
      </nav>

      {/* Add Transaction */}
      <div className="mt-8">
        <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
          <Plus size={18} />
          {!isCollapsed && <span>Add Transaction</span>}
        </button>
      </div>

      {/* Settings */}
      <div className="mt-auto border-t border-slate-800 pt-4">
        <Link to="/settings" className={linkClass('/settings')}>
          <Settings size={20} />
          {!isCollapsed && <span>Settings</span>}
        </Link>
      </div>

    </aside>
  )
}

export default Sidebar