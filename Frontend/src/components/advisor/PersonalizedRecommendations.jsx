
import {
  PiggyBank,
  ChartNoAxesCombined,
  Target,
  ArrowUpRight,
  ChevronRight,
  Sparkles,
} from 'lucide-react'

const recommendations = [
  {
    id: 1,
    title: 'Boost Your Savings',
    description:
      'Save more by setting aside a portion of your monthly income.',
    action: 'Save More',
    icon: PiggyBank,
    iconStyle: 'bg-emerald-500/10 text-emerald-400',
    tag: 'Savings',
  },
  {
    id: 2,
    title: 'Reduce Food Expenses',
    description:
      'Review your food spending and find opportunities to cut costs.',
    action: 'View Expenses',
    icon: ChartNoAxesCombined,
    iconStyle: 'bg-blue-500/10 text-blue-400',
    tag: 'Spending',
  },
  {
    id: 3,
    title: 'Set a Monthly Target',
    description:
      'Create a monthly savings target and stay on track with your goals.',
    action: 'Set Target',
    icon: Target,
    iconStyle: 'bg-amber-500/10 text-amber-400',
    tag: 'Goals',
  },
]

function PersonalizedRecommendations() {
  const handleAction = (title) => {
    // Navigation/action can be connected later.
    console.log(`${title} clicked`)
  }

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 sm:p-5">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10">
            <Sparkles className="h-4 w-4 text-emerald-400" />
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">
              Personalized Recommendations
            </h2>
            <p className="mt-1 text-xs text-slate-400">
              Smart suggestions for your finances
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => handleAction('View All Recommendations')}
          className="shrink-0 text-xs font-medium text-emerald-400 transition hover:text-emerald-300"
        >
          View All
          <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" />
        </button>
      </div>

      {/* Recommendations */}
      <div className="space-y-3">
        {recommendations.map((item) => {
          const Icon = item.icon

          return (
            <article
              key={item.id}
              className="group rounded-xl border border-slate-800/80 bg-slate-950/30 p-3 transition duration-200 hover:border-slate-700 hover:bg-slate-800/50 sm:p-4"
            >
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.iconStyle}`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xs font-semibold text-slate-100 sm:text-sm">
                      {item.title}
                    </h3>

                    <span className="rounded-full border border-slate-700/70 px-2 py-0.5 text-[10px] text-slate-400">
                      {item.tag}
                    </span>
                  </div>

                  <p className="mt-1.5 text-xs leading-5 text-slate-400">
                    {item.description}
                  </p>

                  {/* Action */}
                  <button
                    type="button"
                    onClick={() => handleAction(item.title)}
                    className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400 transition hover:bg-emerald-500/20"
                  >
                    {item.action}
                    <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default PersonalizedRecommendations
