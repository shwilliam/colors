import React, {useState} from 'react'
import {useColors} from './hooks'
import {Circle} from './components'

export const App = () => {
  const {colors, setBaseColor, setColorAmount, setColorRotation} = useColors(
    '.wheel__circle',
  )
  const [colorInput, setColorInput] = useState('#f0f')
  const [colorAmountInput, setColorAmountInput] = useState(8)
  const [colorRotationInput, setColorRotationInput] = useState(100)

  const handleColorSubmit = e => {
    e.preventDefault()
    setBaseColor(colorInput)
    setColorAmount(colorAmountInput)
    setColorRotation(colorRotationInput)
  }

  const handleColorInputChange = e => setColorInput(e.target.value)
  const handleColorAmountInputChange = e =>
    setColorAmountInput(Number(e.target.value))
  const handleColorRotationInputChange = e =>
    setColorRotationInput(Number(e.target.value))

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

        <label>
          Color amount:
          <input
            type="number"
            min="2"
            value={colorAmountInput}
            onChange={handleColorAmountInputChange}
            placeholder="8"
          />
        </label>

        <label>
          Rotation:
          <input
            type="number"
            min="1"
            value={colorRotationInput}
            onChange={handleColorRotationInputChange}
            placeholder="100"
          />
        </label>

        <button type="submit">Update</button>
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
