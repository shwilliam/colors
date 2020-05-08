import React, {useState} from 'react'
import {SliderPicker} from 'react-color'

export const ColorPicker = ({color, onChange, className}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => setIsOpen(s => !s)

  const handleChange = color => onChange(color.hex)

  return (
    <>
      <button
        id="color-picker-toggle"
        onClick={toggleIsOpen}
        className={`button options__color-picker ${className}`}
        style={{backgroundColor: color}}
        aria-hidden
      />

      {isOpen && (
        <div className="color-picker__container">
          <SliderPicker color={color} onChange={handleChange} />
        </div>
      )}
    </>
  )
}
