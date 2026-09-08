import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import Transactions from './Pages/Transactions'
import SmartAdvisor from './Pages/SmartAdvisor'

import Navbar from './Components/Navbar'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/smartadvisor" element={<SmartAdvisor />} />
      </Routes>
    </>
  )
}

export default App