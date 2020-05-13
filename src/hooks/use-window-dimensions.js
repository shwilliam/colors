import {useEffect, useState} from 'react'
import {compose, prop} from 'ramda'

const getWindowDimensions = () => ({
  width: prop('innerWidth', window),
  height: prop('innerHeight', window),
})

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions)

  useEffect(() => {
    const handleResize = () => compose(setWindowDimensions, getWindowDimensions)()

    // TODO: throttle
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}
