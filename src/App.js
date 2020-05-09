import React, {useLayoutEffect, useRef} from 'react'
import VisuallyHidden from '@reach/visually-hidden'
import {Color, ColorPicker, Slider} from './components'
import {useColors} from './hooks'
import {preventDefault} from './utils'

export const App = () => {
  const colorInputRef = useRef()
  const {
    colors,
    baseColor,
    count,
    rotation,
    lightness,
    saturation,
    setBaseColor,
    setColorAmount,
    setColorRotation,
    setColorLightness,
    setColorSaturation,
  } = useColors('.wheel__circle')

  const handleColorInputChange = e => setBaseColor(e.target.value)

  useLayoutEffect(() => {
    colorInputRef?.current.focus()
  }, [])

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
              {/* TODO: color picker */}
              <ColorPicker
                color={baseColor}
                onChange={setBaseColor}
                className="input-icon"
              />
              <input
                ref={colorInputRef}
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
              <span className="options__label">Saturation</span>
              <span className="options__label-value">{saturation}</span>
            </div>
            <Slider
              min={0}
              max={1}
              step={0.05}
              value={saturation}
              onChange={setColorSaturation}
            />
          </label>

          <label className="options__input-container">
            <div className="options__label-container">
              <span className="options__label">Rotation</span>
              <span className="options__label-value">{rotation * 2}</span>
            </div>
            <Slider
              min={0.5}
              max={180}
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
