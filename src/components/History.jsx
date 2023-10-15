import Prompt from "./Prompt"
import HistoryItem from "./HistoryItem"
import COMMANDS from "../commands"

function History({history}) {

  const commandHasOuput = (command) => {
    return command != '' && (!COMMANDS[command] || COMMANDS[command].component != null)
  }

  return (
    <>
      <div className="history">
        { history.map((entry, idx)=> (
          <div key={idx}>
            <div className="flex gap-1">
              <Prompt />
              <span>{entry.string}</span>
            </div>

            { commandHasOuput(entry.command) && <HistoryItem entry={entry} /> }
          </div>
          
        ))}
      </div>
    </>
  )
}

export default History
