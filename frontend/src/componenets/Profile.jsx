import React from "react";

const Profile = () => {
  return (
    <div className="w-full overflow-hidden px-10 py-5">
      <div className="w-full border-4 border-gray-400 rounded-md px-10 py-5">
        <progress
          className="progress h-3 progress-accent w-full"
          value="50"
          max="100"
        ></progress>
        <div className=" w-full flex gap-3">
          <div className="w-1/2 bg-gradient-to-l from-slate-300 rounded-md px-5 py-3">
            <h1 className="text-4xl mb-2 font-extrabold text-center font-['Reenie_Beanie']">
              Personal Info
            </h1>
            <label className="label p-0 pl-3 text-sm font-bold font-['Poppins']">
              <span className="text-base label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full mb-2 "
            />
            <label className="label p-0 pl-3 text-sm font-bold font-['Poppins']">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full mb-2 "
            />
            <label className="label p-0 pl-3 text-sm font-bold font-['Poppins']">
              <span className="text-base label-text">Position</span>
            </label>
            <input
              type="text"
              placeholder="Position"
              className="input input-bordered w-full mb-2 "
            />
            <label className="label p-0 pl-3 text-sm font-bold font-['Poppins']">
              <span className="text-base label-text">Skills</span>
            </label>
            <input
              type="text"
              placeholder="Ex: HTML, CSS, JAVA"
              className="input input-bordered w-full mb-2 "
            />
            <label className="label p-0 pl-3 text-sm font-bold font-['Poppins']">
              <span className="text-base label-text">About Us</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="About Us"
            ></textarea>
            <div className="flex justify-center gap-5 mt-2">
              <button className="btn btn-active">Clear</button>
              <button className="btn btn-active btn-neutral">Submit</button>
              <button className="btn btn-active btn-secondary">Next</button>
            </div>
          </div>
          <div className="w-1/2 border-2 border-gray-400 rounded-md px-5 py-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
