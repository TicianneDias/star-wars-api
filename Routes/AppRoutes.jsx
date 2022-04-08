import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Characters from '../src/Characters/Characters'
import Home from '../src/Home/Home'
import Movies from '../src/Movies/Movies'
import Game from '../src/Game/Game'

const AppRoutes = () => {
  return (
    <>
    
        <Routes>
            <Route element = {<Home/>} path="/" />
            <Route element = {<Characters/>} path="/Characters" />
            <Route element = {<Movies/> } path="/Movies" />
            <Route element = {<Game/>} path="/Game" />
        </Routes>
    </>
  )
}

export default AppRoutes