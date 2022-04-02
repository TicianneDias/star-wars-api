import React, {useEffect, useState} from 'react'
import NavBar from '../NavBar/NavBar'
import axios from 'axios'
import { Container, List, Movie, IMG } from './styles'
import IMG1 from './1.jpg'
import IMG2 from './2.jpg'
import IMG3 from './3.jpg'
import IMG4 from './4.jpg'
import IMG5 from './5.jpg'
import IMG6 from './6.jpg'


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
              <Movie key={movie.episode_id}>
                <IMG src={movie.episode_id === 1 ? IMG1 : false ||
                          movie.episode_id === 2 ? IMG2 : false ||
                          movie.episode_id === 3 ? IMG3 : false ||
                          movie.episode_id === 4 ? IMG4 : false ||
                          movie.episode_id === 5 ? IMG5 : false ||
                          movie.episode_id === 6 ? IMG6 : false
                        }/>
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