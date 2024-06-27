"use client"
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

const Hero = () => {
    return(
        <div id="home" className="flex sm:flex-row flex-col h-screen overflow-x-hidden">
            <div className="left sm:h-full h-[50vh] sm:w-[50vw] w-full flex flex-col sm:justify-center justify-end flex-shrink-0">

                <img className="h-24 w-24 sm:m-10 m-5 sm:mb-5 mb-5 rounded-full object-cover" src={"https://i.ibb.co/jTB0hQ5/prof.jpg"} alt="" />
                <p className="sm:text-6xl mx-3 text-5xl sm:m-10 sm:mt-0">Hello! I'm Sachin Parihar</p>
            </div>
            <div className="middle h-full flex flex-col gap-3 justify-center">
                <p className="sm:text-4xl sam:m-0 text-3xl mx-3">A Fullstack Developer based in Pune,India.</p>
                <p className="text-gray-400 mx-3">Designing User-Centric Experiences with Precision and Creativity</p>
                <div className="flex my-4 gap-x-3 mx-3"><a className=" bg-zinc-900 px-2 py-2 text-white rounded-lg" href="tel:+918668369314">Contact Me</a>
                <a className="  px-2 py-2  text-black bg-white border rounded-lg" href="#projects">See My Work</a>
                </div>
            </div>
            <div className="right sm:h-full sm:w-[6vw] flex justify-center items-center">
                <ul className="flex w-full justify-around sm:flex-col sm:gap-5 ">
                    <li className="w-12 h-12 bg-white text-black flex justify-center items-center group-hover:bg-black border rounded-full group-hover"><a title="X (Twitter)" href="https://twitter.com/Sheenu_exe"><RiTwitterXFill className="text-3xl group-hover group-hover:fill-white"/></a></li>
                    <li className="w-12 h-12 bg-white text-black flex justify-center items-center border rounded-full"><a title="Instagram" href="https://www.instagram.com/sachinn.code/"><FaInstagram className="text-3xl"/></a></li>
                    <li className="w-12 h-12 bg-white text-black flex justify-center items-center border rounded-full"><a title="Github" href="https://github.com/Sheenu-exe"><FaGithub className="text-3xl"/></a></li>
                    <li className="w-12 h-12 bg-white text-black flex justify-center items-center border rounded-full"><a title="Mail" href="mailto:pariharsachin5002@gmail.com"><MdOutlineMailOutline className="text-3xl"/></a></li>
                    <li className="w-12 h-12 bg-white text-black flex justify-center items-center border rounded-full"><a title="Call" href="tel:+918668369314"><IoCallSharp className="text-3xl"/></a></li>
                </ul>
            </div>
        </div>
    )
}
export default Hero