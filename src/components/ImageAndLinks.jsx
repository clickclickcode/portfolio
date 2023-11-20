import Me from '../images/me.png'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

export default function ImageAndLinks() {
    return (
        //md:w-32
        <div className='md:w-44'>
            {/* md:w-32 */}
            <img src={Me} alt="My face" className='w-44 md:w-44 rounded-full grayscale'/>
            <div className='flex justify-evenly mt-5 md:my-5'>
                <a href="https://www.linkedin.com/in/lean-kenneth-hansen/" target='_blank' className=''><FaLinkedin className='w-10 h-10 md:w-6 md:h-6 mx-auto'/></a>
                <a href="https://github.com/clickclickcode" target='_blank' className=''><FaGithub className='w-10 h-10 md:w-6 md:h-6 mx-auto'/></a>
            </div>
        </div>
    )
}