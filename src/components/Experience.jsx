import React from "react";
import kaar from "../assets/KaarTech.png";
import maitsys from "../assets/maitsys_logo.jpeg";
import clark from "../assets/clark.png";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      src: kaar,
      title: "Data Engineer",
      description: [
        "Developed a model and forecasting tool to automate predictive modeling tasks, streamlining the process of developing forecasting models resulting in a 20% improvement in sales performance with a focus on customer- obsessed scientific innovation using SAP data.",
        "Built dashboards using PowerBI for business solutions.",
        "Worked on multiple portals using React and Angular frameworks.",
        "AWS Certified Cloud Practitioner.",
      ],
      tags: ["#DataEngineer", "#Python", "#AWS", "#React", "#Angular"],
    },
    {
      id: 2,
      src: clark,
      title: "Graduate Student",
      description: [
        "Investigated the potential of Stable Diffusion, a powerful GAN pipeline, for text-to-image generation tasks.",
        "Engineered and fine-tuned deep learning models with Tensorflow and Pytorch, achieving a 15% increase in Predictive accuracy",
        "Explored techniques like data augmentation and fine-tuning to improve model performance, showcasing an understanding of optimization strategies for generative models",
      ],
      tags: ["#GraduateStudent", "#MachineLearning", "#AI", "#DataEngineering"],
    },
    {
      id: 3,
      src: maitsys,
      title: "Data Analytics Intern",
      description: [
        "Applied statistical analysis using methods like t-tests and Chi-square tests to evaluate the effectiveness of marketing campaigns and analyze customer behavior, providing actionable insights for business strategy.",
        "Enhanced SQL proficiency by working on a Microsoft SQL server data migration project, optimizing ETL processes for efficient data extraction, transformation, and loading.",
        "Developed interactive Power BI dashboards, improving data visualization and decision-making efficiency by 30%",
      ],
      tags: ["#Internship", "#WebDevelopment", "#Teamwork", "#ScalableSolutions"],
    },
  ];

  return (
    <div name="experience" className="w-full h-screen bg-white text-black flex items-center justify-center">
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold text-center border-b-2 border-gray-400 pb-2">
            Experience
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map(({ id, src, title, description, tags }) => (
            <div key={id} className="bg-gray-100 shadow-lg rounded-lg p-6 border border-gray-300">
              <div className="relative mb-4">
                <img
                  className="h-32 w-full text-centre object-contain p-4 mx-auto rounded-xl bg-white shadow-md"
                  src={src}
                  alt={title}
                />
              </div>
              <h3 className="text-center text-2xl font-bold mb-4 text-gray-800">{title}</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;