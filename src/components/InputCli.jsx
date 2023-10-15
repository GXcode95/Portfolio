import Prompt from "./Prompt"

function InputCli({handleSubmit, inputRef}) {  
  
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
      />
    </form>
    </>
  )
}

export default InputCli
