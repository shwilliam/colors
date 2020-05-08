import React from 'react'
import {
  SliderHandle,
  SliderInput,
  SliderTrack,
  SliderTrackHighlight,
} from '@reach/slider'
import '@reach/slider/styles.css'

export const Slider = ({
  min = 1,
  max,
  step = 1,
  className = 'slider',
  ...props
}) => (
  <SliderInput min={min} max={max} step={step} className={className} {...props}>
    <SliderTrack className={`${className}__track`}>
      <SliderTrackHighlight className={`${className}__track-highlight`} />
      <SliderHandle className={`${className}__handle`} />
    </SliderTrack>
  </SliderInput>
)
