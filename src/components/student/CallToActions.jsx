import React from "react";

function CallToActions() {
  return (
    <div className="flex flex-col items-center gap-4 pt-10 pb-20 px-8 md:px-0">
      <h1 className="text-xl md:text-4xl text-gray-800 font-semibold">
        Learn anything, anytime, anywhere
      </h1>
      <p className="text-gray-500 sm:text-sm">
        Unlock your full potential with the freedom to learn whatever you want,
        whenever you choose, and wherever life takes you—because growth<br />
        shouldn't be limited by time or place.
      </p>
      <div className="flex items-center font-medium gap-6 mt-4">
        <button className="px-10 py-3 rounded-md text-white  bg-blue-600 cursor-pointer" onClick={()=> scrollTo(0,0)}>Get Started</button>
      </div>
    </div>
  );
}

export default CallToActions;
