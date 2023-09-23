import { NavLink } from 'react-router-dom';

export default function NavLinks() {
    return (
        <div className='flex mx-7 my-3.5 gap-5'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about-me">About Me</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/work">Work</NavLink>    
        </div>
    )
}