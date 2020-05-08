import {useContext, useLayoutEffect} from 'react'
import {ColorsContext} from '../context'
import {useWindowDimensions} from './index'

// TODO: refactor to measure dom el
const WHEEL_CIRCLE_SIZE = 60

export const useColors = circleSelector => {
  const {width} = useWindowDimensions()
  const {
    colors,
    setBaseColor,
    baseColor,
    count,
    rotation,
    lightness,
    setColorAmount,
    setColorRotation,
    setColorLightness,
  } = useContext(ColorsContext)

  // wheel layout
  // TODO: fade in after layout
  useLayoutEffect(() => {
    const elems = [...document.querySelectorAll(circleSelector)]

    if (!elems.length) return

    const increase = (Math.PI * 2) / elems.length

    let angleOffset = -45
    elems.forEach(el => {
      const x =
        100 * Math.cos(angleOffset) +
        (width - (width > 800 ? 500 : 0) - WHEEL_CIRCLE_SIZE) / 2
      const y = 100 * Math.sin(angleOffset) - 50
      el.style.position = 'absolute'
      el.style.left = x + 'px'
      el.style.top = y + 'px'
      angleOffset += increase
    })
  }, [colors, width])

  return {
    colors,
    setBaseColor,
    baseColor,
    count,
    rotation,
    lightness,
    setColorAmount,
    setColorRotation,
    setColorLightness,
  }
}
