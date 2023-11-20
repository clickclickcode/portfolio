// CSS
import './index.css'

// Components
import HeaderV2 from './components/HeaderV2.jsx'
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Work from './components/Work'

export default function App() {

  return (
    <div className='flex flex-col w-screen md:w-[45rem] mx-auto'>
      <HeaderV2 />

      <Intro />
      <AboutMe />
      <Work />

      <Footer />
    </div>
  )
}