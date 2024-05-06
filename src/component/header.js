"use client"
import React, { useState, useEffect } from 'react';

export const Header = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      let hours = date.getHours();
      const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
      const seconds = Math.round(date.getSeconds());
      const amPm = hours >= 12 ? 'PM' : 'AM';

      
      hours = hours % 12;
      hours = hours ? hours : 12;

      setTime(`${hours}:${minutes}:${seconds} ${amPm}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="items-center navbar fixed top-0 left-0 h-[10vh] backdrop-blur-sm gap-2 flex justify-between">
      <div className="flex items-center">
        <a className="text-xl flex items-center font-bold mx-2 h-10 w-auto">
          <img className="h-10 w-auto" src={"https://i.ibb.co/KbjCwGW/original-36051dd8be8d73ec9caea4721bb8d807-removebg-preview.png"} alt="Logo"/>
        </a>
        <ul className="sm:flex hidden bg-black rounded-2xl">
          <li className="px-2 py-1 rounded-2xl hover:ease-in-out cursor-pointer text-white  active:bg-slate-100 active:text-black focus:text-black  focus:bg-slate-100"><a href="#home">Home</a></li>
          <li className="px-2 py-1 rounded-2xl hover:ease-in-out cursor-pointer text-white active:bg-slate-100 active:text-black focus:text-black  focus:bg-slate-100"><a href="#techstack">Tech Stack</a></li>
          <li className="px-2 py-1 rounded-2xl hover:ease-in-out cursor-pointer text-white active:bg-slate-100  active:text-black focus:text-black focus:bg-slate-100">Projects</li>
          <li className="px-2 py-1 rounded-2xl hover:ease-in-out cursor-pointer text-white active:bg-slate-100  active:text-black focus:text-black focus:bg-slate-100">About</li>
        </ul>
      </div>
      
      <div className="flex flex-col bg-black mr-2 px-2 py-1 rounded-lg tracking-tight">
        <p className="text-sm text-white">Pune, India</p>
        <p className="text-lg text-white font-bold">{time}</p>
      </div>
    </div>
  );
}
