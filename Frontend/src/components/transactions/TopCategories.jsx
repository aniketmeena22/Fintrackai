const categories = [
  { name: 'Food & Dining', amount: '₹4,500', width: '75%', color: 'bg-teal-400' },
  { name: 'Shopping', amount: '₹3,000', width: '55%', color: 'bg-purple-400' },
  { name: 'Transport', amount: '₹2,000', width: '35%', color: 'bg-blue-400' },
  { name: 'Bills', amount: '₹1,500', width: '25%', color: 'bg-orange-400' },
]

function TopCategories() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <h2 className="mb-5 font-semibold text-white">Top Categories</h2>

      <div className="space-y-5">
        {categories.map((item) => (
          <div key={item.name}>
            <div className="mb-2 flex justify-between gap-3 text-sm">
              <span className="text-slate-300">{item.name}</span>
              <span className="text-white">{item.amount}</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-800">
              <div
                className={`h-full rounded-full ${item.color}`}
                style={{ width: item.width }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopCategories ;