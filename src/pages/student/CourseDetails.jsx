import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/student/Loading";
import { assets } from "../../assets/assets";
import Footer from "../../components/student/Footer";
import { fetchYoutubeVideos } from "../../utils/youtube";

function CourseDetails() {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [moduleVideos, setModuleVideos] = useState({});
  const { allCoursesDetails } = useContext(AppContext);

  const fetchCourseData = async () => {
    const findCourse = allCoursesDetails.find((course) => course._id === id);
    setCourseData(findCourse);

    if (findCourse) {
      const videos = {};
      for (const chapter of findCourse.courseStructure) {
        const video = await fetchYoutubeVideos(
          chapter.moduleTitle + " tutorial"
        );
        if (video) {
          videos[chapter.moduleTitle] = video;
        }
      }
      setModuleVideos(videos);
    }
  };
    const [expandedModules, setExpandedModules] = useState({});
  
    const toggleModule = (moduleTitle) => {
      setExpandedModules(prev => ({
        ...prev,
        [moduleTitle]: !prev[moduleTitle]
      }));
    };

  useEffect(() => {
    fetchCourseData();
  }, []);

  return courseData ? (
    <>
      <div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-20 pt-20 text-left">
        {/* left column */}
        <div className="max-w-xl z-10 text-gray-500">
          <h1 className="md:text-course-details-heading-small text-course-details-heading-large font-semibold text-gray-800">
            {courseData.title}
          </h1>
          <p className="pt-4 md:text-base text-sm">{courseData.description}</p>
          {/* reviews and ratings */}
          <div className="flex items-center space-x-2 pt-3 pb-1 text-sm">
            <p>{courseData.rating}</p>
            <div className="flex">
              {[...Array(1)].map((_, i) => (
                <img
                  key={i}
                  src={assets.star}
                  alt="star rating"
                  className="w-3.5 h-3.5"
                />
              ))}
            </div>
            <p className="text-gray-500">
              {courseData.students} students enrolled
            </p>
          </div>
          <p className="text-sm">
            Course by{" "}
            <span className="text-blue-600 underline">
              {courseData.instructor}
            </span>
          </p>

          <div className="pt-8 text-gray-800">
            <h2 className="text-xl font-semibold">Course Structure</h2>

            <div className="pt-5">
              {courseData.courseStructure.map((chapter, index) => (
                <div
                  key={index}
                  className="border border-gray-300 bg-white mb-2 rounded"
                >
                  <div
                    className="flex items-center justify-between px-4 py-3 cursor-pointer select-none"
                    onClick={() => toggleModule(chapter.moduleTitle)}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={assets.downArrow}
                        alt=""
                        className={`h-4 w-4 transition-transform duration-200 ${
                          expandedModules[chapter.moduleTitle]
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                      <p className="font-medium md:text-base text-sm">
                        {chapter.moduleTitle}
                      </p>
                    </div>
                    <p className="text-sm md:text-default">
                      {chapter.lectures} lectures - {chapter.duration}
                    </p>
                  </div>
                  {expandedModules[chapter.moduleTitle] && (
                    <div className="px-4 py-2 border-t border-gray-200">
                      {moduleVideos[chapter.moduleTitle] && (
                        <div className="aspect-video w-full">
                          <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${
                              moduleVideos[chapter.moduleTitle].id.videoId
                            }`}
                            title={
                              moduleVideos[chapter.moduleTitle].snippet.title
                            }
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 text-gray-800 md:text-default text-sm ">
            <h2 className="text-xl font-semibold">Course Description</h2>
            <p className="text-xl font-semibold pt-5 text-black">
              {courseData.heading}
            </p>
            <p className="pt-4 md:text-base text-sm text-gray-500">
              {courseData.description}
            </p>
            <ul className="pt-3 pb-3 space-y-2 list-disc ml-4">
              {courseData.courseHighlights.map((item, index) => (
                <li key={index} className="text-gray-500">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* right column */}
        <div className="max-course-card z-10 custom-card rounded-lg md:rounded-lg overflow-hidden bg-white min-w-[300px] sm:min-w-[420px]">
          <img src={courseData.imageUrl} alt="" />
          <div className="p-5">
            <div className="flex items-center gap-2">
              <img src={assets.timeleft} className="w-4 h-4" alt="" />
              <p className="text-red-500">
                <span className="font-medium">5 days</span> left at this price!
              </p>
            </div>

            <div className="flex gap-3 items-center pt-2">
              <p className="text-gray-800 md:text-2xl text-2xl font-semibold">
                {courseData.price}
              </p>
              <p className="md:text-lg text-gray-500 line-through">
                {courseData.originalPrice}
              </p>
              <p className="md:text-lg text-gray-500">{courseData.discount}</p>
            </div>

            <div className="flex items-center text-sm md:text-default gap-4 pt-2 md:pt-4 text-gray-500">
              <div className="flex items-center gap-1">
                <img src={assets.star} alt="" />
                <p>{courseData.rating}</p>
              </div>

              <div className="flex items-center gap-1">
                <img src={assets.timeleft} className="w-3.5 h-3.5" alt="" />
                <p>{courseData.duration}</p>
              </div>

              <div className="flex items-center gap-2">
                <img src={assets.book} className="w-5 h-5" alt="" />
                <p>{courseData.lessons} lessons</p>
              </div>
            </div>

            <div className="pt-6">
              <p className="'md:text-xl text-lg font-medium text-gray-800">
                What's in the Course?
              </p>
              <ul className="ml-4 pt-2 text-sm md:text-default list-disc text-gray-500">
                {courseData.extras.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
}

export default CourseDetails;
