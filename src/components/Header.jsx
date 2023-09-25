import HamburgerMenu from './HamburgerMenu.jsx'
import NavLinks from './NavLinks.jsx'
import Nav from './Nav.jsx'
import { useState } from 'react'

export default function Header() {
    
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
            <header className="bg-white sticky top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-center border-b border-gray-500">
                <div className='hidden md:flex gap-4 justify-between py-4'>
                    <Nav />
                </div>
                <div className='md:hidden'>
                    <button onClick={toggleNavbar}>
                        <HamburgerMenu />
                    </button>
                </div>
            </header>
            {isOpen && (
                <div className='absolute flex flex-col items-center z-[10] basis-full backdrop-blur-md h-screen w-screen gap-4 py-4'>
                    <NavLinks />
                </div>
            )}
        </>
    )
}