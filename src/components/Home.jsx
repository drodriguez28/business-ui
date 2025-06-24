import React from 'react'
import { Cards } from '../reuse/Cards'


function Home() {
  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Home/Auto care</h1>
      <p className="text-lg mb-8">
        Save time by getting all your cleaning needs meet on your personal or business assets. We are here to provide a hassle free and efficient process for our clients. Only high quality work, all in one place.
      </p>
      <div className="flex gap-6 justify-center flex-wrap">
        <Cards
          title="Auto Detailing"
          description="We offer many kinds of options, to suit any customers needs. Such as Exterior only, Basic package, premium package, and prestige package"
          link="/auto-detailing"
        />
        <Cards
          title="Personal/Business Cleaning"
          description="We offer many kinds of plans to cater to the individual/business. For either consistent care on a weekly/bi-weekly or a monthly basis."
          link="/cleaning"
        />
        <Cards
          title="Landscaping"
          description="Get your yard or business looking professional with our landscaping option to maintain a beautiful aesthetic for clients/employees to admire"
          link="/landscaping"
        />
      </div>
    </div>
  )
}

export default Home