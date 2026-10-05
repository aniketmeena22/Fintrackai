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
   <main clas sName="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
      <DashboardHeader />
      <SummaryCard />
      <QuickActions />
      <CashFlowChart />
      <SpendingBreakdown />
      <RecentTransactions />
      <BudgetProgress />
      <InsightCard />
    </main>
  )
}

export default Dashboard
