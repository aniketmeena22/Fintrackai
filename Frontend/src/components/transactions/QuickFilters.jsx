
import { useState } from 'react'
import { ChevronRight, Filter } from 'lucide-react'

function QuickFilters() {
  const [activeFilter, setActiveFilter] = useState('This Month')

  const filters = [
    'Today',
    'This Week',
    'This Month',
    'Last 3 Months',
    'Custom Range',
  ]

  return (
    <div className="rounded-2xl border border-slate-700/60 bg-slate-900/80 p-4">
      <div className="mb-3 flex items-center gap-2">
        <Filter size={16} className="text-teal-400" />
        <h2 className="text-sm font-semibold text-white">
          Quick Filters
        </h2>
      </div>

      <div className="space-y-1">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs ${
              activeFilter === filter
                ? 'border border-blue-400/20 bg-blue-500/15 text-blue-300'
                : 'border border-transparent text-slate-300 hover:bg-slate-800'
            }`}
          >
            <span>{filter}</span>
            <ChevronRight size={14} />
          </button>
        ))}
      </div>
    </div>
  )
}

export default QuickFilters 
