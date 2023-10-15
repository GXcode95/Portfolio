import COMMANDS from "../commands"

function HistoryItem({entry}) {    
  
  const CommandOutput = ({entry}) => {
    const CurrCmd = COMMANDS[entry.command].component

    return <CurrCmd entry={entry}/>
  }

  const isValidCommand = (entry) => {
    return COMMANDS[entry.command] != undefined
  }
      
      
  return (
    <>
      { isValidCommand(entry) ? 
          <CommandOutput entry={entry} /> :
          <p>Unknown command: {entry.command}</p>
      }
    </>
  )
}

export default HistoryItem
