import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react1.png";
import python from "../assets/python.png";
import java from "../assets/java.jpg";
import powerbi from "../assets/powerbi.jpg";
import SQL from "../assets/SQL.png";
import AWS from "../assets/AWS.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: python,
      title: "PYTHON",
      description : "Python developer with proficient knowledge in EDA functions",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: powerbi,
      title: "POWERBI",
      description : "Developed many powerBI dashboards",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: AWS,
      title: "AWS CLOUD PRACTITIONER",
      description : "I am AWS certified cloud practitioner",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "REACT",
      description : "Worked on developing react portals",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: SQL,
      title: "SQL",
      description : "Have an intermediate knowledge in SQL queries",
      style: "shadow-sky-400",
    }
  ];

  return (
    <div
      name="skills"
      className=" w-full h-screen bg-gradient-to-b from-purple-500 to-purple-400"
    >
      <div className="font-general bg-gradient-to-b from-purple-500 to-purple-400 max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className=" flex justify-center text-3xl font-bold inline text-white border-b-2 content-center">
            Skills and achievements
          </p>

        </div>
        <br></br>
        <div className="w-full grid grid-cols-3 sm:grid-cols-3 gap-8 text-white text-center py-8 px-12 sm:px-0">

          {techs.map(({ id, src, title, style, description }) => (
            
            <div key={id} class="flex items-center justify-center bg-purple-500 h-44 w-60">
            <div class="group h-44 w-60 [perspective:1000px]">
              <div class="relative h-44 w-60 rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={src} alt="" />
                </div>
                <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div class="flex min-h-full flex-col">
                    <h1 class="text-lg font-bold ">{title}</h1>
                    <p class="text-sm py-4">{description}</p>
                    <p class="text-base"></p>
                    {/* <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

            // <div
            //   key={id}
            //   className={`hover:scale-105 duration-500 py-2 shadow-md`}
            // >
            //   <img src={src} alt="" className="w-24 mx-auto rounded-lg" />
            //   <p className="mt-4">{title}</p>
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
