import React, {forwardRef} from 'react'

export const Circle = forwardRef((props, ref) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" ref={ref} {...props} />
  </svg>
))
