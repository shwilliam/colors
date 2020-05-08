import React, {useState} from 'react'
import {useColors} from './hooks'
import {Circle, Slider} from './components'

export const App = () => {
  const {
    colors,
    setBaseColor,
    setColorAmount,
    setColorRotation,
    setColorLightness,
  } = useColors('.wheel__circle')
  const [colorInput, setColorInput] = useState('#f0f')
  const [colorAmountInput, setColorAmountInput] = useState(8)
  const [colorRotationInput, setColorRotationInput] = useState(100)
  const [colorLightnessInput, setColorLightnessInput] = useState(0.6)

  const handleColorSubmit = e => {
    e.preventDefault()
    setBaseColor(colorInput)
    setColorAmount(colorAmountInput)
    setColorRotation(colorRotationInput)
    setColorLightness(colorLightnessInput)
  }

  const handleColorInputChange = e => setColorInput(e.target.value)

  return (
    <>
      <form onSubmit={handleColorSubmit} className="options__form">
        <label className="options__input-container">
          <span className="options__label">Base color:</span>
          <input
            className="input"
            type="text"
            value={colorInput}
            onChange={handleColorInputChange}
            placeholder="#663399"
            required
          />
        </label>

        <label className="options__input-container">
          <span className="options__label">Colors:</span>
          <Slider
            min={2}
            max={20}
            value={colorAmountInput}
            onChange={setColorAmountInput}
          />
        </label>

        <label className="options__input-container">
          <span className="options__label">Rotation:</span>
          <Slider
            min={1}
            max={180}
            step={0.25}
            value={colorRotationInput}
            onChange={setColorRotationInput}
          />
        </label>

        <label className="options__input-container">
          <span className="options__label">Lightness:</span>
          <Slider
            step={0.01}
            min={0.1}
            max={1}
            value={colorLightnessInput}
            onChange={setColorLightnessInput}
            placeholder="0.6"
          />
        </label>

        <button type="submit" className="button options__submit">
          Update
        </button>
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
