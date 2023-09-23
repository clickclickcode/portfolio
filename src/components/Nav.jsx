import { NavLink } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';

export default function Nav() {
    return (
        <nav className='flex justify-between mx-7 my-3.5'>
            <div className='flex gap-5'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about-me">About Me</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/work">Work</NavLink>
            </div>
            <div>
                <p>switch</p>
            </div>
            <div>
                <HamburgerMenu />
            </div>
        </nav>
    )
}