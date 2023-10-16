import './styles/App.css'
import Shell from './pages/shell/Shell'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home'

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
  return (
    <div class="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App