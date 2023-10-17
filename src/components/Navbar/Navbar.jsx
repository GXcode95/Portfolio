import './navbar.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Bars3Icon, CommandLineIcon } from '@heroicons/react/24/solid'

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
              <Bars3Icon className="h-6 w-6 text-gray-lightest"/>
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