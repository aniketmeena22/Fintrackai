import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import Transactions from './Pages/Transactions'
import SmartAdvisor from './Pages/SmartAdvisor'

import Navbar from './Components/Navbar'
import DashboardLayout from './layouts/DashboardLayout'

function App() {
  return (
    <Routes>

      {/* Public Pages — with Navbar */}
      <Route path="/" element={<><Navbar /><Home /></>} />
      <Route path="/login" element={<><Navbar /><Login /></>} />
      <Route path="/register" element={<><Navbar /><Register /></>} />

      {/* Dashboard Pages — with DashboardLayout */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/smartadvisor" element={<SmartAdvisor />} />
      </Route>

    </Routes>
  )
}

export default App