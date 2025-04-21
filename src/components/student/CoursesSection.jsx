import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";

//This includes the section of the courses on the main landing page and it shows 4 for now which redirect you to the course list page on clicking show all courses
function CoursesSection() {
  const {allCourses} = useContext(AppContext) //use global states and the data 
  return (
    <div className="py-16 md:px-40 px-8">
      <h2 className="text-3xl font-medium text-gray-800">
        Learn from the best
      </h2>
      <p className="text-sm md:text-base text-gray-500 mt-3">
        Discover our top-rated courses across various categories. From coding
        and design to<br /> business and wellness, our courses are crafted to deliver
        results.
      </p>

      <div className="grid-container grid-cols-4 px-4 md:px-0 md:my-16 my-10 gap-4">
        {allCourses.slice(0,4).map((course, index)=>(
          <CourseCard key={index} course={course}/>
        ))}
      </div>  
      {/* The above container shows the 4 courses on the landing page */}

      <Link
        to={"/course-list"}
        onClick={() => scrollTo(0, 0)}
        className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded"
      >
        Show All Courses
      </Link>
    </div>
  );
}

export default CoursesSection;
