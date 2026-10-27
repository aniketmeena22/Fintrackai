
import { useState } from 'react'
import { Search } from 'lucide-react'

function TransactionFilters() {
  const [activeType, setActiveType] = useState('All')
  const [search, setSearch] = useState('')
  const [date, setDate] = useState('Last 30 days')
  const [category, setCategory] = useState('All Categories')

  const types = ['All', 'Income', 'Expenses']

  return (
    <div className="space-y-4">

      {/* Search Bar */}
      <div className="relative">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search transactions, categories, or notes..."
          className="w-full rounded-xl border border-slate-700 bg-slate-900 px-10 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-teal-400"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex gap-2">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`rounded-full px-4 py-2 text-sm ${
                activeType === type
                  ? 'bg-teal-400 text-slate-950'
                  : 'bg-slate-800 text-slate-300'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Date and Category */}
        <div className="flex flex-col gap-2 min-[420px]:flex-row">

          <select
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-300 outline-none focus:border-teal-400"
          >
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>This Month</option>
            <option>Last Month</option>
            <option>All Time</option>
          </select>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-300 outline-none focus:border-teal-400"
          >
            <option>All Categories</option>
            <option>Food</option>
            <option>Shopping</option>
            <option>Utilities</option>
            <option>Travel</option>
            <option>Entertainment</option>
            <option>Salary</option>
            <option>Freelance</option>
            <option>Investment</option>
            <option>Other</option>
          </select>

        </div>
      </div>
    </div>
  )
}

export default TransactionFilters ;
