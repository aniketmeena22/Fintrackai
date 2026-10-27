
import {
  Wallet,
  TrendingDown,
  PiggyBank,
  HeartPulse,
} from 'lucide-react'

const summaryData = [
  {
    title: 'Monthly Income',
    amount: '₹45,000',
    subtitle: 'Total income this month',
    icon: Wallet,
  },
  {
    title: 'Monthly Expenses',
    amount: '₹28,500',
    subtitle: 'Total expenses this month',
    icon: TrendingDown,
  },
  {
    title: 'Total Savings',
    amount: '₹16,500',
    subtitle: 'Income minus expenses',
    icon: PiggyBank,
  },
  {
    title: 'Financial Health',
    amount: '78/100',
    subtitle: 'Good financial health',
    icon: HeartPulse,
  },
]

function AdvisorSummary() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {summaryData.map((item) => {
        const Icon = item.icon

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 transition duration-200 hover:border-emerald-500/40"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-400">
                {item.title}
              </p>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10">
                <Icon className="h-5 w-5 text-emerald-400" />
              </div>
            </div>

            <h3 className="mt-4 text-2xl font-bold tracking-tight text-white">
              {item.amount}
            </h3>

            <p className="mt-2 text-xs text-slate-500">
              {item.subtitle}
            </p>

            {item.title === 'Financial Health' && (
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-[78%] rounded-full bg-emerald-400" />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default AdvisorSummary
