const transactions = [
  { date: 'Oct 14', name: 'Monthly Salary', category: 'Salary', amount: '+₹45,000', type: 'Income' },
  { date: 'Oct 13', name: 'Zomato', category: 'Food', amount: '-₹350', type: 'Expense' },
  { date: 'Oct 12', name: 'Amazon', category: 'Shopping', amount: '-₹1,200', type: 'Expense' },
  { date: 'Oct 11', name: 'Freelance Work', category: 'Income', amount: '+₹5,000', type: 'Income' },
  { date: 'Oct 10', name: 'Electricity Bill', category: 'Bills', amount: '-₹1,800', type: 'Expense' },
  { date: 'Oct 09', name: 'Uber Ride', category: 'Transport', amount: '-₹450', type: 'Expense' },
  { date: 'Oct 08', name: 'Netflix', category: 'Entertainment', amount: '-₹649', type: 'Expense' },
  { date: 'Oct 07', name: 'Freelance Project', category: 'Income', amount: '+₹3,500', type: 'Income' },
  { date: 'Oct 06', name: 'Grocery Store', category: 'Food', amount: '-₹950', type: 'Expense' },
  { date: 'Oct 05', name: 'Mobile Recharge', category: 'Bills', amount: '-₹299', type: 'Expense' },
]

function TransactionTable() {
  return (
    <div className="h-full min-h-[420px] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      <div className="border-b border-slate-800 p-5">
        <h2 className="text-lg font-semibold text-white">
          Recent Transactions
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-800/50 text-slate-400">
            <tr>
              <th className="whitespace-nowrap px-4 py-3">Date</th>
              <th className="whitespace-nowrap px-4 py-3">Description</th>
              <th className="whitespace-nowrap px-4 py-3">Category</th>
              <th className="whitespace-nowrap px-4 py-3">Amount</th>
              <th className="whitespace-nowrap px-4 py-3">Type</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-800 text-slate-300">
            {transactions.map((item) => (
              <tr key={item.name} className="hover:bg-slate-800/40">
                <td className="whitespace-nowrap px-4 py-4">{item.date}</td>
                <td className="whitespace-nowrap px-4 py-4 font-medium text-white">{item.name}</td>
                <td className="whitespace-nowrap px-4 py-4">{item.category}</td>
                <td className={`whitespace-nowrap px-4 py-4 font-semibold ${item.type === 'Income' ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {item.amount}
                </td>
                <td className="whitespace-nowrap px-4 py-4">{item.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TransactionTable ;