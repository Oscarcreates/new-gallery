import './index.css'
import { useState } from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Project from './Components/Project'
import Video from './Components/video'
import Shop from './Components/video'
import Nav from './Components/Nav'
import Footer from './Components/footer'




function App() {

  const [page, setPage] = useState('home');

  return (
    <div className="flex flex-col min-h-screen w-1024px">
      <Nav page={page} setPage={setPage} />

    <main className="grow">
      {page === 'home' && <Home />}
      {page === 'about' && <About />}
      {page === 'Video' && <Video />}
      {/* {page === 'Project' && <Project />} */}
      {page === 'contact' && <Contact />}
      </main>

      <Footer />
      </div>
    
  )
}



export default App
