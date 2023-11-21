// CSS
import './index.css'

// Components
import HeaderV2 from './components/HeaderV2.jsx'
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Work from './components/Work'
import Hr from './components/Hr'
import Courses from './components/Courses'

export default function App() {

  return (
    <div className='flex flex-col gap-8 w-screen mx-auto md:w-[55rem] md:gap-14 lg:w-70'>
      <HeaderV2 />

      <Intro />
      <Hr />
      <AboutMe />
      <Hr />
      <Work />
      <Hr />
      <Courses />

      <Footer />
    </div>
  )
}