import React from 'react'
import {useColors} from '../hooks'
import {Color} from './index'

export const ColorWheel = () => {
  // TODO: use ref
  const {colors} = useColors('.wheel__circle')

  return (
    <div className="wheel__container">
      <ul className="wheel">
        {colors.map((color, i) => (
          <li key={i} className="wheel__circle">
            <Color color={color} />
          </li>
        ))}
      </ul>
    </div>
  )
}
