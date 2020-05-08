import React, {useState} from 'react'
import VisuallyHidden from '@reach/visually-hidden'
import {Color, ColorPreview, Slider} from './components'
import {useColors} from './hooks'

export const App = () => {
  const {
    colors,
    setBaseColor,
    setColorAmount,
    setColorRotation,
    setColorLightness,
  } = useColors('.wheel__circle')
  const [colorInput, setColorInput] = useState('#ccccff')
  const [colorAmountInput, setColorAmountInput] = useState(8)
  const [colorRotationInput, setColorRotationInput] = useState(100)
  const [colorLightnessInput, setColorLightnessInput] = useState(0.37)

  const handleColorSubmit = e => {
    e.preventDefault()
    setBaseColor(colorInput)
    setColorAmount(colorAmountInput)
    setColorRotation(colorRotationInput)
    setColorLightness(colorLightnessInput)
  }

  const handleColorInputChange = e => setColorInput(e.target.value)

  return (
    <div className="site__container">
      <div className="wheel__container">
        <ul className="wheel">
          {colors.map((color, i) => (
            <li key={i} className="wheel__circle">
              <Color color={color} />
            </li>
          ))}
        </ul>
      </div>

      <form onSubmit={handleColorSubmit} className="options__form">
        <label className="options__input-container options__input-container--inline">
          <VisuallyHidden>Base color</VisuallyHidden>

          <div className="input-container">
            <ColorPreview color={colorInput} className="input-icon" />
            <input
              className="input input--icon"
              type="text"
              value={colorInput}
              onChange={handleColorInputChange}
              placeholder="#663399"
              required
            />
          </div>
        </label>

        <label className="options__input-container">
          <div className="options__label-container">
            <span className="options__label">Colors</span>
            <span className="options__label-value">{colorAmountInput}</span>
          </div>
          <Slider
            min={2}
            max={20}
            value={colorAmountInput}
            onChange={setColorAmountInput}
          />
        </label>

        <label className="options__input-container">
          <div className="options__label-container">
            <span className="options__label">Rotation</span>
            <span className="options__label-value">{colorRotationInput}</span>
          </div>
          <Slider
            min={1}
            max={180}
            step={0.25}
            value={colorRotationInput}
            onChange={setColorRotationInput}
          />
        </label>

        <label className="options__input-container">
          <div className="options__label-container">
            <span className="options__label">Lightness</span>
            <span className="options__label-value">{colorLightnessInput}</span>
          </div>
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
    </div>
  )
}
