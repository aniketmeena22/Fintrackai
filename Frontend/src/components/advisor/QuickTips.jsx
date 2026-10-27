
import {
  PiggyBank,
  Wallet,
  ShieldCheck,
  CreditCard,
  ChevronRight,
  Lightbulb,
} from 'lucide-react'

const tips = [
  {
    title: 'Save First',
    description: 'Set aside a portion of your income before spending.',
    icon: PiggyBank,
  },
  {
    title: 'Track Spending',
    description: 'Monitor daily expenses to stay within your budget.',
    icon: Wallet,
  },
  {
    title: 'Build Emergency Fund',
    description: 'Keep savings ready for unexpected expenses.',
    icon: ShieldCheck,
  },
  {
    title: 'Avoid Unnecessary Debt',
    description: 'Limit non-essential borrowing and extra interest.',
    icon: CreditCard,
  },
]

function QuickTips() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 sm:p-5">
      {/* Header */}
      <div className="mb-5 flex items-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10">
          <Lightbulb className="h-4 w-4 text-emerald-400" />
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">
            Quick Tips
          </h2>
          <p className="mt-0.5 text-xs text-slate-400">
            Small steps, better finances
          </p>
        </div>
      </div>

      {/* Tips List */}
      <div className="space-y-2">
        {tips.map((tip) => {
          const Icon = tip.icon

          return (
            <div
              key={tip.title}
              className="group flex items-start gap-3 rounded-xl border border-transparent p-3 transition-all duration-200 hover:border-slate-700 hover:bg-slate-800/70"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 transition-colors group-hover:bg-emerald-500/15">
                <Icon className="h-4 w-4 text-emerald-400" />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-xs font-medium text-slate-200">
                  {tip.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  {tip.description}
                </p>
              </div>

              <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-slate-600 transition-transform group-hover:translate-x-0.5 group-hover:text-emerald-400" />
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <div className="mt-4 rounded-xl border border-emerald-500/15 bg-emerald-500/5 p-3">
        <p className="text-xs leading-5 text-slate-300">
          <span className="font-medium text-emerald-400">
            Pro tip:
          </span>{' '}
          Consistency matters more than perfection. Review your finances weekly.
        </p>
      </div>
    </div>
  )
}

export default QuickTips
