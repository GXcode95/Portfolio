import './navbar.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Bars3Icon, CommandLineIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion';

const menuItems = [
  {
    text: 'Projects',
    url: '/projects',
  },
  {
    text: 'About',
    url: '/about', 
  },
  {
    text: 'Contact',
    url: '/contact',
  }
]
function Navbar() {
  const href = window.location.href.split('/')
  const currItemIdx = menuItems.findIndex((item) => item.url === `/${href[href.length - 1]}`)
  const [selected, setSelected] = useState(currItemIdx)
  

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
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{
              duration: .5,
            }}
          >
            <Link to="/">
              <CommandLineIcon className="h-6 w-6 text-primary" />
            </Link>
          </motion.div>
        </div>
        
        <nav className="extended-menu">
          <div className="menu extended-menu--wrapper flex">
              {menuItems.map((item, idx) => (
                <div 
                  key={idx}
                  className={`extended-menu--item ${selected === idx && 'selected'}`} 
                  onClick={() => setSelected(idx)}
                >
                  <Link to={item.url}>{item.text}</Link>
                  {selected === idx && (
                    <motion.div 
                      className="extended-menu--decoration" 
                      layoutId="underline" />
                  )}
                </div>
              ))}
          </div>
        </nav>

        <div className="mobile-menu">
          <div className="icon-menu">
            <button onClick={toggleMenu} className="btn">
              <Bars3Icon className="h-6 w-6 text-gray-lightest"/>
            </button>
          </div>

          <div
            className={`nav-wrapper ${!showMenu && "hidden"}`}
            onClick={closeMenu}
          >
            <nav>
              {menuItems.map((item, idx) => (
                <div key={idx} >
                  <Link to={item.url}>{item.text}</Link>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar