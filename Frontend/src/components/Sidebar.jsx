import { Link } from 'react-router-dom'
import { Wallet, LayoutDashboard, ArrowLeftRight, Brain, Plus, Settings } from 'lucide-react'

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col border-r border-slate-800 bg-slate-950 p-5 text-white">

      {/* Logo */}
      <div className="mb-10">
        <h2 className="text-xl font-bold">
          FinTrack <span className="text-emerald-400">AI</span>
        </h2>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        <Link
          to="/dashboard"
          className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-slate-400 transition hover:bg-slate-900 hover:text-white"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          to="/transactions"
          className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-slate-400 transition hover:bg-slate-900 hover:text-white"
        >
          <ArrowLeftRight size={20} />
          Transactions
        </Link>

        <Link
          to="/smartadvisor"
          className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-slate-400 transition hover:bg-slate-900 hover:text-white"
        >
          <Brain size={20} />
          Smart Advisor
        </Link>
      </nav>

      {/* Add Transaction */}
      <div className="mt-8">
        <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
          <Plus size={18} />
          Add Transaction
        </button>
      </div>

      {/* Settings */}
      <div className="mt-auto border-t border-slate-800 pt-4">
        <Link
          to="/settings"
          className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-white"
        >
          <Settings size={20} />
          Settings
        </Link>
      </div>

    </aside>
  )
}

export default Sidebar