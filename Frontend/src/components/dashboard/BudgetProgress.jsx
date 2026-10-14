const budgets = [
  {
    id: 1,
    category: 'Food',
    limit: 5000,
    spent: 3500,
  },
  {
    id: 2,
    category: 'Transport',
    limit: 3000,
    spent: 1200,
  },
  {
    id: 3,
    category: 'Entertainment',
    limit: 2000,
    spent: 1600,
  },
]

function BudgetProgress() {
  return (
    <section className="h-full rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white">
          Budget Progress
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Track your spending against your limits
        </p>
      </div>

      {/* Budget Categories */}
      <div className="space-y-6">
        {budgets.map((budget) => {
          const percentage =
            budget.limit > 0
              ? (budget.spent / budget.limit) * 100
              : 0

          const remaining = budget.limit - budget.spent
          const progress = Math.min(percentage, 100)

          const progressColor =
            percentage >= 100
              ? 'bg-rose-400'
              : percentage >= 80
                ? 'bg-amber-400'
                : 'bg-emerald-400'

          return (
            <div key={budget.id} className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-medium text-white">
                  {budget.category}
                </h3>
                <span className="text-xs text-slate-400">
                  {percentage.toFixed(0)}% used
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <p className="text-sm text-slate-300">
                  ₹{budget.spent.toLocaleString('en-IN')}
                  <span className="text-slate-500">
                    {' '} / ₹{budget.limit.toLocaleString('en-IN')}
                  </span>
                </p>
                <p className={`text-xs font-medium ${remaining < 0 ? 'text-rose-400' : 'text-slate-400'}`}>
                  {remaining < 0 ? 'Over by ' : '₹'}
                  {Math.abs(remaining).toLocaleString('en-IN')}
                  {remaining < 0 ? '' : ' left'}
                </p>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${progressColor}`}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default BudgetProgress