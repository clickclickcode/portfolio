import './index.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Contact from './pages/Contact.jsx'
import Work from './pages/Work.jsx'

function App() {

  return (
    <div className='w-screen lg:w-[45rem] mx-auto'>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App