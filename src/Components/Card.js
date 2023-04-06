import React from "react";
import Logo from './logo.png'

const Card = ({ data }) => {
  return (
    <div className="card rounded-lg border-1 flex flex-row w-2/5 mx-auto my-12 bg-white">
      <div className="m-4">
        <div className="flex flex-row justify-start">
          <img
            src={Logo}
            alt="logo"
            className="h-12 w-12 mr-5"
          />
          <div className="flex flex-col">
            <p className="text-2xl">{data.title}</p>
            <div className="flex flex-row">
              <p className="text-base">{data.company} -</p>
              <p className="text-base">{data.industry}</p>
            </div>
            <div className="flex flex-row text-gray-400">
              <p className="location">{data.location}</p>
              <p className="type">({data.type})</p>
            </div>
            <br />
            <div className="content">
              <p className="time">Part Time (9:00 am - 5:00 pm IST)</p>
              <p className="experience">
                Experience ({data.expMin} - {data.expMax} years)
              </p>
              <p className="salary">
                INR {data.salMin} - {data.salMax}/Month
              </p>
              <p className="employee">{data.employee} Employees</p>
            </div>
            <div className="rounded-sm mt-8 mb-2">
              {data.apply === "Quick" && (
                <button className="bg-sky-400 text-white p-2 w-auto rounded-sm">Apply Now</button>
              )}
              {data.apply === "External" && (
                <button className="border-2 border-sky-400 text-sky-400 bg-white p-2 w-auto rounded-sm">External Apply</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
