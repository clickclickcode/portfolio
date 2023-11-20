import NameAndTitle from './NameAndTitle'
import ImageAndLinks from './ImageAndLinks'
import IntroDescription from './IntroDescription'

export default function Intro() {

    // Render the different parts of the intro section
    return (
        <div className='flex flex-col gap-5 mx-10 pt-2 md:grid md:grid-cols-2 md:grid-rows-2' id='home'>
            <div className=''>
                <NameAndTitle />
            </div>
            <div className='mx-auto md:justify-self-end md:row-span-2 md:mx-0'>
                <ImageAndLinks />
            </div>
            <div className='text-center md:text-left'>
                <IntroDescription />
            </div>
        </div>
    )
}