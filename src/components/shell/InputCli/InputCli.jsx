import Prompt from "../Prompt/Prompt"

function InputCli({handleSubmit, inputRef, handleKeyDown}) {  
  const preventFocusOut = (e) => {
    e.preventDefault()
    e.target.focus()
  }

  return (
    <>
    <form className="flex gap-1" onSubmit={handleSubmit}>
      <label htmlFor="input-cli" className="flex-shrink">
        <Prompt />
      </label>

      <input
        ref={inputRef}
        id="input-cli"
        name="command"
        type="text"
        className={`focus:outline-none flex-grow`}
        autoFocus={true}
        onBlur={preventFocusOut}
        onKeyDown={handleKeyDown}
      />
    </form>
    </>
  )
}

export default InputCli
