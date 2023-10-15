function EchoCmd({entry}) { 
  return (
    <p>{entry.args.join(' ')}</p>
  )
}

export default EchoCmd
