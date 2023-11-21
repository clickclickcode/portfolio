import NameAndTitle from './NameAndTitle'
import ImageAndLinks from './ImageAndLinks'
import IntroDescription from './IntroDescription'

export default function Intro() {

    // Render the different parts of the intro section
    return (
        <div className='flex flex-col gap-10 mx-12 pt-4 pb-14 md:grid md:grid-cols-[auto,auto] md:grid-rows-[1fr,auto]' id='home'>
            <div className=''>
                <NameAndTitle />
            </div>
            <div className='mx-auto md:mx-0 md:justify-self-end md:row-span-2 md:self-center'>
                <ImageAndLinks />
            </div>
            <div className='text-center md:text-left md:w-[350px]'>
                <IntroDescription />
            </div>
        </div>
    )
}