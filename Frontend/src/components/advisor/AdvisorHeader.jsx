
import { Sparkles } from 'lucide-react'

function AdvisorHeader() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6">

      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-64 bg-gradient-to-l from-emerald-500/10 to-transparent" />

      <div className="relative flex items-center justify-between gap-6">
        {/* Left Content */}
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
            <Sparkles size={28} strokeWidth={1.7} />
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-emerald-400">
              AI Financial Advisor
            </p>

            <h2 className="mt-1 text-2xl font-bold text-white">
              Hi Aniket! 👋
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
              I'm your personal financial advisor. Ask me anything
              about your money, get personalized insights, and make
              smarter financial decisions.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                'Analyse spending',
                'Plan budget',
                'Save more',
                'Reach goals',
              ].map((action) => (
                <button
                  key={action}
                  className="rounded-full border border-slate-700 px-4 py-1.5 text-xs font-medium text-slate-300 transition hover:border-emerald-400 hover:text-emerald-400"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right AI Section */}
        <div className="hidden shrink-0 flex-col items-center gap-2 lg:flex">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
            <Sparkles size={38} strokeWidth={1.4} />
          </div>

          <p className="text-xs text-slate-400">
            Ask me anything...
          </p>

          <p className="text-xs font-medium text-emerald-400">
            I'm here to help!
          </p>
        </div>
      </div>
    </div>
  )
}

export default AdvisorHeader
