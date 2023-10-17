import COMMANDS from "../../../../commands"
import './help_cmd.css'

function HelpCmd() {

  return (
    <div className='help-cmd'>
      <ul>
        {Object.keys(COMMANDS).map((key,idx) => (
          <li key={idx}>
            <span className="text-info">{key}</span>
            <span>{COMMANDS[key].description}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HelpCmd