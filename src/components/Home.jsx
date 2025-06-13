import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Home/Auto care</h1>
      <p className="text-lg mb-8">
        Save time by getting all your cleaning needs meet on your personal or business assets. We are here to provide a hassle free and efficient process for our clients. Only high quality work, all in one place.
      </p>
      <div className="flex gap-6 justify-center">
        <div className="bg-orange-300 shadow-md rounded-lg p-6 w-60 text-center">
          <h2 className="text-xl font-semibold mb-2">Auto Detailing</h2>
          <p>We offer many kinds of options, to suit any customers needs. Such as Exterior only, Basic package, premium package, and prestige package</p>
          <Link to="/auto-detailing">
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Get Started
            </button>
          </Link>
        </div>
        <div className="bg-orange-300 shadow-md rounded-lg p-6 w-60 text-center">
          <h2 className="text-xl font-semibold mb-2">Personal/Business Cleaning</h2>
          <p>We offer many kinds of plans to cater to the individual/business. For either consistent care on a weekly/bi-weekly or a monthly basis.</p>
          <Link to="/cleaning">
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Get Started
            </button>
          </Link>
        </div>
        <div className="bg-orange-300 shadow-md rounded-lg p-6 w-60 text-center">
          <h2 className="text-xl font-semibold mb-2">Landscaping</h2>
          <p>Get your yard or business looking professional with our landscaping option to maintain a beautiful aesthetic for clients/employees to admire</p>
          <Link to="/landscaping">
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home