import ImageAndLinks from './ImageAndLinks'
import NameAndTitle from './NameAndTitle'
import IntroDescription from './IntroDescription'

export default function Intro() {
    return (
        <div className='flex mx-20 mt-7'>
            <div className='w-1/2'>
                {/* Container storing name and title */}
                <NameAndTitle />
                {/* Short introductory paragraph */}
                <IntroDescription />
            </div>
            <div className='w-1/2 flex justify-end'>
                {/* Container storing image and links */}
                <ImageAndLinks />
            </div>
        </div>
    )
}