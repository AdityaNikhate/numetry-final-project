import React from "react";

const Options = () => {
  const cata = ["IT Jobs Resume", "Teacher Resume", "Marketing Resume", "Business Analyst Resume", "Fashion Design Resume", "Photography Resume"]
  return (
    <div className=" w-full px-4 py-3 flex flex-col justify-center ">
      {
        cata.map((item, index)=>(
          <div className=" text-center">
          <button key={index} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200  dark:text-white  focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md ">
              {item}
            </span>
          </button>
          </div>
        ))
      }
    </div>
  );
};

export default Options;
