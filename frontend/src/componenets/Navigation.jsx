import React from "react";
import { GiHummingbird } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import { useDispatch } from "react-redux";
import { emptyAuthUser } from "../redux/userSlice";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Navigation = () => {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const handlelogout = async () => {
    try {
      const data = await axios.get("http://localhost:8080/api/v1/user/logout");
      dispatch(emptyAuthUser());
      setTimeout(() => {
        toast.success("Good Bye!!!");
        navigateTo("/");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="sticky bg-white z-20 top-0 w-full px-10 py-2 flex items-center shadow-md shadow-gray-300 rounded-lg">
      <div className="flex items-center">
        <GiHummingbird className="text-5xl text-[#CA5CDD]" />
        <h1 className="text-2xl uppercase font-semibold tracking-widest text-[#CA5CDD] ml-3">
          QuikResume
        </h1>
      </div>
      <nav className="mx-auto">
        <ul className="flex space-x-6">
        <li>
            <Link
              to="/home"
              className="text-lg text-[#CA5CDD] hover:underline"
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="/resume"
              className="text-lg text-[#CA5CDD] hover:underline"
            >
              Resume
            </a>
          </li>
          <li>
            <a href="/cv" className="text-lg text-[#CA5CDD] hover:underline">
              CV
            </a>
          </li>
          <li>
            <a href="/about" className="text-lg text-[#CA5CDD] hover:underline">
              About
            </a>
          </li>
          <li>
            <Link
              to="/home/profile"
              className="text-lg text-[#CA5CDD] hover:underline"
            >
              Profile
            </Link>
          </li>
        </ul>
      </nav>

      <details className="dropdown dropdown-end font-['Poppins']">
        <summary className="btn m-1"><FaUserCircle className="inline-block text-2xl text-[#CA5CDD]" /></summary>
        <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow font-semibold text-sm">
          <li>
            <a onClick={()=>navigateTo('/home/profile')}>Profile</a>
          </li>
          <li>
            <a onClick={()=>{handlelogout()}}>LogOut</a>
          </li>
        </ul>
      </details>
    </div>
  );
};

export default Navigation;
