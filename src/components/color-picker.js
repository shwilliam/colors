import React, {useState} from 'react'
import {not, prop} from 'ramda'
import {SliderPicker} from 'react-color'

export const ColorPicker = ({color, onChange, className}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => setIsOpen(not)

  const handleChange = color => onChange(prop('hex', color))

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
