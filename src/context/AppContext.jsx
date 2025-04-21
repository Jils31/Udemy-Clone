import { createContext, useEffect, useState } from "react";
import { courses, eachCourseDetails } from "../assets/assets";

export const AppContext = createContext();
export function AppContextprovider({ children }) {
  const [allCourses, setAllCourses] = useState([]);
  const [allCoursesDetails, setAllCoursesDetails] =  useState([])

  const fetchAllCourses = async () => {
    setAllCourses(courses);
    setAllCoursesDetails(eachCourseDetails);
  };

  const[isEducator, setIsEducator] = useState(true)
  useEffect(() => {
    fetchAllCourses();
  }, []);
  return (
    <AppContext.Provider value={{ allCourses, isEducator,setIsEducator, allCoursesDetails }}>{children}</AppContext.Provider>
  );
}
