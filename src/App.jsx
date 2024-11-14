import React from 'react'
import Header from './Component/Header'
import About from './Component/About'
import Projects from './Component/Projects'
import Testimonails from './Component/Testimonails'
import Contact from './Component/Contact'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <Projects/>
      <Testimonails/>
      <Contact/>
      
    </div>
  )
}

export default App
