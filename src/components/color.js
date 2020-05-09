import React from 'react'
import Alert from '@reach/alert'
import VisuallyHidden from '@reach/visually-hidden'
import {useClipboard} from '../hooks'
import {noop} from '../utils'
import {Circle, Tooltip} from './index'

export const Color = ({color}) => {
  const [isCopied, copy] = useClipboard(color, 4000)
  // 4s is android's default duration for toasts

  return (
    <div className="color__container">
      <button
        onClick={isCopied ? noop : copy}
        className="button button--floating"
      >
        <Tooltip label={color}>
          <Circle fill={color} />
        </Tooltip>
        {isCopied && (
          <p className="color__copied-label" style={{color}} aria-hidden>
            copied
          </p>
        )}
      </button>
      {isCopied && (
        <VisuallyHidden>
          <Alert>{color} copied</Alert>
        </VisuallyHidden>
      )}
    </div>
  )
}
