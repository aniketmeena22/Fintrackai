
import DashboardHeader from '../Components/dashboard/DashboardHeader'
import SummaryCard from '../Components/dashboard/SummaryCard'
import QuickActions from '../Components/dashboard/QuickActions'
import CashFlowChart from '../Components/dashboard/CashFlowChart'
import SpendingBreakdown from '../Components/dashboard/SpendingBreakdown'
import RecentTransactions from '../Components/dashboard/RecentTransactions'
import BudgetProgress from '../Components/dashboard/BudgetProgress'
import InsightCard from '../Components/dashboard/InsightCard'

function Dashboard() {
  return (
    <main className="mx-auto w-full max-w-[1600px] space-y-6 px-4 pb-8 pt-24 sm:px-6 lg:px-8">
      {/* Dashboard Header */}
      <DashboardHeader />

      {/* Summary Cards */}
      <SummaryCard />

      {/* Top Row: Charts and Insights */}
      <div className="grid grid-cols-1 items-stretch gap-6 xl:grid-cols-3">
        <div className="min-w-0">
          <CashFlowChart />
        </div>

        <div className="min-w-0">
          <SpendingBreakdown />
        </div>

        <div className="min-w-0">
          <InsightCard />
        </div>
      </div>

      
{/* Bottom Row */}
<div className="grid grid-cols-1 items-stretch gap-6 xl:grid-cols-3">
  {/* Recent Transactions */}
  <div className="min-w-0 xl:col-span-2">
    <RecentTransactions />
  </div>

  {/* Budget Progress */}
  <div className="min-w-0">
    <BudgetProgress />
  </div>
</div>

{/* Quick Actions: Recent Transactions ke niche */}
<div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
  <div className="min-w-0 xl:col-span-2">
    <QuickActions />
  </div>
</div>

    </main>
  )
}

export default Dashboard
