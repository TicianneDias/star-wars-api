import React, {useEffect, useState} from 'react'
import NavBar from '../NavBar/NavBar'
import axios from 'axios'
import { Container, List, Movie } from './styles'

const Movies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/films/')
         .then(res => setMovies(res.data.results))
         .catch(error => console.log(error), [])
  })

    return (
    <>
      <NavBar/>
      <Container>
        <List>
    {movies.map((movie) => { 
      return(
              <Movie key={movie.id}>
                <h1>{movie.title}</h1>
                <p>Director: {movie.director}</p>
                <p>Episode: {movie.episode_id}</p>
                <p>Release Date: {movie.release_date}</p>
                <br/>
                <p>{movie.opening_crawl}</p>
              </Movie>
            
            )
          })}
          </List>
          </Container>
    </>

      
  )
    }
export default Movies