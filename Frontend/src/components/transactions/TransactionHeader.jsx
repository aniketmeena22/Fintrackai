import { Wallet, Plus } from 'lucide-react'

function TransactionHeader({ onAddTransaction }) {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Page Title */}
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-teal-400">
          <Wallet size={24} />
        </div>

        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Transactions
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            Track your income and expenses
          </p>
        </div>
      </div>

      {/* Add Transaction Button */}
      <button
        type="button"
        onClick={onAddTransaction}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        <Plus size={18} />
        Add Transaction
      </button>
    </header>
  )
}

export default TransactionHeader 