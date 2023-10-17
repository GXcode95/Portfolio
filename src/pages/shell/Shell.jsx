import './shell.css'
import COMMANDS from '../../commands'

import { useState, useEffect, useRef } from 'react'
import History from '../../components/shell/History/History'
import InputCli from '../../components/shell/InputCli/InputCli'
import { motion } from 'framer-motion'

function Shell() {
  const [history, setHistory] = useState([{date: new Date(), command: 'banner', args: [], string: null}])
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
    <motion.div
      className="shell"
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'linear',
        duration: .4,
      }}
    >
      <History history={history} />

      <InputCli
        inputRef={inputRef}
        history={history}
        handleSubmit={handleSubmit}
      />
    </motion.div>
  )
}

export default Shell
