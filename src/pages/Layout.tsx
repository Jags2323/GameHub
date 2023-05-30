import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router'


const Layout = () => {
    const [searchT, setSearchT] = useState<string>("");
  return (
    <div>
        <NavBar onSearch={(searchText) => setSearchT(searchText)} />
        <Outlet />
    </div>
  )
}

export default Layout
