import React from 'react'
import {ColorWheel, OptionsForm} from './components'

export const App = () => {
  return (
    <div className="site">
      <header className="site__header">colors</header>

      <main className="site__main">
        <ColorWheel />
        <OptionsForm />
      </main>
    </div>
  )
}
