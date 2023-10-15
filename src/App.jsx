import './styles/App.css'
import Shell from './pages/Shell'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Shell />
  },
  {
    path: '/home',
    element:  <Home />
  },
])


function App() {
  return <RouterProvider router={router} />
}

export default App