import { useState } from "react";
import { lazy, Suspense } from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import Home from "./pages/student/Home";
import Loading from "./components/student/Loading";
import Navbar from './components/student/Navbar'

const CoursesList = lazy(() => import("./pages/student/CoursesList"));
const CourseDetails = lazy(() => import("./pages/student/CourseDetails"));
const MyEnrollments = lazy(() => import("./pages/student/MyEnrollments"));
const Player = lazy(() => import("./pages/student/Player"));

const Educator = lazy(() => import("./pages/educator/Educator"));
const Dashboard = lazy(() => import("./pages/educator/Dashboard"));
const AddCourse = lazy(() => import("./pages/educator/AddCourse"));
const MyCourse = lazy(() => import("./pages/educator/MyCourses"));
const StudentsEnrolled = lazy(() =>
  import("./pages/educator/StudentsEnrolled")
);

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
                <Route path="/my-enrollments" element={<MyEnrollments />} />
                <Route path="/player/:courseID" element={<Player />} />

                <Route path="/educator" element={<Educator />}>
                  <Route path="educator" element={<Dashboard />} />
                  <Route path="add-course" element={<AddCourse />} />
                  <Route path="my-course" element={<MyCourse />} />
                  <Route
                    path="student-enrolled"
                    element={<StudentsEnrolled />}
                  />
                </Route>
              </Routes>
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
