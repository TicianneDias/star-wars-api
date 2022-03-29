import React from 'react'
import Characters from './Characters/Characters'
import Global from './styles/global'

const App = () => {
  return (
    <div>
      <h1>Star Wars</h1>
      <Global/>
      <Characters/>
    </div>
  )
}

export default App