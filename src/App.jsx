import './styles/App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home'
import Shell from './pages/shell/Shell'
import Contact from './pages/contact/Contact'
import Projects from './pages/Projects/Projects'
import About from './pages/about/About'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Shell />
  },
  {
    path: '/home',
    element:  <Home />
  },
  {
    path: '/contact',
    element:  <Contact />
  },
  {
    path: '/projects',
    element:  <Projects />
  },
  {
    path: '/about',
    element:  <About />
  }
])


function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App