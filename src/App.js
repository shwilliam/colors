import React, {useState} from 'react'
import {useColors} from './hooks'
import {Circle} from './components'

export const App = () => {
  const {colors, setBaseColor} = useColors('.wheel__circle')
  const [colorInput, setColorInput] = useState('')

  const handleColorSubmit = e => {
    e.preventDefault()
    setBaseColor(colorInput)
    setColorInput('')
  }

  const handleColorInputChange = e => setColorInput(e.target.value)

  return (
    <>
      <form onSubmit={handleColorSubmit}>
        <label>
          Base color:
          <input
            type="text"
            value={colorInput}
            onChange={handleColorInputChange}
            placeholder="#663399"
          />
        </label>
      </form>

      <ul className="wheel">
        {colors.map((color, i) => (
          <li key={i} className="wheel__circle">
            <Circle fill={color} />
          </li>
        ))}
      </ul>
    </>
  )
}
