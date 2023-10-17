import './shell.css'
import COMMANDS from '../../commands'

import { useState, useEffect, useRef } from 'react'
import History from '../../components/shell/History/History'
import InputCli from '../../components/shell/InputCli/InputCli'
import { motion } from 'framer-motion'

function Shell() {
  const [history, setHistory] = useState([{date: new Date(), command: 'banner', args: [], string: null}])
  const [lastHistoryEntry, setLastHistoryEntry] = useState(null)

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
    setLastHistoryEntry(entry)
    execCommand(entry)
  }

  const execCommand = (entry) => {
    if (COMMANDS[entry.command]?.exec)
      COMMANDS[entry.command].exec()
  }
  
  const handleKeyDown = (e) => {
    // console.log(e.keyCode, e.key)
    if ([76,38,40,9].includes(e.keyCode) == false)
      return
    
    if (e.keyCode == 38 && !lastHistoryEntry) {
      e.preventDefault()
      inputRef.current.value = lastHistoryEntry.string
      setLastHistoryEntry(history[history.indexOf(lastHistoryEntry) - 1])
    }
    
    if (e.keyCode == 40 && !lastHistoryEntry) {
      e.preventDefault()
      inputRef.current.value = lastHistoryEntry.string
      setLastHistoryEntry(history[history.indexOf(lastHistoryEntry) + 1])
    }
  
    if (e.keyCode == 9 && inputRef.current.value === '') {
      e.preventDefault()    
      let completions = Object.keys(COMMANDS).filter(name => ( name.startsWith(inputRef.current.value )))

      if (completions.length === 1)
        inputRef.current.value = completions[0]
    }
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
        handleKeyDown={handleKeyDown}
      />
    </motion.div>
  )
}

export default Shell
