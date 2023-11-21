import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className="flex flex-col gap-4 border-t border-gray-500 h-fit px-12 py-10">
            <h2 className="text-center">Thank you so much for dropping by!</h2>
            <p className="text-center">If you see some potential worth cultivating on this site, please, don't hesitate to reach out.</p>
            <p className='text-center'>You can find me here:</p>
            <div className='flex gap-4 justify-center'>
                <a href="https://github.com/clickclickcode" target='_blank' className=''><FaGithub className='w-10 h-10 md:w-6 md:h-6 mx-auto'/></a>
                <a href="https://www.linkedin.com/in/lean-kenneth-hansen/" target='_blank' className=''><FaLinkedin className='w-10 h-10 md:w-6 md:h-6 mx-auto'/></a>
            </div>
            <p className='text-center'>Or via email:</p>
            <p className='text-center'>eaalkh@students.eaaa.dk</p>
        </div>
    )
}