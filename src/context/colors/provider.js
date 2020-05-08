import React, {useReducer, useMemo} from 'react'
import color from 'color'
import {ColorsContext} from './context'

const generateColors = (hex, amount, rotation) =>
  Array.from({length: amount}, (_, i) =>
    color(hex)
      .rotate(((i + i) / (amount + 1)) * rotation)
      .string(),
  )

const stateReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BASE_COLOR':
      return {...state, baseColor: action.payload.color}
    case 'SET_COLOR_COUNT':
      return {...state, count: action.payload.count}
    case 'SET_COLOR_ROTATION':
      return {...state, rotation: action.payload.rotation}
    default:
      return state
  }
}

export const ColorsContextProvider = ({children}) => {
  const [wheelOpts, dispatch] = useReducer(stateReducer, {
    baseColor: '#f0f',
    count: 8,
    rotation: 100,
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

  const colors = useMemo(
    () =>
      generateColors(wheelOpts.baseColor, wheelOpts.count, wheelOpts.rotation),
    [wheelOpts],
  )

  return (
    <ColorsContext.Provider
      value={{
        colors,
        setBaseColor,
        setColorAmount,
        setColorRotation,
      }}
    >
      {children}
    </ColorsContext.Provider>
  )
}
