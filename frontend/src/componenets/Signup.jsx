import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const signup = () => {
  const [user, setUser] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const navigate = useNavigate();
  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8080/api/v1/user/register`, user, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      fullname: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };

  return (
    <div className="w-full min-h-screen relative flex justify-center items-center">
      <div className=" absolute w-full h-screen top-0 left-0 -z-20 bg-white">
        <div class="w-full h-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>


      <div className="w-1/3 z-10 ">
        <div className="w-full p-6 bg-slate-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.05] border shadow-md border-gray-100">
          <h1 className="text-5xl font-extrabold text-center font-['Reenie_Beanie']">Sign-up</h1>
          <form className="text-gray-700" onSubmit={onSubmitHandler} action="">
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Full Name</span>
              </label>
              <input
                value={user.fullname}
                onChange={(e) => setUser({ ...user, fullname: e.target.value })}
                className="w-full input input-bordered h-10"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                className="w-full input input-bordered h-10"
                type="text"
                placeholder="Username"
              />
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="w-full input input-bordered h-10"
                type="password"
                placeholder="Password"
              />
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Confirm Password</span>
              </label>
              <input
                value={user.confirmPassword}
                onChange={(e) =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
                className="w-full input input-bordered h-10"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <div className="flex items-center my-4 text-gray-600">
              <div className="flex items-center">
                <p>Male</p>
                <input
                  type="checkbox"
                  checked={user.gender === "male"}
                  onChange={() => handleCheckbox("male")}
                  defaultChecked
                  className="checkbox mx-2"
                />
              </div>
              <div className="flex items-center">
                <p>Female</p>
                <input
                  type="checkbox"
                  checked={user.gender === "female"}
                  onChange={() => handleCheckbox("female")}
                  defaultChecked
                  className="checkbox mx-2"
                />
              </div>
            </div>
            <p className="text-center font-bold text-gray-700 my-2">
              Already have an account? <Link to="/" className="text-blue-600 hover:text-blue-700"> login </Link>
            </p>
            <div>
              <button
                type="submit"
                className="btn btn-block btn-sm mt-2 border border-slate-700"
              >
                Singup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default signup;
