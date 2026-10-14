import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from '../Components/Sidebar'
import Topbar from '../Components/Topbar'

function DashboardLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950">

      <Sidebar isCollapsed={isCollapsed} />

      <Topbar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />

      <main
        className={`px-4 ${
          isCollapsed ? 'ml-20' : 'ml-64'
        }`}
      >
        <Outlet />
      </main>

    </div>
  )
}

export default DashboardLayout