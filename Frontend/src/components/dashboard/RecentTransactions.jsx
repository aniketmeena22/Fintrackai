const transactions = [
  {
    id: 1,
    date: 'Oct 15, 2025',
    name: 'Zomato',
    category: 'Food',
    amount: 350,
    type: 'expense',
  },
  {
    id: 2,
    date: 'Oct 14, 2025',
    name: 'Salary',
    category: 'Income',
    amount: 45000,
    type: 'income',
  },
  {
    id: 3,
    date: 'Oct 12, 2025',
    name: 'Amazon',
    category: 'Shopping',
    amount: 1250,
    type: 'expense',
  },
  {
    id: 4,
    date: 'Oct 10, 2025',
    name: 'Electricity Bill',
    category: 'Bills',
    amount: 1800,
    type: 'expense',
  },
  {
    id: 5,
    date: 'Oct 08, 2025',
    name: 'Bus Ticket',
    category: 'Travel',
    amount: 120,
    type: 'expense',
  },
]

const categoryColors = {
  Food: 'bg-orange-500/10 text-orange-400',
  Income: 'bg-emerald-500/10 text-emerald-400',
  Shopping: 'bg-violet-500/10 text-violet-400',
  Bills: 'bg-cyan-500/10 text-cyan-400',
  Travel: 'bg-sky-500/10 text-sky-400',
}

function RecentTransactions() {
  return (
    <section className="h-full rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6">

      {/* Header */}
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Recent Transactions
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Your latest financial activity
          </p>
        </div>
        <button
          type="button"
          className="shrink-0 text-xs font-medium text-emerald-400 transition hover:text-emerald-300"
        >
          View All →
        </button>
      </div>

      {/* Empty State */}
      {transactions.length === 0 ? (
        <div className="py-10 text-center">
          <p className="text-3xl">📭</p>
          <p className="mt-2 text-sm text-slate-400">No transactions yet</p>
          <p className="mt-1 text-xs text-slate-500">Add your first transaction to get started</p>
        </div>
      ) : (

        /* Transactions Table */
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left">
            <thead>
              <tr className="border-b border-slate-800 text-xs text-slate-400">
                <th className="px-3 py-3 font-medium">Date</th>
                <th className="px-3 py-3 font-medium">Description</th>
                <th className="px-3 py-3 font-medium">Category</th>
                <th className="px-3 py-3 text-right font-medium">Amount</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-800">
              {transactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="transition hover:bg-slate-800/50"
                >
                  <td className="whitespace-nowrap px-3 py-3 text-xs text-slate-400">
                    {transaction.date}
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-xs font-semibold text-slate-300">
                        {transaction.name.charAt(0)}
                      </span>
                      <span className="whitespace-nowrap text-sm font-medium text-slate-200">
                        {transaction.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-3">
                    <span
                      className={`whitespace-nowrap rounded-md px-2 py-1 text-xs font-medium ${
                        categoryColors[transaction.category] ||
                        'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {transaction.category}
                    </span>
                  </td>
                  <td
                    className={`whitespace-nowrap px-3 py-3 text-right text-sm font-semibold ${
                      transaction.type === 'income'
                        ? 'text-emerald-400'
                        : 'text-rose-400'
                    }`}
                  >
                    {transaction.type === 'income' ? '+' : '-'}₹
                    {transaction.amount.toLocaleString('en-IN')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </section>
  )
}

export default RecentTransactions