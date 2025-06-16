import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className="w-full flex justify-center py-4">
        <Link to="/">
          <img src="/images/trustmepic.png" alt="Trust Me" className="h-35" />
        </Link>
      </div>
      <nav className="w-full py-6 mb-5 bg-amber-300">
        <div className='mx-4 text-lg text-amber-950'>
          <Link to="/" className='mx-4'>Home</Link>
          <Link to="/auto-detailing" className='mx-4'>Auto Detailing</Link>
          <Link to="/cleaning" className='mx-4'>Cleaning</Link>
          <Link to="/landscaping" className='mx-4'>Landscaping</Link>
          <Link to="/condo" className='mx-4'>Condo</Link>
          <Link to="/contact-me" className='mx-4'>Contact Me</Link>
        </div>
      </nav>
    </div>
  )
}

export default Header