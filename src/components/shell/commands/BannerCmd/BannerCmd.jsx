import { Link } from "react-router-dom"

const BANNER = 
`
        _   _
       (.)_(.)
    _ (   _   ) _
   / \\/\`-----'\\/ \\
 __\\ ( (     ) ) /__
 )   /\\ \\._./ /\\   (
  )_/ /|\\   /|\\ \\_(


`

function BannerCmd() { 
  return (
    <div className="whitespace-pre-wrap">
      <p>Hello! Welcome on my website! :)</p>
      <p className="text-primary">
        { BANNER }
      </p>
      <p>
        Type &quot;<span className="text-info">help</span>&quot; to see the list of available commands.
      </p>
      <p>
        Type &quot;<span className="text-info">fetch</span>&quot; to display summary.
        </p>
      <p>
        Type &quot;<span className="text-info">gui</span>&quot; or&nbsp; 
        <Link to="/home" className="text-red-500 font-extrabold">
          CLICK HERE
        </Link>
        &nbsp;to switch to traditional interface.
      </p>
      <br />
      <br />
    </div>
  )
}

export default BannerCmd
