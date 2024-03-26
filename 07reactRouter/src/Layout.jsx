import React from 'react'
import Header from './components/header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

// outlet kaa kaam bss itna h ki sirf ye component update hoga baaki kaa part same rhega
// header as it is rakho footer as it is rakho jo outlet h woh display kara do

function Layout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout