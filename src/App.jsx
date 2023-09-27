// CSS
import './index.css'

// React
import { Route, Routes, Navigate } from 'react-router-dom'

// Pages
import Home from './pages/Home.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Contact from './pages/Contact.jsx'
import Work from './pages/Work.jsx'

// Components
import HeaderV2 from './components/HeaderV2.jsx'
import Footer from './components/Footer'

function App() {

  return (
    <div className='w-screen md:w-[45rem] mx-auto'>
      <HeaderV2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App