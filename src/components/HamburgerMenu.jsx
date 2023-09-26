import React, { useState } from 'react';

/* This menu was created with the aid of the following tutorial:
    LeadEngineer - React Hamburger Menu Tutorial
    https://youtu.be/-aNCsBrnn8k?si=-gQl6FinzosJ2cP8
*/

export default function HamburgerMenu() {
    
    const[menuOpen, setMenuOpen] = useState(false)

    const setOpenedState = () => {
        let reverseOpened = menuOpen

        setMenuOpen(!reverseOpened)
    }

    return (
        <div className={menuOpen ? 'menu-button-open' : 'menu-button'}  id='menu-button'
        onClick={() => setOpenedState()}
        >
            <div className='menu-button-burger'>
                
            </div>
        </div>
    )
}