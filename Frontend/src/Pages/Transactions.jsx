
import TransactionHeader from '../Components/transactions/TransactionHeader'
import TransactionFilters from '../Components/transactions/TransactionFilters'
import TransactionSummary from '../Components/transactions/TransactionSummary'
import TransactionTable from '../Components/transactions/TransactionTable'
import TopCategories from '../Components/transactions/TopCategories'
import QuickFilters from '../Components/Transactions/QuickFilters'
import MonthlySpending from '../Components/transactions/MonthlySpending'

function Transaction() {
  return (
    <div className="space-y-6">
      <TransactionHeader />

      <TransactionFilters />

      <TransactionSummary />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3 xl:items-stretch">
        {/* Recent Transactions */}
        <div className="min-w-0 xl:col-span-2">
          <TransactionTable />
        </div>

        {/* Right Sidebar */}
        <div className="min-w-0 space-y-6">
          <QuickFilters />
          <TopCategories />
          <MonthlySpending />
        </div>
      </div>
    </div>
  )
}

export default Transaction
