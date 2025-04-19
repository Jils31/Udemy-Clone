import React from "react";
import { testimonials } from "../../assets/assets";
import { div } from "framer-motion/client";

function TestimonialSection() {
  return (
    <div className="pb-14 px-8 md:px-0">
      <h2 className="text-3xl font-medium text-gray-800">Testimonials</h2>
      <p className="md:text-base text-gray-500 mt-3">
        Hear from our learners as they share their journeys of transformation,
        success, and how our
        <br />
        platform has made a difference in their lives.
      </p>
      <div className="grid-container grid-cols-auto gap-8 mt-14">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white"
          >
            <div className="flex items-center gap-4 px-5 py-4 bg-gray-500/10 shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden">
              <img
                className="h-12 w-12 rounded-full"
                src={testimonial.profileImage}
                alt=""
              />
              <div>
                <h1 className="text-lg font-medium text-gray-800">
                  {testimonial.name}
                </h1>
                <p className="text-gray-800/80">{testimonial.role}</p>
              </div>
            </div>
            <div className="p-5 pb-7">
              <p className="text-gray-500 mt-5">{testimonial.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialSection;
