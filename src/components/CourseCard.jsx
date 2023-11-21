// A card component for courses

export default function CourseCard({ course }) {


    return (
        <div className='w-52 h-[400px] flex flex-col border rounded-md'>
            <img src={course.img} alt="" className="h-40 w-52 object-contain rounded-t-md grayscale md:hover:grayscale-0" />
            <div className="flex flex-col justify-between flex-1 h-[200px] w-52 border-t px-1 py-2">
                <div className='flex flex-col gap-4'>
                    <h1 className='font-semibold'>{course.title}</h1>
                    <div className=''>{course.description}</div>
                    <div className=''></div>
                </div>
            </div>
        </div>
    )
}
