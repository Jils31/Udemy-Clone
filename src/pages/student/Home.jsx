import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CoursesSection from '../../components/student/CoursesSection'
import TestimonialSection from '../../components/student/TestimonialSection'
import CallToActions from '../../components/student/CallToActions'
import Footer from '../../components/student/Footer'

//This includes the landing page components and thus this will be visible
function Home() {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero />
      <Companies />
      <CoursesSection />
      <TestimonialSection />
      <CallToActions />
      <Footer />
    </div>
  )
}

export default Home
