import {useContext, useEffect} from 'react'
import {ColorsContext} from '../context'

const WHEEL_CIRCLE_SIZE = 120

export const useColors = circleSelector => {
  const {colors, setBaseColor, setColorAmount, setColorRotation} = useContext(
    ColorsContext,
  )

  // wheel layout
  // TODO: fade in after layout
  useEffect(() => {
    const elems = [...document.querySelectorAll(circleSelector)]
    const increase = (Math.PI * 2) / elems.length

    let angleOffset = 0
    elems.forEach(el => {
      const x =
        100 * Math.cos(angleOffset) +
        (window.innerWidth - WHEEL_CIRCLE_SIZE) / 2
      const y = 100 * Math.sin(angleOffset) + 200
      el.style.position = 'absolute'
      el.style.left = x + 'px'
      el.style.top = y + 'px'
      angleOffset += increase
    })
  }, [colors])

  return {colors, setBaseColor, setColorAmount, setColorRotation}
}
