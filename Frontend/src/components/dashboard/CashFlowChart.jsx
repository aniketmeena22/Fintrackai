import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { month: 'Jan', income: 45000, expense: 28000 },
  { month: 'Feb', income: 45000, expense: 32000 },
  { month: 'Mar', income: 48000, expense: 25000 },
  { month: 'Apr', income: 45000, expense: 35000 },
  { month: 'May', income: 50000, expense: 30000 },
  { month: 'Jun', income: 45000, expense: 27000 },
]

function CashFlowChart() {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white">Cash Flow</h2>
        <p className="mt-1 text-sm text-slate-400">Income vs Expenses over time</p>
      </div>

      <ResponsiveContainer width="100%" height={377}>
        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />

          <XAxis
            dataKey="month"
            tick={{ fill: '#94a3b8', fontSize: 12 }}
            axisLine={{ stroke: '#1e293b' }}
          />

          <YAxis
            tick={{ fill: '#94a3b8', fontSize: 12 }}
            axisLine={{ stroke: '#1e293b' }}
            tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}k`}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: '#0f172a',
              border: '1px solid #1e293b',
              borderRadius: '8px',
              color: '#fff',
            }}
            formatter={(value) => [`₹${value.toLocaleString()}`, '']}
          />

          <Legend wrapperStyle={{ color: '#94a3b8', fontSize: '12px' }} />

          <Line
            type="monotone"
            dataKey="income"
            stroke="#10b981"
            strokeWidth={2}
            dot={{ fill: '#10b981', r: 4 }}
            activeDot={{ r: 6 }}
            name="Income"
          />

          <Line
            type="monotone"
            dataKey="expense"
            stroke="#ef4444"
            strokeWidth={2}
            dot={{ fill: '#ef4444', r: 4 }}
            activeDot={{ r: 6 }}
            name="Expense"
          />

        </LineChart>
      </ResponsiveContainer>

    </section>
  )
}

export default CashFlowChart