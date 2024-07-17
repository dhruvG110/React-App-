import React from "react";
import './HeroSection.css'
import CardSpotlight from "./CardSpotlight";
const HeroSection = () => {
  return (
    <>
    <div className="container-hero">
      <div className=" ml-64 w-3/4">
        <div className="grid h-screen place-items-center text-white w-auto ">
          <h1 className="text-7xl leading-6">
            This Typing effect is made by Tailwind CSS Along With React.
            <br />
            <br />
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-blue-500 font-bold ">
              To read more scroll down. . .
            </h1>
          </h1>
        </div>
      </div>
      <div className="cards">
 <CardSpotlight heading="Low Cost" para="Work Seamlessly,and Faster With The new Coming Tech"/>
 <br />
 <CardSpotlight heading="Efficient Coding" para="The Whole Code focuses on readebility and reusability"/>
 <br />
 <CardSpotlight heading="Every Day Counts" para="Fast and Furious focuses on readebility and reusability"/>

      </div>


      </div>
    
    </>
  );
};

export default HeroSection;
