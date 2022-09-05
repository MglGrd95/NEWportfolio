import React from 'react'
import Nav from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='container'>
      <Nav />
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App