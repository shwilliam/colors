import {useContext, useLayoutEffect} from 'react'
import {isEmpty} from 'ramda'
import {ColorsContext} from '../context'
import {useWindowDimensions} from './index'

// TODO: refactor to measure dom el
const WHEEL_CIRCLE_SIZE = 60

export const useColors = circleSelector => {
  const {
    colors,
    setBaseColor,
    baseColor,
    count,
    rotation,
    lightness,
    saturation,
    setColorAmount,
    setColorRotation,
    setColorLightness,
    setColorSaturation,
  } = useContext(ColorsContext)

  // wheel layout
  // TODO: fade in after layout
  useLayoutEffect(() => {
    const elems = [...document.querySelectorAll(circleSelector)]

    if (isEmpty(elems)) return

    const increase = (Math.PI * 2) / elems.length

    let angleOffset = -Math.PI / 2
    elems.forEach(el => {
      const x = 100 * Math.cos(angleOffset)
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
    baseColor,
    count,
    rotation,
    lightness,
    saturation,
    setColorAmount,
    setColorRotation,
    setColorLightness,
    setColorSaturation,
  }
}
