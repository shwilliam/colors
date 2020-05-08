import {useContext, useEffect} from 'react'
import {ColorsContext} from '../context'

// TODO: refactor to measure dom el
const WHEEL_CIRCLE_SIZE = 60

export const useColors = circleSelector => {
  const {
    colors,
    setBaseColor,
    setColorAmount,
    setColorRotation,
    setColorLightness,
  } = useContext(ColorsContext)

  // wheel layout
  // TODO: fade in after layout
  useEffect(() => {
    const elems = [...document.querySelectorAll(circleSelector)]
    const increase = (Math.PI * 2) / elems.length

    let angleOffset = 0
    elems.forEach(el => {
      const x =
        100 * Math.cos(angleOffset) +
        ((window.innerWidth - (window.innerWidth > 800 ? 500 : 0)) -
          WHEEL_CIRCLE_SIZE) /
          2
      const y = 100 * Math.sin(angleOffset) - 50
      el.style.position = 'absolute'
      el.style.left = x + 'px'
      el.style.top = y + 'px'
      angleOffset += increase
    })
  }, [colors])

  return {
    colors,
    setBaseColor,
    setColorAmount,
    setColorRotation,
    setColorLightness,
  }
}
