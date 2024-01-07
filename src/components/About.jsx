import React from "react";
import {useState,useEffect} from "react";
import My_photo from '../assets/My_photo.jpeg';
import { FaBirthdayCake } from 'react-icons/fa';
import { Icon } from "semantic-ui-react";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaBookReader } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

import aboutme from "../assets/about4.jpg";
import profile from "../assets/profile_animation.jpg";
import {motion} from "framer-motion";
import FadeIn from 'react-fade-in';

// import { fadeIn } from 'react-animations';

const About = () => {
  const [move,setMove] = useState("false");
  return (
    <div
      name="about"
      className="w-full h-screen w-full h-screen "
    >
      <div className="font-general max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full bg-white	">
        <div className="pb-8">
          <p className="flex justify-center text-4xl font-bold inline text-purple-800 border-b-2 content-center ">
          <img src={aboutme} className="h-10   w-16 px-3"/>
            My Story
           
            {/* <img src={aboutme} className="h-1/2 w-1/2" style={{opacity:0.2}}></img> */}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 space-x-24 content-end justify-between">

          <p className="text-xl w-full text-justify text-purple-900">
            <div className="font-style: italic font-bold underline decoration-purple-200 underline-offset-1 flex justify-center">a little bit about sona</div>
            {/* <p className="text-xl w-full text-justify  ">
              I have worked as a data engineer at a reputed firm named "KAAR TECH" in chennai. I had the oppurtunity to explore many python projects.
            </p> */}
            <p className="text-lg w-full text-justify ">
              {/* some of the functions I carried out as a Data engineer */}
              I am a data engineer with a strong foundation in computer science. Having earned my MS in Computer Science degree 
              I bring a unique blend of technical expertise and problem-solving skills to 
              the table. My experience as a developer has honed my programming skills, while my background in data analytics has 
              given me a deep understanding of the importance of accurate and timely data. 
              I am constantly seeking new challenges and opportunities to expand my skillset and make an impact in the world of data engineering.
            </p>
            <br></br>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex justify text-lg"><FaBirthdayCake color="purple "/><p>&nbsp; &nbsp;Birthday : 24 FEB 2001</p>  </div>
              <div className="flex justify text-lg"><FaMapMarkerAlt color="purple" /><p> &nbsp;Location : Chennai, India</p>  </div>
              <div className="flex justify text-lg"><FaBookReader color="purple" /><p>&nbsp; &nbsp;Study : Clark University</p>  </div>
              <div className="flex justify text-lg"><FaUserGraduate color="purple"  /><p>&nbsp; &nbsp;Degree: MS in CS</p>  </div>
              <div className="flex justify text-lg"><FaPhoneAlt color="purple"  /><p>&nbsp; &nbsp;Phone : 7358650450</p>  </div>
              <div className="flex justify text-lg"><FaHeart color="purple" /><p></p>&nbsp; &nbsp;Interests : Anime, Music  </div>
              {/* <div className="flex justify "><FaBirthdayCake color="blue" /><p> 24FEB 2001</p>  </div> */}
            </div>

          </p>
          <FadeIn>
            <img src={profile} alt="My_profile" className="rounded-2xl hover:scale-105 h-96 w-4/5 justify-between"></img>
          </FadeIn>
          
             
          <br />
        </div>

      </div>
    </div>
  );
};

export default About;
