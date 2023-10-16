import './styles/App.css'
import Shell from './pages/shell/Shell'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact.jsx'

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