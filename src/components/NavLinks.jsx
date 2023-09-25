import { NavLink } from 'react-router-dom';

export default function NavLinks() {
    return (
        <>
            <NavLink className='md:hover:text-teal-700' to="/">Home</NavLink>
            <NavLink className='md:hover:text-teal-700' to="/about-me">About Me</NavLink>
            <NavLink className='md:hover:text-teal-700' to="/contact">Contact</NavLink>
            <NavLink className='md:hover:text-teal-700' to="/work">Work</NavLink>    
        </>
    )
}