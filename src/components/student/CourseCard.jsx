import React from 'react'
import { assets, courses } from '../../assets/assets'
import { Link } from 'react-router-dom'

// This handles individual course cards
// Gets course data as props and makes it look pretty
function CourseCard({course}) {
  return (
    <div className='border border-gray-500/30 pb-6 overflow-hidden rounded-lg'>
      <Link to={'/course/' + course._id} onClick = {()=>scrollTo(0,0)}>
      <img className='w-full' src={course.imageUrl} alt={course.title} />
      
      <div className='p-3 text-left'>
        <h3 className='text-base font-semibold'>{course.title}</h3>
        
        <p className='text-gray-500'>{course.provider}</p>
        
        <div className='flex items-center space-x-2'>
          <p>{course.rating}</p>
          <div className='flex'>
            {[...Array(1)].map((_,i)=>(
              <img key={i} src={assets.star} alt="star rating" className='w-3.5 h-3.5'/>
            ))}
          </div>
          <p className='text-gray-500'>({course.reviews})</p>
        </div>
        
        <p className='text-base font-semibold text-gray-800'>{course.price}</p>
      </div>
      </Link>
    </div>
  )
}

export default CourseCard
