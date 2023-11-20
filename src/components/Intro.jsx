import Me from '../images/me.png'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

export default function Intro() {

    // Different variables representing different parts of the intro section
    const nameAndTitle = (
        <div className="">
            <h1 className="text-2xl">Lean Hansen</h1>
            <h2 className="text-base md:mb-5">Student & Aspiring Developer</h2>    
        </div>
    )

    const imageAndLinks = (
        <div className='md:w-32'>
            <img src={Me} alt="My face" className='w-44 md:w-32 rounded-full grayscale'/>
            <div className='flex justify-evenly mt-5 md:my-5'>
                <a href="https://www.linkedin.com/in/lean-kenneth-hansen/" target='_blank' className=''><FaLinkedin className='w-8 h-8 md:w-6 md:h-6 mx-auto'/></a>
                <a href="https://github.com/clickclickcode" target='_blank' className=''><FaGithub className='w-8 h-8 md:w-6 md:h-6 mx-auto'/></a>
            </div>
        </div>
    )

    const introDescription = (
        <p className="text-[10px]">Welcome to my portfolio!
        I'm Lean, an aspiring developer on a quest to discover my programming niche.
        With a passion for coding elegant websites and crafting robust applications, I invite you to explore my evolving skills and projects. Join me in unraveling the endless possibilities of code and technology!
        </p>
    )

    // Render the different parts of the intro section
    return (
        <div className='flex flex-col gap-5 mx-10 pt-2 md:grid md:grid-cols-2 md:grid-rows-2' id='home'>
            <div className=''>
                {nameAndTitle}
            </div>
            <div className='mx-auto md:justify-self-end md:row-span-2 md:mx-0'>
                {imageAndLinks}
            </div>
            <div className='text-center md:text-left'>
                {introDescription}
            </div>
        </div>
    )
}