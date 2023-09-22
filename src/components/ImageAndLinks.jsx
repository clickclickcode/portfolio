import Me from '../images/me.png'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

export default function ImageAndLinks() {
    return (
        <div className='lg:w-32'>
            <img src={Me} alt="My face" className='w-44 lg:w-32 rounded-full grayscale'/>
            <div className='flex justify-evenly mt-5 lg:my-5'>
                <a href="https://www.linkedin.com/in/lean-kenneth-hansen/" target='_blank' className=''><FaLinkedin className='w-8 h-8 lg:w-6 lg:h-6 mx-auto'/></a>
                <a href="https://github.com/clickclickcode" target='_blank' className=''><FaGithub className='w-8 h-8 lg:w-6 lg:h-6 mx-auto'/></a>
            </div>
        </div>
    )
}