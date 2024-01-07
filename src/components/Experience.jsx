import React from 'react'
import professional from "../assets/images/professional.jpg"
import my_photo from "../assets/My_photo.jpeg"
import kaar from "../assets/Kaar.png"
import dataEngineering from "../assets/background1.gif"

import { FaReact } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import { SiAmazonaws } from 'react-icons/si';
import { SiPowerbi } from "react-icons/si";
import { SiAngular } from 'react-icons/si';
import { SiApachespark } from 'react-icons/si';

function Experience() {
    return (
        <div
            name="experience"
            className="w-screen h-screen"
        >
            <div className="bg-white font-general text-lg max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full bg-gradient bg-from-purple-900 bg-to-purple-700 text-purple-800">
                <div className="pb-8">
                    <p className="flex justify-center text-4xl py-8 font-bold text-purple-800 border-b-2 content-center ">
                        Experience
                    </p>
                </div>
                <div class="flex h-15 bg-white rounded overflow-hidden shadow-lg ">
                    <img class="py-4 flex justify-center w-fit h-1/2" src={dataEngineering} alt="Sunset in the mountains" />
                    <br></br>
                    <br></br>
                    <div class="px-6 py-4 ">
                        <div class="font-bold text-xl mb-2">Data Engineer @Digiverz in KaarTech</div>
                        <br></br>
                        {/* Designed and developed ETL workflows using Python, SQL, and Apache Spark to process and analyze large volumes of data from various sources, including structured and unstructured data.                  
                        Implemented machine learning models using Python libraries such as scikit-learn and TensorFlow to solve complex data problems.
                        I am an AWS Certified cloud practioner.
                        I have built dashboards using PowerBi for many business solutions.
                        Worked on multiple portals using React and Angular.
                        Contributed to the development of internal tools and frameworks to automate data processing tasks and ensure data quality.
                        Mentored and trained junior data engineers on data processing best practices and new technologies */}
                        {/* <FontAwesomeIcon icon={FaReact} fade /> */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex justify text-lg"><SiPowerbi color="purple" size="3em" class="fa-beat"/><p>&nbsp; &nbsp;PowerBI - Built many powerBI dashboards for business solutions</p>  </div>
                            <div className="flex justify text-lg"><FaReact color="purple" size='3em' /><p> &nbsp; &nbsp; React - Built a full stack project with react Front-end</p>  </div>
                            <div className="flex justify text-lg"><FaPython color="purple" size="3em" /><p>&nbsp; &nbsp;Python - I  have worked onEDA funtions to prepare a big data using python </p>  </div>
                            <div className="flex justify text-lg"><SiAmazonaws color="purple" size="3em" /><p>&nbsp; &nbsp;AWS Cloud Practitioner - I am an AWS certified Cloud Practitioner</p>  </div>
                            <div className="flex justify text-lg"><SiAngular color="purple" size="3em"/><p>&nbsp; &nbsp;Angular - Built 7 Portals using Angular framework</p>  </div>
                            <div className="flex justify text-lg"><SiApachespark color="purple" size="3em"/><p></p>&nbsp; &nbsp;Apache Spark - I have used Apache spark for handling big data analysis </div>
                            {/* <div className="flex justify "><FaBirthdayCake color="blue" /><p> 24FEB 2001</p>  </div> */}
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#DataEngineer</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Python</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Developer</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Experience