
import { House, Car, Plane, ChevronRight } from 'lucide-react'

const goals = [
  {
    title: 'Emergency Fund',
    target: 50000,
    saved: 20000,
    icon: House,
  },
  {
    title: 'Dream Car',
    target: 500000,
    saved: 150000,
    icon: Car,
  },
  {
    title: 'Vacation',
    target: 100000,
    saved: 25000,
    icon: Plane,
  },
]

const formatCurrency = (amount) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)

function FinancialGoals() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-white">
          Your Financial Goals
        </h2>

        <button className="text-xs font-medium text-emerald-400 hover:text-emerald-300">
          View All
        </button>
      </div>

      <div className="space-y-5">
        {goals.map((goal) => {
          const Icon = goal.icon
          const progress = Math.min(
            100,
            Math.round((goal.saved / goal.target) * 100),
          )

          return (
            <div key={goal.title}>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
                  <Icon className="h-4 w-4 text-emerald-400" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-white">
                    {goal.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    {formatCurrency(goal.target)}
                  </p>
                </div>

                <ChevronRight className="h-4 w-4 text-slate-500" />
              </div>

              <div className="mt-3">
                <div
                  role="progressbar"
                  aria-label={`${goal.title} progress`}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={progress}
                  className="h-1.5 overflow-hidden rounded-full bg-slate-800"
                >
                  <div
                    className="h-full rounded-full bg-emerald-400"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="mt-1.5 flex justify-between text-[10px] text-slate-400">
                  <span>{formatCurrency(goal.saved)} saved</span>
                  <span>{progress}%</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FinancialGoals
