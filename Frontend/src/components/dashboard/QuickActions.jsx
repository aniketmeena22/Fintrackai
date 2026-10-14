import { Plus, TrendingUp, BarChart2, Sparkles } from 'lucide-react'

const actions = [
  {
    id: 1,
    title: 'Add Expense',
    description: 'Record your expense',
    icon: <Plus size={20} />,
    color: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    onClick: () => console.log('Add Expense'),
  },
  {
    id: 2,
    title: 'Add Income',
    description: 'Record your income',
    icon: <TrendingUp size={20} />,
    color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    onClick: () => console.log('Add Income'),
  },
  {
    id: 3,
    title: 'View Reports',
    description: 'Check detailed analytics',
    icon: <BarChart2 size={20} />,
    color: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    onClick: () => console.log('View Reports'),
  },
  {
    id: 4,
    title: 'Ask AI Advisor',
    description: 'Get personalised insights',
    icon: <Sparkles size={20} />,
    color: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    onClick: () => console.log('Ask AI Advisor'),
  },
]

function QuickActions() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6">

      {/* Header */}
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-white">Quick Actions</h2>
        <p className="mt-1 text-sm text-slate-400">Manage your finances quickly</p>
      </div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <button
            key={action.id}
            onClick={action.onClick}
            className={`flex flex-col items-start gap-3 rounded-xl border p-4 transition hover:opacity-80 ${action.color}`}
          >
            <span>{action.icon}</span>
            <div>
              <p className="text-sm font-semibold">{action.title}</p>
              <p className="mt-0.5 text-xs opacity-70">{action.description}</p>
            </div>
          </button>
        ))}
      </div>

    </section>
  )
}

export default QuickActions