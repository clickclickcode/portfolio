import { useState } from 'react'

export default function HeaderV2() {
    
    // State variable
    const[menuOpen, setMenuOpen] = useState(false)

    // DOM element
    const body = document.querySelector('body')

    const setOpenedState = () => {
        let reverseOpened = menuOpen
        body.style.overflow = reverseOpened ? 'scroll' : 'hidden'

        setMenuOpen(!reverseOpened)
    }
    
    return (
        <header className='sticky top-0 bg-transparent z-[20]'>
            <div className='md:hidden'>
                <div className={menuOpen ? 'menu-button-open z-[30]' : 'menu-button'} id='menu-button' onClick={() => setOpenedState()}>
                    <div className='menu-button-burger'></div>
                </div>
            </div>
            <div className='hidden md:flex md:gap-5 md:justify-start md:items-center md:bg-white md:h-[50px]'>
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#work">Projects</a>
                <a href="#courses">Courses</a>
            </div>
            {menuOpen && (
                <div className={`${menuOpen ? 'z-[25] -mt-[50px]' : 'z-[10]'} absolute flex flex-col gap-12 pt-24 items-center w-screen h-screen backdrop-blur-md text-2xl`}>
                    <a href="#" onClick={() => setOpenedState()}>Home</a>
                    <a href="#about" onClick={() => setOpenedState()}>About Me</a>
                    <a href="#work" onClick={() => setOpenedState()}>Projects</a> 
                    <a href="#courses" onClick={() => setOpenedState()}>Courses</a> 
                </div>
            )}
        </header>
    )
}