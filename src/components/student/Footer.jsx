import React from "react";
import { assets } from "../../assets/assets";

// Main footer component - dark theme with responsive layout
function Footer() {
  return (
    <footer className="bg-gray-900 md:px-36 text-left w-full mt-10">
      {/* Main content wrapper - splits into 3 columns on desktop */}
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">
        {/* Brand section with logo and description */}
        <div className="flex flex-col md:items-start items-center w-full">
          <div className="flex items-center">
          <img src={assets.udemyIcon} alt="logo" className="w-12 h-12"/>
          <h2 className="text-white text-4xl ml-2">Udemy</h2>
          </div>
          <p className="text-white mt-5">
          Our platform empowers curious minds to explore knowledge without limits — from coding and design to business and technology. 
          Learn at your own pace, anytime and anywhere.
          </p>
        </div>

        {/* Quick links section - hidden on mobile */}
        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold text-white mb-5">Company</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex flex-col items-start w-full">
          <h2 className="font-semibold text-white mb-5">
            Subscribe to our newsletter
          </h2>
          <p className="text-sm text-white/80">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex items-center gap-2 pt-4">
            <input
              type="email"
              placeholder="Enter your Email"
              className="border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm"
            />
            <button className="bg-blue-600 w-24 h-9 text-white rounded">Subscribe</button>
          </div>
        </div>
      </div>

      <p className="py-4 text-center text-xs md:text-sm text-white/60">
        © 2025 © Udemy. All Right Reserved.
      </p>
    </footer>
  );
}

export default Footer;
