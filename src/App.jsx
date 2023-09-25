import './index.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Contact from './pages/Contact.jsx'
import Work from './pages/Work.jsx'
import CardContainer from './components/CardContainer'

function App() {

  return (
    <div className='w-screen md:w-[45rem] mx-auto'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <CardContainer />
    </div>
  )
}

export default App