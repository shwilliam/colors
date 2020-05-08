import React from 'react'
import VisuallyHidden from '@reach/visually-hidden'
import {Color, ColorPreview, Slider} from './components'
import {useColors} from './hooks'
import {preventDefault} from './utils'

export const App = () => {
  const {
    colors,
    setBaseColor,
    baseColor,
    count,
    rotation,
    lightness,
    setColorAmount,
    setColorRotation,
    setColorLightness,
  } = useColors('.wheel__circle')

  const handleColorInputChange = e => setBaseColor(e.target.value)

  return (
    <div className="site">
      <header className="site__header">colors</header>

      <main className="site__main">
        <div className="wheel__container">
          <ul className="wheel">
            {colors.map((color, i) => (
              <li key={i} className="wheel__circle">
                <Color color={color} />
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={preventDefault} className="options__form">
          <label className="options__input-container options__input-container--inline">
            <VisuallyHidden>Base color</VisuallyHidden>

            <div className="input-container">
              <ColorPreview color={baseColor} className="input-icon" />
              <input
                className="input input--icon"
                type="text"
                value={baseColor}
                onChange={handleColorInputChange}
                placeholder="#663399"
                required
              />
            </div>
          </label>

          <label className="options__input-container">
            <div className="options__label-container">
              <span className="options__label">Colors</span>
              <span className="options__label-value">{count}</span>
            </div>
            <Slider min={2} max={20} value={count} onChange={setColorAmount} />
          </label>

          <label className="options__input-container">
            <div className="options__label-container">
              <span className="options__label">Rotation</span>
              <span className="options__label-value">{rotation}</span>
            </div>
            <Slider
              min={1}
              max={180}
              step={0.25}
              value={rotation}
              onChange={setColorRotation}
            />
          </label>

          <label className="options__input-container">
            <div className="options__label-container">
              <span className="options__label">Lightness</span>
              <span className="options__label-value">{lightness}</span>
            </div>
            <Slider
              step={0.01}
              min={0.1}
              max={1}
              value={lightness}
              onChange={setColorLightness}
              placeholder="0.6"
            />
          </label>
        </form>
      </main>
    </div>
  )
}
