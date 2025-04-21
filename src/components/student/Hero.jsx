import React from "react";
import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";

// Hero section - landing page banner with search functionality
function Hero() {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-blue-100">
      <h1 className="text-home-heading-large md:text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto">
        Empower your future with the courses desgined to{" "}
        <span className="text-blue-600">fit your choice.</span>
        <img
          className="hidden md:block absolute right-0 -bottom-5 translate-y-2"
          src={assets.sketch}
          alt="Sketch"
        />
      </h1>

      <p className="md:block hidden text-gray-500 max-w-2xl mx-auto">
        We bring together world-class instructors, interactive content, and a
        supportive community to help you achieve your personal and professional
        goals.
      </p>

      <p className="md:hidden text-gray-500 max-w-sm mx-auto">
        We bring together world-class instructors, interactive content, and a
        supportive community to help you achieve your personal and professional
        goals.
      </p>
      <SearchBar />
    </div>
  );
}

export default Hero;
