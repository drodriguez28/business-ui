import React from 'react'
import Carousel from '../reuse/Carousel'

function Condo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-4 text-black">Book this condo</h1>
      <Carousel />
      <p className="mb-6 text-lg">Interested in booking this place?</p>
      <a
        href="http://kurt-giebel.lodgify.com"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-blue-700 transition"
      >
        Book Now
      </a>
    </div>
  )
}

export default Condo