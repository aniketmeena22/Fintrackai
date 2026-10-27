import { Wallet, TrendingUp, TrendingDown, Receipt } from 'lucide-react'

const summaries = [
  {
    title: 'Total Income',
    amount: '₹45,000',
    icon: TrendingUp,
    color: 'text-emerald-400',
  },
  {
    title: 'Total Expenses',
    amount: '₹12,500',
    icon: TrendingDown,
    color: 'text-rose-400',
  },
  {
    title: 'Net Balance',
    amount: '₹32,500',
    icon: Wallet,
    color: 'text-blue-400',
  },
  {
    title: 'Total Transactions',
    amount: '24',
    icon: Receipt,
    color: 'text-purple-400',
  },
]

function TransactionSummary() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {summaries.map((item) => {
        const Icon = item.icon

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-400">{item.title}</p>
              <Icon size={20} className={item.color} />
            </div>

            <h2 className="mt-4 text-2xl font-bold text-white">
              {item.amount}
            </h2>
          </div>
        )
      })}
    </div>
  )
}

export default TransactionSummary ;