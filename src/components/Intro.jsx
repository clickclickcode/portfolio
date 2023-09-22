import ImageAndLinks from './ImageAndLinks'
import NameAndTitle from './NameAndTitle'
import IntroDescription from './IntroDescription'

export default function Intro() {
    return (
        <div className='flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:mx-20 lg:mt-7'>
            <div className=''>
                {/* Container storing name and title */}
                <NameAndTitle />
            </div>
            <div className='mx-auto lg:justify-self-end lg:row-span-2 lg:mx-0'>
                {/* Container storing image and links */}
                <ImageAndLinks />
            </div>
            <div className='text-center lg:text-left'>
                {/* Short introductory paragraph */}
                <IntroDescription />
            </div>
        </div>
    )
}