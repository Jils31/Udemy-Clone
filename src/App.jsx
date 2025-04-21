import { useState } from "react";
import { lazy, Suspense } from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import Home from "./pages/student/Home";
import Loading from "./components/student/Loading";
import Navbar from './components/student/Navbar'

const CoursesList = lazy(() => import("./pages/student/CoursesList"));
const CourseDetails = lazy(() => import("./pages/student/CourseDetails"));


function App() {
  const isEducatorRoute = useMatch('/educator/*')
  return (
    <div className="text-default min-h-screen bg-white">
    {!isEducatorRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/course-list" element={<CoursesList />} />
                <Route path="/course-list/:input" element={<CoursesList />} />
                <Route path="/course/:id" element={<CourseDetails />} />
              </Routes>
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
