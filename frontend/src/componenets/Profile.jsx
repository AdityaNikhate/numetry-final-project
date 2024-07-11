import React, { useState } from "react";

const Profile = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({
    name: "",
    email: "",
    position: "",
    skill: [],
    aboutus: "",
    contact: "",
    education: [],
    projects: [],
    experience: [],
  });

  const [edu, setEdu] = useState({
    institution: "",
    degree: "",
    startDate: "",
    endDate: "",
    grade: "",
  });

  const [exp, setExp] = useState({
    company: "",
    role: "",
    startDate: "",
    endDate: "",
    responsibilities: [],
  });

  const [project, setProject] = useState({
    title:"",
    description:"",
    technologies:[]
  })
  return (
    <div className="w-full overflow-hidden px-10 py-5">
      <div className="w-full border-4 border-gray-400 rounded-md px-10 py-5">
        <progress
          className="progress h-3 progress-accent w-full"
          value={count * 25}
          max="100"
        ></progress>
        {count == 0 && (
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
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
                value={data.name}
              />
              <label className="label p-0 pl-3 text-sm font-bold font-['Poppins']">
                <span className="text-base label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered w-full mb-2 "
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
                value={data.email}
              />
              <label className="label p-0 pl-3 text-sm font-bold font-['Poppins']">
                <span className="text-base label-text">Phone No.</span>
              </label>
              <input
                type="text"
                placeholder="Phone No."
                className="input input-bordered w-full mb-2 "
                onChange={(e) => {
                  setData({ ...data, contact: e.target.value });
                }}
                value={data.contact}
              />
              <label className="label p-0 pl-3 text-sm font-bold font-['Poppins']">
                <span className="text-base label-text">Position</span>
              </label>
              <input
                type="text"
                placeholder="Position"
                className="input input-bordered w-full mb-2 "
                onChange={(e) => {
                  setData({ ...data, position: e.target.value });
                }}
                value={data.position}
              />
              <label className="label p-0 pl-3 text-sm font-bold font-['Poppins']">
                <span className="text-base label-text">Skills</span>
              </label>
              <input
                type="text"
                placeholder="Ex: HTML, CSS, JAVA"
                className="input input-bordered w-full mb-2 "
                onChange={(e) => {
                  const skills = e.target.value
                    .split(",")
                    .map((skill) => skill.trim());
                  setData({ ...data, skill: skills });
                }}
                value={data.skill}
              />
              <label className="label p-0 pl-3 text-sm font-bold font-['Poppins']">
                <span className="text-base label-text">About Us</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="About Us"
                onChange={(e) => {
                  setData({ ...data, aboutus: e.target.value });
                }}
                value={data.aboutus}
              ></textarea>
              <div className="flex justify-center gap-5 mt-2">
                {/* <button className="btn btn-active" onClick={()=>{setCount(0)}}>Clear</button> */}
                <button
                  className="btn btn-active btn-neutral"
                  onClick={() => {
                    console.log(data);
                  }}
                >
                  Submit
                </button>
                <button
                  className="btn btn-active btn-secondary"
                  onClick={() => {
                    setCount(1);
                  }}
                >
                  Next
                </button>
              </div>
            </div>
            <div className="w-1/2 border-2 border-gray-400 rounded-md px-5 py-3"></div>
          </div>
        )}

        {count == 1 && (
          <div className=" w-full flex gap-3">
            <div className="w-1/2 bg-gradient-to-l from-slate-300 rounded-md px-5 py-3">
              <h1 className="text-4xl mb-2 font-extrabold text-center font-['Reenie_Beanie']">
                Education Details
              </h1>
              <label className="label p-0 pl-3 text-sm font-bold font-['Poppins']">
                <span className="text-base label-text">College Name</span>
              </label>
              <input
                type="text"
                placeholder="College Name"
                className="input input-bordered w-full mb-2 "
                onChange={(e) => {
                  setEdu({ ...edu, institution: e.target.value });
                }}
                value={edu.institution}
              />
              <label className="label p-0 pl-3 text-sm font-bold font-['Poppins']">
                <span className="text-base label-text">Branch Name</span>
              </label>
              <input
                type="text"
                placeholder="Branch Name"
                className="input input-bordered w-full mb-2 "
                onChange={(e) => {
                  setEdu({ ...edu, degree: e.target.value });
                }}
                value={edu.degree}
              />
              <label className="label p-0 pl-3 text-sm font-bold font-['Poppins']">
                <span className="text-base label-text">Starting Date</span>
              </label>
              <input
                type="text"
                placeholder="Starting Date"
                className="input input-bordered w-full mb-2 "
                onChange={(e) => {
                  setEdu({ ...edu, startDate: e.target.value });
                }}
                value={edu.startDate}
              />
              <label className="label p-0 pl-3 text-sm font-bold font-['Poppins']">
                <span className="text-base label-text">Ending Date</span>
              </label>
              <input
                type="text"
                placeholder="Ending Date"
                className="input input-bordered w-full mb-2 "
                onChange={(e) => {
                  setEdu({ ...edu, endDate: e.target.value });
                }}
                value={edu.endDate}
              />
              <label className="label p-0 pl-3 text-sm font-bold font-['Poppins']">
                <span className="text-base label-text">Marks</span>
              </label>
              <input
                type="Text"
                placeholder="Marks"
                className="input input-bordered w-full mb-2 "
                onChange={(e) => {
                  setEdu({ ...edu, grade: e.target.value });
                }}
                value={edu.grade}
              />

              <div className="flex justify-center gap-5 mt-2">
                <button className="btn btn-active" onClick={()=>{console.log(count); setCount(0)}}>Back</button>
                <button
                  className="btn btn-active btn-neutral"
                  onClick={() => {
                    const newEducation = [...data.education, edu];

                    setData((prevData) => ({
                      ...prevData,
                      education: newEducation,
                    }));

                    setEdu({
                      institution: "",
                      degree: "",
                      startDate: "",
                      endDate: "",
                      grade: "",
                    });
                  }}
                >
                  ADD
                </button>
                <button
                  className="btn btn-active btn-secondary"
                  onClick={() => {
                    setCount(2);
                  }}
                >
                  Next
                </button>
              </div>
            </div>
            <div className="w-1/2 border-2 border-gray-400 rounded-md px-5 py-3"></div>
          </div>
        )}

        {count == 2 && (
          <div className=" w-full flex gap-3">
            <div className="w-1/2 bg-gradient-to-l from-slate-300 rounded-md px-5 py-3">
              <h1 className="text-4xl mb-2 font-extrabold text-center font-['Reenie_Beanie']">
                Experience Details
              </h1>
              <label className="label p-0 pl-3 text-sm font-bold font-['Poppins']">
                <span className="text-base label-text">Company Name</span>
              </label>
              <input
                type="text"
                placeholder="Company Name"
                className="input input-bordered w-full mb-2 "
                onChange={(e) => {
                  setExp({ ...exp, company: e.target.value });
                }}
                value={exp.company}
              />
              <label className="label p-0 pl-3 text-sm font-bold font-['Poppins']">
                <span className="text-base label-text">Role</span>
              </label>
              <input
                type="text"
                placeholder="Role"
                className="input input-bordered w-full mb-2 "
                onChange={(e) => {
                  setExp({ ...exp, role: e.target.value });
                }}
                value={exp.role}
              />
              <label className="label p-0 pl-3 text-sm font-bold font-['Poppins']">
                <span className="text-base label-text">Starting Date</span>
              </label>
              <input
                type="text"
                placeholder="Starting Date"
                className="input input-bordered w-full mb-2 "
                onChange={(e) => {
                  setExp({ ...exp, startDate: e.target.value });
                }}
                value={exp.startDate}
              />
              <label className="label p-0 pl-3 text-sm font-bold font-['Poppins']">
                <span className="text-base label-text">Ending Date</span>
              </label>
              <input
                type="text"
                placeholder="Ending Date"
                className="input input-bordered w-full mb-2 "
                onChange={(e) => {
                  setExp({ ...exp, endDate: e.target.value });
                }}
                value={exp.endDate}
              />
              <label className="label p-0 pl-3 text-sm font-bold font-['Poppins']">
                <span className="text-base label-text">Responsibilities</span>
              </label>
              <input
                type="Text"
                placeholder="Responsibilities: .... , ...."
                className="input input-bordered w-full mb-2 "
                onChange={(e) => {
                  const respons = e.target.value
                    .split(",")
                    .map((respon) => respon.trim());
                  setExp({ ...edu, responsibilities: respons });
                }}
                value={edu.responsibilities}
              />

              <div className="flex justify-center gap-5 mt-2">
                <button className="btn btn-active" onClick={()=>{setCount(1)}}>Back</button>
                <button
                  className="btn btn-active btn-neutral"
                  onClick={() => {
                    const exper = [...data.experience, exp];
                    console.log(exp);
                    setData((prevData) => ({
                      ...prevData,
                      experience: exper,
                    }));
                    console.log(data);
                    setExp({
                      company: "",
                      role: "",
                      startDate: "",
                      endDate: "",
                      responsibilities: [],
                    });
                  }}
                >
                  ADD
                </button>
                <button
                  className="btn btn-active btn-secondary"
                  onClick={() => {
                    setCount(3);
                  }}
                >
                  Next
                </button>
              </div>
            </div>
            <div className="w-1/2 border-2 border-gray-400 rounded-md px-5 py-3"></div>
          </div>
        )}

        {count == 3 && (
          <div className=" w-full flex gap-3">
            <div className="w-1/2 bg-gradient-to-l from-slate-300 rounded-md px-5 py-3">
              <h1 className="text-4xl mb-2 font-extrabold text-center font-['Reenie_Beanie']">
                Project Details
              </h1>
              <label className="label p-0 pl-3 text-sm font-bold font-['Poppins']">
                <span className="text-base label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Title"
                className="input input-bordered w-full mb-2 "
                onChange={(e) => {
                  setProject({ ...project, title: e.target.value });
                }}
                value={project.title}
              />
              <label className="label p-0 pl-3 text-sm font-bold font-['Poppins']">
                <span className="text-base label-text">Description</span>
              </label>
              <input
                type="text"
                placeholder="Description"
                className="input input-bordered w-full mb-2 "
                onChange={(e) => {
                  setProject({ ...project, description: e.target.value });
                }}
                value={project.description}
              />
              
              
              <label className="label p-0 pl-3 text-sm font-bold font-['Poppins']">
                <span className="text-base label-text">Technologies</span>
              </label>
              <input
                type="Text"
                placeholder="Technologies: .... , ...."
                className="input input-bordered w-full mb-2 "
                onChange={(e) => {
                  const pro = e.target.value
                    .split(",")
                    .map((pro) => pro.trim());
                  setProject({ ...project, technologies: pro });
                }}
                value={project.technologies}
              />

              <div className="flex justify-center gap-5 mt-2">
                <button className="btn btn-active" onClick={()=>{setCount(2)}}>Back</button>
                <button
                  className="btn btn-active btn-neutral"
                  onClick={() => {
                    const exper = [...data.projects, project];
                    console.log(exper);
                    setData((prevData) => ({
                      ...prevData,
                      projects: exper,
                    }));
                    console.log(data);
                    setProject({
                      title:"",
                      description:"",
                      technologies:[]
                    });
                  }}
                >
                  ADD
                </button>
                <button
                  className="btn btn-active btn-secondary"
                  onClick={() => {
                    setCount(4);
                  }}
                >
                  Next
                </button>
              </div>
            </div>
            <div className="w-1/2 border-2 border-gray-400 rounded-md px-5 py-3"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
