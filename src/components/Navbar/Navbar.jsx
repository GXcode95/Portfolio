import './navbar.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CommandLineIcon } from '@heroicons/react/24/solid'

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
      const currentScrollPos = window.scrollY

      if(currentScrollPos > prevScrollPos){
          setVisible(false)
      }else{
          setVisible(true)
      }

      setPrevScrollPos(currentScrollPos)
      closeMenu()
  }

  useEffect( () => {
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll)
  })

  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const closeMenu = () => {
    setShowMenu(false)
  }


  return (
    <>
      <header className={`nav sticky ${visible ? 'top-0' : ''} `}>
        <div className="flex-1">
          <Link to="/home" className="title">XavierCode</Link>
          <Link to="/">
            <CommandLineIcon className="h-6 w-6 text-primary" />
          </Link>
        </div>
        
        <nav className="menu">
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>          
        </nav>

        <div className="menu-sm">
          <div className="icon-menu">
            <button onClick={toggleMenu} className="btn">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </button>
          </div>

          <div className={`nav-wrapper ${!showMenu && "hidden"}`} onClick={closeMenu}>
            <nav>
              <Link to="/projects">Projects</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar