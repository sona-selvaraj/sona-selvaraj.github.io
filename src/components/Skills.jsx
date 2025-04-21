import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react1.png";
import python from "../assets/python.png";
import java from "../assets/java.png";
import powerbi from "../assets/powerbi.png";
import SQL from "../assets/SQL.png";
import AWS from "../assets/AWS.png";
import HTML from "../assets/html.png";
import Node from "../assets/node.png";
import Postgres from "../assets/Postgres.png";
import Postman from "../assets/Postman.png";
import github from "../assets/github.png";
import scikit from "../assets/scikit.png";
import mongodb from "../assets/mongodb.png";
import pandas from "../assets/pandas.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: python,
      title: "PYTHON",
    },
    {
      id: 2,
      src: powerbi,
      title: "POWERBI",
      description: "Developed many powerBI dashboards",
    },
    {
      id: 3,
      src: AWS,
      title: "AWS CLOUD PRACTITIONER",
      description: "I am AWS certified cloud practitioner",
    },
    {
      id: 4,
      src: reactImage,
      title: "REACT",
      description: "Worked on developing react portals",
    },
    {
      id: 5,
      src: SQL,
      title: "SQL",
      description: "Have an intermediate knowledge in SQL queries",
    },
    {
      id: 6,
      src: HTML,
      title: "HTML",
      description: "Have an intermediate knowledge in HTML",
    },
    {
      id: 7,
      src: css,
      title: "CSS",
      description: "Have an intermediate knowledge in CSS",
    },
    {
      id: 8,
      src: javascript,
      title: "Javascript",
      description: "Have an intermediate knowledge in Javascript",
    },
    {
      id: 9,
      src: Node,
      title: "Node JS",
      description: "Have an intermediate knowledge in Java programming",
    },
    {
      id: 10,
      src: java,
      title: "Java",
      description: "Have an intermediate knowledge in Java programming",
    },
    {
      id: 11,
      src: Postgres,
      title: "PostgreSQL",
      description: "Have an intermediate knowledge in Java programming",
    },
    {
      id: 12,
      src: Postman,
      title: "Postman API",
      description: "Have an intermediate knowledge in Java programming",
    },
    {
      id: 13,
      src: github,
      title: "Github",
      description: "Have an intermediate knowledge in Java programming",
    },
    {
      id: 13,
      src: scikit,
      title: "Scikit Learn",
      description: "Have an intermediate knowledge in Java programming",
    },
    {
      id: 13,
      src: mongodb,
      title: "MongoDB",
      description: "Have an intermediate knowledge in Java programming",
    },
    {
      id: 14,
      src: pandas,
      title: "Pandas",
      description: "Have an intermediate knowledge in Java programming",
    },
  ];

  return (
    <div
      name="skills"
      className="w-full min-h-screen bg-gray-900 text-white flex items-center justify-center"
    >
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold text-center border-b-2 border-gray-500 pb-2">
            SKILLS
          </p>
        </div>
        <br />
        <div className=" grid grid-cols-4 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title }) => (
            <div
              key={id}
              className="flex items-center justify-center bg-gray-800 h-44 w-44 rounded-lg shadow-lg border border-gray-600"
            >
              <div className="group h-44 w-44 [perspective:1000px]">
                <div className="relative h-44 w-44 rounded-lg shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                  {/* Front Side */}
                  <div className="absolute h-29 w-52 inset-0 h-full w-full rounded-lg bg-gray-800 [backface-visibility:hidden]">
                    <img
                      className="h-full w-full object-contain p-2 rounded-lg"
                      src={src}
                      alt={title}
                    />
                  </div>

                  <div className="absolute inset-0 h-full w-full rounded-lg bg-gray-900 px-4 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col justify-center">
                      <h1 className="text-lg font-bold">{title}</h1>
                      {/* <p className="text-sm py-2">{description}</p> */}
                    </div>
                  </div>
                </div>
            </div>
            </div>
          ))}
      </div>
    </div>
    </div >
  );
};

export default Skills;
