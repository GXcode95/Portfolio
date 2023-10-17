const BANNER = 
`        _   _
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
      <p className="text-primary">
        { BANNER }
      </p>
      <p>
        Type &quot;<span className="text-info">help</span>&quot; to see the list of available commands.
      </p>
      <p>
        Type &quot;<span className="text-info">fetch&quot;</span> to display summary.
        </p>
      <p>
        Type &quot;<span className="text-info">gui&quot;</span> to switch to traditional interface.
      </p>
      <br />
      <br />
    </div>
  )
}

export default BannerCmd
