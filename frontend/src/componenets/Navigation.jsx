import React from 'react';
import { GiHummingbird } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className='sticky top-0 w-full px-10 py-2 flex items-center shadow-md shadow-gray-300 rounded-lg'>
      <div className='flex items-center'>
        <GiHummingbird className='text-5xl text-[#CA5CDD]'/>
        <h1 className='text-2xl uppercase font-semibold tracking-widest text-[#CA5CDD] ml-3'>QuikResume</h1>
      </div>
      <nav className='mx-auto'>
        <ul className='flex space-x-6'>
          <li><a href="/resume" className='text-lg text-[#CA5CDD] hover:underline'>Resume</a></li>
          <li><a href="/cv" className='text-lg text-[#CA5CDD] hover:underline'>CV</a></li>
          <li><a href="/about" className='text-lg text-[#CA5CDD] hover:underline'>About</a></li>
          <li><a href="/template" className='text-lg text-[#CA5CDD] hover:underline'>Template</a></li>
        </ul>
      </nav>
      <div>
        <a href="/my-account" className='text-lg text-[#CA5CDD] hover:underline'>
          <FaUserCircle className='inline-block text-2xl'/>
        </a>
      </div>
    </div>
  );
}

export default Navigation;
