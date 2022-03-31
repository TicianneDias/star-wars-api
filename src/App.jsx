import React from 'react'
import Characters from './Characters/Characters'
import Global from './styles/global'
import NavBar from './NavBar/NavBar'

const App = () => {
  return (
    <div>
      <h1>Star Wars</h1>
      <Global/>
      <NavBar/>
      <Characters/>
    </div>
  )
}

export default App