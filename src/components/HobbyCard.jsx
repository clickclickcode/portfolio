// A card component for my interests/hobbies

export default function HobbyCard({ hobby }) {

    return (
        <div className='w-52 h-[400px] flex flex-col border rounded-md'>
            <img src={hobby.img} alt="" className="h-40 w-52 object-cover rounded-t-md grayscale md:hover:grayscale-0" />
            <div className="flex flex-col justify-between flex-1 h-[200px] w-52 border-t px-1 py-2">
                <div className='flex flex-col gap-4'>
                    <h1 className='font-semibold'>{hobby.title}</h1>
                    <div className='text-[15px]'>{hobby.description}</div>
                </div>
            </div>
        </div>
    )
}
