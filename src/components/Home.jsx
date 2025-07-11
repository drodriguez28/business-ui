import React from "react";
import { Cards } from "../reuse/Cards";
import { InfoCard } from "../reuse/InfoCard";

function Home() {
  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      {" "}
      {/* 1. Outer container */}
      <div className="mb-8 text-center max-w-3xl mx-auto">
        {" "}
        {/* 2. Header container */}
        <h1 className="text-3xl font-bold mb-4">Home/Auto care</h1>
        <p className="text-lg">
          Save time by getting all your cleaning needs meet on your personal or
          business assets. We are here to provide a hassle free and efficient
          process for our clients. Only high quality work, all in one place.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center mb-8">
        {" "}
        {/* 3. Cards container */}
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
        <div className="md:col-span-2 flex justify-center w-full">
          <Cards
            title="Landscaping"
            description="Get your yard or business looking professional with our landscaping option to maintain a beautiful aesthetic for clients/employees to admire"
            link="/landscaping"
          />
        </div>
      </div>
      <div className="flex justify-center">
        {" "}
        {/* 4. InfoCard container */}
        <InfoCard />
      </div>
    </div>
  );
}

export default Home;
