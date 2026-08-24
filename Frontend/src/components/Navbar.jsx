import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-900 px-8 py-4 flex justify-between items-center">
      <h1 className="text-green-400 font-bold text-xl">FinTrackAI</h1>
      <div className="flex gap-6">
        <Link to="/" className="text-white hover:text-green-400">Home</Link>
        <Link to="/dashboard" className="text-white hover:text-green-400">Dashboard</Link>
        <Link to="/transactions" className="text-white hover:text-green-400">Transactions</Link>
        <Link to="/ai-insights" className="text-white hover:text-green-400">AI Insights</Link>
      </div>
    </nav>
  )
}

export default Navbar