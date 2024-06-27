"use client"
import { PiFilePdfFill } from "react-icons/pi";

export const Header = () => {
 
  return (
    <div className="items-center navbar fixed top-0 left-0 z-50 h-[10vh] backdrop-blur-sm gap-2 flex justify-between">
      <div className="flex items-center">
        <a className="text-xl flex items-center font-bold mx-2 h-10 w-auto">
          <img className="h-10 w-auto" src={"https://i.ibb.co/KbjCwGW/original-36051dd8be8d73ec9caea4721bb8d807-removebg-preview.png"} alt="Logo"/>
        </a>
       
      </div>
      <ul className="sm:flex hidden px-1.5 py-1.5 gap-1.5 bg-black/50 rounded-md">
          <li className="px-2 py-1 rounded-md transition-all hover:ease-in-out cursor-pointer text-white hover:bg-white hover:text-black  active:bg-slate-100/50  active:text-black focus:text-white  focus:bg-slate-100"><a href="#home">Home</a></li>
          <li className="px-2 py-1 rounded-md transition-all hover:ease-in-out cursor-pointer text-white hover:bg-white hover:text-black active:bg-slate-100/50 active:text-black focus:text-white  focus:bg-slate-100"><a href="#techstack">Tech Stack</a></li>
          <li className="px-2 py-1 rounded-md transition-all hover:ease-in-out cursor-pointer text-white hover:bg-white hover:text-black active:bg-slate-100/50 active:text-black focus:text-white focus:bg-slate-100"><a href="#projects">Projects</a></li>
          <li className="px-2 py-1 rounded-md transition-all hover:ease-in-out cursor-pointer text-white hover:bg-white hover:text-black active:bg-slate-100/50 active:text-black focus:text-white focus:bg-slate-100"><a href="#about">About</a></li>
        </ul>
      
      <div className="flex flex-col bg-zinc-900 mr-2 h-[90%] w-auto px-2 py-1 rounded-lg tracking-tight justify-center items-center">
        <a href="https://drive.google.com/file/d/1FN19ClpiZgEp0X729lsrLv9X6Ih1Ry-s/view?usp=drive_link"><PiFilePdfFill className="text-white text-3xl"/></a>
      </div>
    </div>
  );
}
