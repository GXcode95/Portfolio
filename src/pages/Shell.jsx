import { useState, useEffect, useRef } from 'react'
import History from '../components/History'
import InputCli from '../components/InputCli'
import COMMANDS from '../commands'



function Shell() {
  const [history, setHistory] = useState([])
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    let values = inputRef.current.value.split(' ')

    const entry = {
      date: new Date(),
      command: values.shift(),
      args: values,
      string: inputRef.current.value
    }

    inputRef.current.value = ''
    setHistory([...history, entry])
    execCommand(entry)
  }

  const execCommand = (entry) => {
    if (COMMANDS[entry.command]?.exec)
      COMMANDS[entry.command].exec()
  }
  
  useEffect(() => {
    inputRef.current?.scrollIntoView({ behavior: "smooth" })
    
  }, [history]);

  return (
    <div className="p-2 overflow-hidden w-screen h-screen overflow-y-auto">
      <History history={history} />

      <hr className='border-gray-500' />

      <InputCli
        inputRef={inputRef}
        history={history}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default Shell
