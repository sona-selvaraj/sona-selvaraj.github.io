import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

import aboutme from "../assets/about.png"

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen w-full h-screen bg-purple-500  text-white text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row w-full text-white">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Data Engineer and software developer
          </h2>
          <div className="grid grid-cols-2 gap-4" >
          <p className="py-6">
          Developer turned Data Engineer, I tailor and implement data driven solutions to help breakthrough domains. 
          My passion of maths backing ML/AI helps me design solutions that are just right.
            <div className="py-4">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
          </p>
          <img src={require('../assets/home_gif.gif')} alt="gif..." />
          
          </div>
         
         
          
          
          
        </div>

        
      </div>
    </div>
  );
};

export default Home;
