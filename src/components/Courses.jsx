import CourseCard from './CourseCard';
import { courses } from '../assets/storage.js';


export default function Work() {
    
    return (
        <div className='flex flex-col gap-5 mx-10 pt-14' id='courses'>
            <div className=''>
                <h2 className='text-2xl mb-1'>Courses</h2>
                <p className='text-base'>
                    Here are some of the courses that I have taken in my spare time. You'll be able to see the certificates for these on my LinkedIn profile.
                </p>
            </div>
            {/* These are courses that I have done */}
            <div className='flex items-center gap-6 py-4 px-2 overflow-scroll'>
                {courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    )
}