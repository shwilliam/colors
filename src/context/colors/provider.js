import React, {useReducer, useMemo} from 'react'
import color from 'color'
import {ColorsContext} from './context'

// TODO: pass params as obj
const generateColors = (hex, amount, rotation, lightness, saturation) =>
  Array.from({length: amount}, (_, i) => {
    try {
      return color(hex)
        .rotate(((i + i) / (amount + 1)) * rotation)
        .saturate(saturation > 0.5 ? (saturation - 0.5) / 0.5 : 0)
        .desaturate(saturation < 0.5 ? 1 - saturation / 0.5 : 0)
        .lighten(lightness > 0.5 ? (lightness - 0.5) / 0.5 : 0)
        .darken(lightness < 0.5 ? 1 - lightness / 0.5 : 0)
        .hex()
    } catch (e) {
      return '#ccc'
    }
  })

const stateReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BASE_COLOR':
      return {...state, baseColor: action.payload.color}
    case 'SET_COLOR_COUNT':
      return {...state, count: action.payload.count}
    case 'SET_COLOR_ROTATION':
      return {...state, rotation: action.payload.rotation}
    case 'SET_COLOR_LIGHTNESS':
      return {...state, lightness: action.payload.lightness}
    case 'SET_COLOR_SATURATION':
      return {...state, saturation: action.payload.saturation}
    default:
      return state
  }
}

export const ColorsContextProvider = ({children}) => {
  const [wheelOpts, dispatch] = useReducer(stateReducer, {
    baseColor: '#22f',
    count: 8,
    rotation: 100,
    lightness: 0.55,
    saturation: 0.45,
  })

  const setBaseColor = color =>
    dispatch({
      type: 'SET_BASE_COLOR',
      payload: {
        color,
      },
    })

  const setColorAmount = count =>
    dispatch({
      type: 'SET_COLOR_COUNT',
      payload: {
        count,
      },
    })

  const setColorRotation = rotation =>
    dispatch({
      type: 'SET_COLOR_ROTATION',
      payload: {
        rotation,
      },
    })

  const setColorLightness = lightness =>
    dispatch({
      type: 'SET_COLOR_LIGHTNESS',
      payload: {
        lightness,
      },
    })

  const setColorSaturation = saturation =>
    dispatch({
      type: 'SET_COLOR_SATURATION',
      payload: {
        saturation,
      },
    })

  const colors = useMemo(
    () =>
      generateColors(
        wheelOpts.baseColor,
        wheelOpts.count,
        wheelOpts.rotation,
        wheelOpts.lightness,
        wheelOpts.saturation,
      ),
    [wheelOpts],
  )

  return (
    <ColorsContext.Provider
      value={{
        colors,
        ...wheelOpts,
        setBaseColor,
        setColorAmount,
        setColorRotation,
        setColorLightness,
        setColorSaturation,
      }}
    >
      {children}
    </ColorsContext.Provider>
  )
}
