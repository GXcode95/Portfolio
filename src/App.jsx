import './styles/App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home'
import Shell from './pages/shell/Shell'
import Contact from './pages/contact/Contact'
import Projects from './pages/Projects/Projects'

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