import { CalendarDays, Plus } from 'lucide-react'

function DashboardHeader() {
  return (
    <header className="mb-6 flex flex-col gap-5 border-b border-slate-800 pb-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-medium text-emerald-400">
          Good morning, Aniket 👋
        </p>

        <h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
          Financial Dashboard
        </h1>

        <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
          <CalendarDays size={16} />
          <span>Monday, October 5</span>
        </div>
      </div>

      <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 sm:w-auto">
        <Plus size={18} />
        Add Transaction
      </button>
    </header>
  )
}

export default DashboardHeader