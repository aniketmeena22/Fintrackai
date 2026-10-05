import { Outlet } from 'react-router-dom'

import Sidebar from '../Components/Sidebar'
import Topbar from '../Components/Topbar'

function DashboardLayout() {
  return (
    <div>
      <Sidebar />
      
      <div>
        <Topbar />
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout