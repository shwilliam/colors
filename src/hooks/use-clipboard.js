import {useState, useEffect} from 'react'
import copy from 'copy-to-clipboard'

export const useClipboard = (text, successDuration) => {
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (isCopied && successDuration) {
      const id = setTimeout(() => {
        setIsCopied(false)
      }, successDuration)

      return () => {
        clearTimeout(id)
      }
    }
  }, [isCopied, successDuration])

  return [
    isCopied,
    () => {
      const didCopy = copy(text)
      setIsCopied(didCopy)
    },
  ]
}
