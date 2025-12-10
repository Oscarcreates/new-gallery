import { useState } from 'react' 
import logo from '/assets/logo1.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"; 


function Nav({ page, setPage }) {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className="text-black p-9 w-full flex items-center justify-between font-extralight sticky top-0 z-50 bg-white ">

      <div>
        <img className="max-w-[120px]" src={logo} alt="" />
      </div>

      
      <div className="hidden md:flex">
  <button 
    onClick={() => setPage('home')} 
    className={`mr-8 pb-1 border-b-2 transition-colors ${page === 'home' ? 'border-yellow-600 font-medium' : 'border-transparent hover:border-yellow-600'}`}
  >
    Home
  </button>

  <button 
    onClick={() => setPage('Video')} 
    className={`mr-8 pb-1 border-b-2 transition-colors ${page === 'Video' ? 'border-yellow-600 font-medium' : 'border-transparent hover:border-yellow-600'}`}
  >
    Video
  </button>

  <button 
    onClick={() => setPage('about')} 
    className={`mr-8 pb-1 border-b-2 transition-colors ${page === 'about' ? 'border-yellow-600 font-medium' : 'border-transparent hover:border-yellow-600'}`}
  >
    About
  </button>
  
  <button 
    onClick={() => setPage('contact')}
    className={`pb-1 border-b-2 transition-colors ${page === 'contact' ? 'border-yellow-600 font-medium' : 'border-transparent hover:border-yellow-600'}`}
  >
    Book a Session
  </button>
</div>


      <div className='hidden md:flex border-1 p-2 rounded-4xl'>
  <div className='mx-2 border-1 border-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer'>
    <a href="https://www.facebook.com/share/19xAgfTRmF/?mibextid=wwXIfr"><FaFacebookF /></a>
  </div>
  <div className='mx-2 border-1 border-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer'>
    <a href="https://wa.link/byb5an"><FaInstagram /></a>
  </div>
  <div className='mx-2 border-1 border-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer'>
    <a href="https://www.instagram.com/cistystudios?igsh=MTRnZXBxYTZpZHNmaQ=="><RiTwitterXFill /></a>
  </div>
  <div className='mx-2 border-1 border-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer'>
    <a href="https://www.youtube.com/@CistyStudios"><BsYoutube /></a>
  </div>
</div>


      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>


      <div className={nav ? "ease-in-out duration-500 h-full w-[60%] fixed left-0 top-0 bg-[#97adc3] text-white z-50" : "fixed left-[-100%]"}>
        <img className="max-w-[120px] m-4" src={logo} alt="" />

        <div className="flex flex-col p-4">
          <button 
            onClick={() => { setPage('home'); setNav(false); }} 
            className={`py-4 text-left ${page === 'home' ? 'font-medium' : ''}`}
          >
            Home
          </button>



          <button 
            onClick={() => { setPage('Video'); setNav(false); }} 
            className={`py-4 text-left ${page === 'Video' ? 'font-medium' : ''}`}
          >
            Video
          </button>

          <button 
            onClick={() => { setPage('about'); setNav(false); }} 
            className={`py-4 text-left ${page === 'about' ? 'font-medium' : ''}`}
          >
            About
          </button>
          
          <button 
            onClick={() => { setPage('contact'); setNav(false); }}
            className={`py-4 text-left ${page === 'contact' ? 'font-medium' : ''}`}
          >
            Book a Session
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav