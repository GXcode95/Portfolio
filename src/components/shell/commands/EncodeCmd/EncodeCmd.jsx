function EncodeCmd({entry}) {
  const shift = parseInt(entry.args[0])
  const originText = entry.args.slice(1, entry.args.length).join(' ')

  const caesarCipher = (text, shift) => {
    const DOWNCASE_MIN_CODE = 97
    const DOWNCASE_MAX_CODE = 122
    const UPCASE_MIN_CODE = 65
    const UPCASE_MAX_CODE = 90
    const ALPHABET_SIZE = 26
        
    let results = []  

    text.split('').forEach((char) => {
      let charCode = char.charCodeAt()
      let charIsUpcase = UPCASE_MIN_CODE <= charCode && charCode <= UPCASE_MAX_CODE
      let charIsDowncase = DOWNCASE_MIN_CODE <= charCode && charCode <= DOWNCASE_MAX_CODE
      let charIsLetter = !charIsUpcase && !charIsDowncase
      let maxIndex = charIsUpcase ? UPCASE_MAX_CODE : DOWNCASE_MAX_CODE
      let minIndex = charIsUpcase ? UPCASE_MIN_CODE : DOWNCASE_MIN_CODE
      
      if (charIsLetter) {
        results.push(char)

        return
      }
      charCode += shift
      if (charCode > maxIndex)
        charCode -= ALPHABET_SIZE
      if (charCode < minIndex)
        charCode += ALPHABET_SIZE
    
      results.push(String.fromCharCode(charCode))
    })
  
    return results.join('')
  }


  return (
    <>
      <p>Original text:</p> 
      <p>{ originText }</p>
      <p>Encoded into:</p> 
      <p>{caesarCipher(originText, shift)}</p>
    </>
  )
}

export default EncodeCmd