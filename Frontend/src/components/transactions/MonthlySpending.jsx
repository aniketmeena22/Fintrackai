
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const monthlyData = [
  { month: 'May', spending: 8500 },
  { month: 'Jun', spending: 11000 },
  { month: 'Jul', spending: 9200 },
  { month: 'Aug', spending: 13500 },
  { month: 'Sep', spending: 10500 },
  { month: 'Oct', spending: 12500 },
]

function MonthlySpending() {
  return (
    <div className="rounded-2xl border border-slate-700/60 bg-slate-900/80 p-4">
      <h2 className="text-sm font-semibold text-white">
        Monthly Spending
      </h2>

      <p className="mt-3 text-2xl font-bold text-white">
        ₹12,500
      </p>

      <p className="mb-4 text-xs text-slate-400">
        Total expenses this month
      </p>

      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={monthlyData}>
            <XAxis
              dataKey="month"
              tick={{ fill: '#94a3b8', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              formatter={(value) => [
                `₹${Number(value).toLocaleString('en-IN')}`,
                'Spending',
              ]}
              contentStyle={{
                backgroundColor: '#0f172a',
                border: '1px solid #334155',
                borderRadius: '8px',
              }}
              labelStyle={{ color: '#e2e8f0' }}
            />

            <Bar
              dataKey="spending"
              fill="#2dd4bf"
              radius={[5, 5, 0, 0]}
              maxBarSize={28}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default MonthlySpending
