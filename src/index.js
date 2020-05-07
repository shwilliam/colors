import React from 'react'
import {render} from 'react-dom'
import {App} from './App'
import {ColorsContextProvider} from './context'

import './css'

render(
  <React.StrictMode>
    <ColorsContextProvider>
      <App />
    </ColorsContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
