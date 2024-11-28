import React from 'react'
import Header from '../components/Header.jsx/index'
import Footer from '../components/Footer.jsx/index'

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