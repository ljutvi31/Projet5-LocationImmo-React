import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Housing from '../Pages/Housing'
import Error from '../Pages/Error'

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/housing/:id" element={<Housing />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default Router