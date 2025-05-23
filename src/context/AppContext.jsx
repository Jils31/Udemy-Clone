import { createContext, useEffect, useState } from "react";
import { courses, eachCourseDetails } from "../assets/assets";

// Create context for managing global course data
export const AppContext = createContext();

// Context provider component that wraps the app
export function AppContextprovider({ children }) {
  const [allCourses, setAllCourses] = useState([]);
  const [allCoursesDetails, setAllCoursesDetails] =  useState([])

  const fetchAllCourses = async () => {
    setAllCourses(courses);
    setAllCoursesDetails(eachCourseDetails);
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  return (
    <AppContext.Provider value={{ allCourses, allCoursesDetails }}>{children}</AppContext.Provider>
  );
}
