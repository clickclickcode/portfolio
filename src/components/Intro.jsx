import ImageAndLinks from './ImageAndLinks'
import NameAndTitle from './NameAndTitle'
import IntroDescription from './IntroDescription'

export default function Intro() {
    return (
        <div className='flex flex-col gap-5 lg:grid grid-cols-2 grid-rows-2 mx-20 mt-7'>
            <div className=''>
                {/* Container storing name and title */}
                <NameAndTitle />
            </div>
            <div className='mx-auto lg:justify-self-end row-span-2'>
                {/* Container storing image and links */}
                <ImageAndLinks />
            </div>
            <div className='text-center'>
                {/* Short introductory paragraph */}
                <IntroDescription />
            </div>
        </div>
    )
}