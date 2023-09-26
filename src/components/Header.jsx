import HamburgerMenu from './HamburgerMenu.jsx'
import NavLinks from './NavLinks.jsx'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    
    const [isOpen, setIsOpen] = useState(false)
    const body = document.querySelector('body')


    const toggleNavbar = () => {
        setIsOpen(!isOpen)
        body.style.overflow = isOpen ? 'scroll' : 'hidden'
    }

    const closeNavbar = () => {
        setIsOpen(false)
    }
    
    return (
        <>
            <header className="bg-white sticky top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-start border-b border-gray-500 px-5">
                <div className='hidden md:flex gap-4 justify-between py-4'>
                    <NavLinks />
                </div>
                <div className='md:hidden'>
                    <button onClick={toggleNavbar}>
                        <HamburgerMenu />
                    </button>
                </div>
            </header>
            {isOpen && (
                <div className='absolute flex flex-col items-center z-[10] basis-full backdrop-blur-md h-screen w-screen gap-8 py-24 text-2xl overscroll-contain overflow-scroll overflow-x-scroll'>
                    {/* <NavLinks /> */}
                    <NavLink onClick={closeNavbar} className='md:hover:text-teal-700' to="/">Home</NavLink>
                    <NavLink className='md:hover:text-teal-700' to="/about-me">About Me</NavLink>
                    <NavLink className='md:hover:text-teal-700' to="/contact">Contact</NavLink>
                    <NavLink className='md:hover:text-teal-700' to="/work">Work</NavLink>   
                </div>
            )}
        </>
    )
}