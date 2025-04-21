import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import background from "../assets/background_video.mp4";

const Home = () => {
  return (
    <div
      name="home"
      className="relative w-full h-screen text-black"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row w-full text-white relative">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-6xl font-bold">
            I'm a Software Developer and a Machine Learning Enthusiast
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <p className="py-6">
              Developer turned Machine learning enthusiast, I tailor and implement data-driven solutions to help breakthrough domains. 
              My passion for maths backing ML/AI helps me design solutions that are just right.
            </p>
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
          </div>
          {/* <img src={require('../assets/home_gif.gif')} alt="gif..." /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
