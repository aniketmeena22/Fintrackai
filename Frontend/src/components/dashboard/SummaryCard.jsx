const summaryData = [
  { title: 'Balance', value: '₹45,000' },
  { title: 'Income', value: '₹55,000' },
  { title: 'Expenses', value: '₹12,500' },
  { title: 'Savings Rate', value: '42%' }
]

function SummaryCard() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {summaryData.map((item) => {
        return (
          <div
           key={item.title} 
            className="rounded-xl border border-slate-800 bg-slate-900 p-5"
          >
            <h2 className="text-sm text-slate-400">{item.title}</h2>
            <p className="mt-2 text-2xl font-semibold text-white">
            {item.value}
            </p>
          </div>
        )
      })}
    </section>
  )
}

export default SummaryCard