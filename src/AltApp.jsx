// CSS
import './index.css'

// Components
import HeaderV2 from './components/HeaderV2.jsx'
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'

function App() {

  return (
    <div className='w-screen md:w-[45rem] mx-auto'>
      <HeaderV2 />

      <Intro />
      <AboutMe />

      <Footer />
    </div>
  )
}

export default App