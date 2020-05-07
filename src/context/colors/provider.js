import React, {useReducer} from 'react'
import color from 'color'
import {ColorsContext} from './context'

const COLOR_AMOUNT = 8
const COLOR_ROTATION = 360

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
    default:
      return state
  }
}

export const ColorsContextProvider = ({children}) => {
  const [wheelOpts, dispatch] = useReducer(stateReducer, {
    baseColor: '#0f0',
    amount: 8,
  })

  const setBaseColor = color =>
    dispatch({
      type: 'SET_BASE_COLOR',
      payload: {
        color,
      },
    })

  return (
    <ColorsContext.Provider
      value={{
        colors: generateColors(
          wheelOpts.baseColor,
          COLOR_AMOUNT,
          COLOR_ROTATION,
        ),
        setBaseColor,
      }}
    >
      {children}
    </ColorsContext.Provider>
  )
}
