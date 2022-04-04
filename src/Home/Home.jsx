import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Container, ImageBackground } from './styles'
import Typewriter from 'typewriter-effect'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Container>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 40,
          }}
          onInit={(typewriter) => {
            typewriter
            .typeString("Welcome to Star Wars World!")
            .pauseFor(3000)
            .deleteChars(16)
            .typeString("the Dark Side!")
            .pauseFor(3000)
            .deleteAll()
            .typeString("May the Force Be With You!")
            .pauseFor(5000)
            .deleteAll()
            .typeString("")
            .pauseFor(2000)
            .start()
          }}
        />
        </Container>
        <ImageBackground/>
    </div>
  )
}

export default Home