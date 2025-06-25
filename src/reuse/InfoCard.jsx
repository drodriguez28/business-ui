import React from "react";
import { Card } from "flowbite-react";

export const InfoCard = () => {
  return (
    <Card className="max-w-sm" imgSrc="/images/profile-pic.png" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Service Areas
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Roswell, Alpharetta, Dunwoody, Sandy Springs
      </p>
      <h6 className="text-lg font-semibold mt-4 text-gray-900 dark:text-white">
        Hours
      </h6>
      <ul className="font-normal text-gray-700 dark:text-gray-400 list-disc list-inside">
        <li>Monday 9am-5pm</li>
        <li>Tuesday 9am-5pm</li>
        <li>Wednesday 9am-5pm</li>
        <li>Thursday 9am-5pm</li>
        <li>Friday 9am-5pm</li>
        <li>Saturday Closed</li>
        <li>Sunday Closed</li>
      </ul>
      <p className="font-normal text-gray-700 dark:text-gray-400 mt-4">
        (404) 860-4223
      </p>
    </Card>
  );
};
