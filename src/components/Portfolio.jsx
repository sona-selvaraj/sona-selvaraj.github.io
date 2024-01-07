import React, { Component } from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import classification from "../assets/classification.png"
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import twitter from "../assets/twitter.jpg"
import scikit from "../assets/scikit.png"
import Button from '@mui/material/Button';

// import { useNavigate } from "react-router-dom";


const Portfolio = () => {
  const handleClick = () => {
    console.log("clicked");
  }
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  // handleClick = () => {
  //   console.log('this is:', this);
  // };
  // const navigate = useNavigate();
  const portfolios = [
    {
      id: 1,
      src: classification,
      title: "Fish species classification using CNN",
    },
    {
      id: 2,
      src: twitter,
      title: "Twitter Sentiment analysis using python",
      url: "https://github.com/sonarocks/TwitterSentimentAnalysis/blob/main/twitter_sentiment_analysis.ipynb",
    },
    {
      id: 3,
      src: scikit,
      title: "Regression using scikit learn",
      url: "https://github.com/sonarocks/Regression-using-Scikit-learn/blob/main/sparks%20foundation_Task1.ipynb",
    },
    // {
    //   id: 4,
    //   src: reactSmooth,
    // },
    // {
    //   id: 5,
    //   src: installNode,
    // },
    // {
    //   id: 6,
    //   src: reactWeather,
    // },

  ];

  return (
    <div
      name="portfolio"
      className="font-general bg-gradient-to-b from-purple-500 to-purple-400 w-full  md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <p className="flex justify-center border-b-2 border-purple-300 text-4xl font-bold inline text-white border-b-1 content-center ">
            Data Maverick
          </p>
          <p className="flex justify-center text-xl py-6">Check out some of my data science projects right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,url,title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-15 "
              />
              <p className="flex justify-center py-3 text-lg px-3 font-bold text-center">{title}</p>
              <div className="flex items-center justify-center">
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => console.log("demo") }>
                  Demo
                </button> */}
                
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-white" onClick={() => openInNewTab(url)}>
                  View
                </button>
                {/* <button onClick={this.handleClick}>
                  Click me
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
