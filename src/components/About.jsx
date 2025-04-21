import React from "react";
import My_photo from "../assets/Profile_Photo.jpeg";
import { motion } from "framer-motion";
import FadeIn from "react-fade-in";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-200 text-black flex items-center justify-center py-12 px-4"
    >
      <div className="font-general max-w-6xl px-6 mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <FadeIn>
          <motion.img
            src={My_photo}
            alt="My Profile"
            className="h-80 w-80 object-cover rounded-full shadow-xl border-4 border-gray-300 hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          />
        </FadeIn>

        {/* Text Content */}
        <div className="flex-1 text-justify text-gray-700 space-y-6 text-lg leading-relaxed px-4 md:px-10 bg-white bg-opacity-60 p-6 rounded-xl shadow-md">
          {/* Title */}
          <div className="w-full text-center mb-6">
            <h2 className="text-4xl font-extrabold text-gray-800 border-b-4 border-indigo-400 inline-block pb-2">
              My Story
            </h2>
          </div>

          <p>
            <span className="text-2xl mr-2">🎓</span>
            My tech journey began with a Bachelor’s in Computer Science in India, where I laid the groundwork for my passion in building things that work — and work smart. I kicked off my career as a Data Engineer at Kaar Technologies, where I got a front-row seat to the fast-paced world of enterprise tech. There, I learned more than just tools and pipelines — I honed essential skills like cross-functional teamwork, real-world problem solving, and managing tight deadlines with a cool head.
          </p>

          <p>
            <span className="text-2xl mr-2">📚</span>
            Driven by a desire to deepen my technical expertise, I decided to pursue a Master’s in Computer Science at Clark University. This experience opened me up to diverse perspectives, cutting-edge concepts, and an exciting world of possibility in Machine Learning and Artificial Intelligence. Somewhere between research papers and late-night debugging sessions, I discovered my love for blending software development with smart, adaptive systems.
          </p>

          <p>
            <span className="text-2xl mr-2">🚀</span>
            Since then, I’ve been building projects that bridge both worlds — from intelligent web apps to ML-powered tools — always with an eye for clean design, scalable architecture, and a touch of curiosity. I'm passionate about creating tech that doesn't just execute tasks but understands context, adapts, and evolves — kind of like my career path.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
