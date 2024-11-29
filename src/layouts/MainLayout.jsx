import React from 'react'
import Header from '../components/Header/index'
import Footer from '../components/Footer/index'

function MainLayout({ children }) {
    return (
        <div className="layout">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default MainLayout
