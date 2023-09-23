import React, { useState } from 'react';

export default function HamburgerMenu() {
    
    const[menuOpen, setMenuOpen] = useState(false)

    const setOpenedState = () => {
        let reverseOpened = menuOpen

        setMenuOpen(!reverseOpened)
    }

    return (
        <div className={menuOpen ? 'menu-button-open' : 'menu-button'}
        onClick={() => setOpenedState()}
        >
            <div className='menu-button-burger'>
                
            </div>
        </div>
    )
}