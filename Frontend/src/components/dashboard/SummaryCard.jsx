import {
  Wallet,
  ArrowDownToLine,
  ArrowUpToLine,
  PiggyBank,
} from 'lucide-react'

const summaryData = [
  {
    title: 'Balance',
    value: '₹45,000',
    change: '+12.5%',
    icon: <Wallet size={20} />,
  },
  {
    title: 'Income',
    value: '₹55,000',
    change: '+8.2%',
    icon: <ArrowDownToLine size={20} />,
  },
  {
    title: 'Expenses',
    value: '₹12,500',
    change: '-5.4%',
    icon: <ArrowUpToLine size={20} />,
  },
  {
    title: 'Savings Rate',
    value: '42%',
    change: '+4.8%',
    icon: <PiggyBank size={20} />,
  },
]

function SummaryCard() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {summaryData.map((item) => {
        return (
          <div
            key={item.title}
            className="rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-slate-700 hover:bg-slate-800/80"
          >
            {/* Top */}
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium text-slate-400">
                {item.title}
              </h2>

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                {item.icon}
              </div>
            </div>

            {/* Value */}
            <p className="mt-4 text-2xl font-semibold text-white">
              {item.value}
            </p>

            {/* Change */}
            <p className="mt-2 text-xs font-medium text-emerald-400">
              {item.change} from last month
            </p>
          </div>
        )
      })}
    </section>
  )
}

export default SummaryCard