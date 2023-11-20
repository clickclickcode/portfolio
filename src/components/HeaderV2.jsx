import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function HeaderV2() {
    
    const[menuOpen, setMenuOpen] = useState(false)
    const body = document.querySelector('body')

    const setOpenedState = () => {
        let reverseOpened = menuOpen
        body.style.overflow = reverseOpened ? 'scroll' : 'hidden'

        setMenuOpen(!reverseOpened)
    }
    
    return (
        <header className='sticky top-0 bg-white z-[20]'>
            <div className='md:hidden'>
                <div className={menuOpen ? 'menu-button-open' : 'menu-button'} id='menu-button' onClick={() => setOpenedState()}>
                    <div className='menu-button-burger'></div>
                </div>
            </div>
            <div className='hidden md:flex gap-5 justify-start my-5'>
                <NavLink className='md:hover:text-teal-700' to="/">Home</NavLink>
                <NavLink className='md:hover:text-teal-700' to="/about-me">About Me</NavLink>
                <NavLink className='md:hover:text-teal-700' to="/contact">Contact</NavLink>
                <NavLink className='md:hover:text-teal-700' to="/work">Work</NavLink>
                {/* <a href="#">Home</a>
                <a href="#about">About Me</a>
                <a href="#work">Work</a>  */}
            </div>
            {menuOpen && (
                <div className='absolute flex flex-col gap-5 items-center w-screen h-screen z-[10] backdrop-blur-md py-8 text-2xl'>
                    {/* <NavLink className='' to="/" onClick={() => setOpenedState()}>Home</NavLink>
                    <NavLink className='' to="/about-me" onClick={() => setOpenedState()}>About Me</NavLink>
                    <NavLink className='' to="/contact" onClick={() => setOpenedState()}>Contact</NavLink>
                    <NavLink className='' to="/work" onClick={() => setOpenedState()}>Work</NavLink> */}
                    <a href="#" onClick={() => setOpenedState()}>Home</a>
                    <a href="#about" onClick={() => setOpenedState()}>About Me</a>
                    <a href="#work" onClick={() => setOpenedState()}>Projects</a> 
                </div>
            )}
        </header>
    )
}