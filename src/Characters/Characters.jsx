import axios from 'axios'
import React, {useEffect, useState} from 'react'
import NavBar from '../NavBar/NavBar'
import {CardList, Container, Card, Input, InputDiv} from './card'


const Characters = () => {
    const [search, setSearch] = useState('')
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        axios.get('https://akabab.github.io/starwars-api/api/all.json')
        .then(res => setCharacters(res.data))
        .catch(error => console.log(error), [])
    })

    const handleChange = e => {
        setSearch(e.target.value)
      }

    const filteredCharacters = characters.filter(characters => characters.name.toLowerCase().includes(search.toLowerCase()))
  return (
                <>
                <NavBar/>
                <form>
                    <InputDiv>
                        <Input type="text" onChange={handleChange} placeholder='Search character..'/>
                    </InputDiv>
                </form>
        <Container>
              <CardList>

                  {filteredCharacters.map(characters => {
                      return (
                          <Card key={characters.id}>
                              <img src={characters.image} />
                              <h3>{characters.name}</h3>
                              <p>Masters: {characters.masters}</p>
                              <p>Apprentices: {characters.apprentices}</p>
                              <p>Born: {characters.born}</p>
                              <p>Born Location: {characters.bornLocation}</p>
                              <p>Died: {characters.died}</p>
                              <p>Died Location: {characters.diedLocation}</p>
                          </Card>

                      )
                  })}
              </CardList>
          </Container></>

  )
}

export default Characters