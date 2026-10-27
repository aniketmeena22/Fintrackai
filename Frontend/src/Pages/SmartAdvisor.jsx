import AdvisorHeader from '../Components/advisor/AdvisorHeader'
import AdvisorSummary from '../Components/advisor/AdvisorSummary'
import PersonalizedRecommendations from '../Components/advisor/PersonalizedRecommendations'
import FinancialGoals from '../Components/advisor/FinancialGoals'
import QuickTips from '../Components/advisor/QuickTips'
import AdvisorChat from '../Components/advisor/AdvisorChat'

function SmartAdvisor() {
  return (
    <div className="min-h-screen bg-slate-950 p-4 text-white sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">

        {/* Page Header */}
        <AdvisorHeader />

        {/* Summary Cards */}
        <AdvisorSummary />

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-5">

          {/* Left Section */}
          <div className="min-w-0 space-y-6 xl:col-span-3">
            <PersonalizedRecommendations />
            <AdvisorChat />
          </div>

          {/* Right Sidebar */}
          <div className="min-w-0 space-y-6 xl:col-span-2">
            <FinancialGoals />
            <QuickTips />
          </div>

        </div>
      </div>
    </div>
  )
}

export default SmartAdvisor