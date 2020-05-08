import React from 'react'

export const ColorPreview = ({color, className = ''}) => (
  <span
    className={`options__color-preview ${className}`}
    style={{backgroundColor: color}}
  />
)

