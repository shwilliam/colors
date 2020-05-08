import React, {useReducer, useMemo} from 'react'
import color from 'color'
import {ColorsContext} from './context'

// TODO: pass params as obj
// TODO: handle error parsing color
const generateColors = (hex, amount, rotation, lightness) =>
  Array.from({length: amount}, (_, i) =>
    color(hex)
      .rotate(((i + i) / (amount + 1)) * rotation)
      .lighten(lightness > 0.5 ? (lightness - 0.5) / 0.5 : 0)
      .darken(lightness < 0.5 ? 1 - lightness / 0.5 : 0)
      .hex(),
  )

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
    default:
      return state
  }
}

export const ColorsContextProvider = ({children}) => {
  const [wheelOpts, dispatch] = useReducer(stateReducer, {
    baseColor: '#ccccff',
    count: 8,
    rotation: 100,
    lightness: 0.37,
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

  const colors = useMemo(
    () =>
      generateColors(
        wheelOpts.baseColor,
        wheelOpts.count,
        wheelOpts.rotation,
        wheelOpts.lightness,
      ),
    [wheelOpts],
  )

  return (
    <ColorsContext.Provider
      value={{
        colors,
        setBaseColor,
        setColorAmount,
        setColorRotation,
        setColorLightness,
      }}
    >
      {children}
    </ColorsContext.Provider>
  )
}
