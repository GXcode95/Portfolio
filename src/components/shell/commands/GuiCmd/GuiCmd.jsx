import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function GuiCmd() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/home')
  }, [navigate])
  
  return (
    <>
    </>
  )
}

export default GuiCmd