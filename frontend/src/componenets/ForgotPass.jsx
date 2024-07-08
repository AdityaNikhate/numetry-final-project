import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";


const ForgotPass = () => {
  const [user, setUser] = useState({
    username: "",
    newPassword: "",
    confirmNewPassword: ""
  });

  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8080/api/v1/user/changepass`, user, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      toast.success("Login with new credential.")
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      username: "",
      newPassword: "",
      confirmNewPassword: ""
    });
  };

  return (
    <div className="w-full min-h-screen relative flex justify-center items-center">
      <div className=" absolute w-full h-screen top-0 left-0 -z-20 bg-white">
        <div class="w-full h-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      <div className=" z-10 w-1/3 ">
        <div className="w-full p-6 bg-slate-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.05] border shadow-md border-gray-100">
          <h1 className="text-5xl font-extrabold text-center font-['Reenie_Beanie']">
            Forgot-Password
          </h1>
          <form onSubmit={onSubmitHandler} action="">
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
                value={user.newPassword}
                onChange={(e) => setUser({ ...user, newPassword: e.target.value })}
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
                value={user.confirmNewPassword}
                onChange={(e) => setUser({ ...user, confirmNewPassword: e.target.value })}
                className="w-full input input-bordered h-10"
                type="password"
                placeholder="Password"
              />
            </div>
            
            <div>
              <button
                type="submit"
                className="btn btn-block btn-sm mt-5 border border-slate-700"
              >
                Save Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;

