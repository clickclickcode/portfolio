import ImageAndLinks from './ImageAndLinks'
import NameAndTitle from './NameAndTitle'
import IntroDescription from './IntroDescription'

export default function Intro() {
    return (
        <div className='flex flex-col gap-5 md:grid md:grid-cols-2 md:grid-rows-2 mx-20 my-7'>
            <div className=''>
                {/* Container storing name and title */}
                <NameAndTitle />
            </div>
            <div className='mx-auto md:justify-self-end md:row-span-2 md:mx-0'>
                {/* Container storing image and links */}
                <ImageAndLinks />
            </div>
            <div className='text-center md:text-left'>
                {/* Short introductory paragraph */}
                <IntroDescription />
            </div>
        </div>
    )
}