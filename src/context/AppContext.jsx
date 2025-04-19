import { createContext, useEffect, useState } from "react";
import { courses } from "../assets/assets";

export const AppContext = createContext();
export function AppContextprovider({ children }) {
  const [allCourses, setAllCourses] = useState([]);

  const fetchAllCourses = async () => {
    setAllCourses(courses);
  };

  const[isEducator, setIsEducator] = useState(true)
  useEffect(() => {
    fetchAllCourses();
  }, []);
  return (
    <AppContext.Provider value={{ allCourses, isEducator,setIsEducator }}>{children}</AppContext.Provider>
  );
}
