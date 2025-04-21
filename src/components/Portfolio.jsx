import React from "react";
import mockInterview from "../assets/Mock_interview.webp";
import twitter from "../assets/twitter.jpg";
import bank from "../assets/Bank.avif";
import texttoimage from "../assets/portfolio/TextToImage.png";

const Portfolio = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  const portfolios = [
    {
      id: 1,
      src: mockInterview,
      title: "AI Based Mock Interview Application",
      url: "https://github.com/sona-selvaraj/Mock_interview_Application",
    },
    {
      id: 2,
      src: texttoimage,
      title: "Text to Image Generation using Stable Diffusion Model",
      url: "https://github.com/sona-selvaraj/Text-to-Image",
    },
    {
      id: 3,
      src: bank,
      title: "Bank Customer Segmentation",
      url: "https://github.com/sona-selvaraj/BankCustomer_Segmentation",
    },
  ];

  return (
    <div
      name="portfolio"
      className="font-general bg-gray-900 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="flex justify-center border-b-2 border-gray-500 text-4xl font-bold inline text-white">
            PROJECTS
          </p>
          <p className="flex justify-center text-xl py-6">
            Check out some of my projects right here
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, url, title }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg border-2 border-gray-500 p-4"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-40 w-full object-cover"
              />
              <p className="flex justify-center py-3 text-lg px-3 font-bold text-center text-gray-300">
                {title}
              </p>
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-white bg-gray-700 hover:bg-gray-600 rounded-md"
                  onClick={() => openInNewTab(url)}
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
