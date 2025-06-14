import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Cleaning from './components/Cleaning'
import Landscaping from './components/Landscaping'
import ContactMe from './components/ContactMe'
import AutoDetailing from './components/AutoDetailing'
import './App.css'


function App() {

  return (
    <Router>
      <div>
        <div className="w-full flex justify-center py-4">
          <img src="/images/trustmepic.png" alt="Trust Me" className="h-35"/>
        </div>
        <nav className="w-full py-6 mb-5 bg-amber-300">
          <div className='mx-4 text-lg'>
            <Link to="/" className='mx-4'>Home</Link>
            <Link to="/auto-detailing" className='mx-4'>Auto Detailing</Link>
            <Link to="/cleaning" className='mx-4'>Cleaning</Link>
            <Link to="/landscaping" className='mx-4'>Landscaping</Link>
            <Link to="/contact-me" className='mx-4'>Contact Me</Link>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auto-detailing" element={<AutoDetailing />} />
        <Route path="/cleaning" element={<Cleaning />} />
        <Route path="/landscaping" element={<Landscaping />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
    </Router>
  )
}

export default App