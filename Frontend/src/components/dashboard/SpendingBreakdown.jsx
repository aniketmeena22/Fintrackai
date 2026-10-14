import {
  PieChart,
  Pie,
  Cell,
  Label,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { name: 'Food', amount: 12000 },
  { name: 'Shopping', amount: 7500 },
  { name: 'Travel', amount: 4500 },
  { name: 'Bills', amount: 3000 },
  { name: 'Others', amount: 3000 },
]

const COLORS = [
  '#f59e0b',
  '#8b5cf6',
  '#0ea5e9',
  '#10b981',
  '#64748b',
]

function SpendingBreakdown() {
  const totalSpending = data.reduce(
    (total, item) => total + item.amount,
    0
  )

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white">
          Spending Breakdown
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          See where your money goes
        </p>
      </div>

      {/* Chart and Expense List */}
      <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
        {/* Donut Chart */}
        <div className="h-64 w-full min-w-0 md:w-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="amount"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={65}
                outerRadius={95}
                paddingAngle={4}
              >
                <Label
                  value={`₹${totalSpending.toLocaleString('en-IN')}`}
                  position="center"
                  fill="#ffffff"
                  fontSize={20}
                  fontWeight={600}
                />

                {data.map((entry, index) => (
                  <Cell
                    key={entry.name}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>

              <Tooltip
                formatter={(value) =>
                  `₹${Number(value).toLocaleString('en-IN')}`
                }
                contentStyle={{
                  backgroundColor: '#0f172a',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#ffffff',
                }}
                itemStyle={{ color: '#ffffff' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Expense Categories */}
        <div className="w-full space-y-5 md:w-1/2">
          {data.map((item, index) => {
            const percentage = (
              (item.amount / totalSpending) *
              100
            ).toFixed(1)

            return (
              <div key={item.name} className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <span
                      className="h-3 w-3 shrink-0 rounded-full"
                      style={{
                        backgroundColor: COLORS[index],
                      }}
                    />

                    <span className="truncate text-sm text-slate-300">
                      {item.name}
                    </span>
                  </div>

                  <span className="shrink-0 text-sm font-medium text-white">
                    ₹{item.amount.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Category Progress Bar */}
                <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${percentage}%`,
                      backgroundColor: COLORS[index],
                    }}
                  />
                </div>

                <p className="text-xs text-slate-500">
                  {percentage}% of total spending
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SpendingBreakdown