import Prompt from "../Prompt/Prompt"
import COMMANDS from "../../../commands"

function History({history}) {

  const commandHasOuput = (command) => {
    return command != '' && (!COMMANDS[command] || COMMANDS[command].component != null)
  }

  const CommandOutput = ({entry}) => {
    if (COMMANDS[entry.command] == undefined)
      return <p>Unknown command: {entry.command}</p>
      
    const Output = COMMANDS[entry.command].component

    return <Output entry={entry}/>
  }

  return (
    <>
      <div className="history">
        { history.map((entry, idx)=> (
          <div key={idx}>
            { entry.string &&
                <div className="flex gap-1">
                  <Prompt />
                  <span>{entry.string}</span>
                </div>
            }

            { commandHasOuput(entry.command) && 
                <CommandOutput entry={entry} /> }
          </div>
          
        ))}
      </div>
    </>
  )
}

export default History
