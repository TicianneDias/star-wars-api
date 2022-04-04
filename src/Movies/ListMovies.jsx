import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Container, List, Movie, IMG} from './styles'
import IMG1 from './image/1.jpg'
import IMG2 from './image/2.jpg'
import IMG3 from './image/3.jpg'
import IMG4 from './image/4.jpg'
import IMG5 from './image/5.jpg'
import IMG6 from './image/6.jpg'
import IMG7 from './image/7.jpg'
import IMG8 from './image/8.jpg'
import IMG9 from './image/9.jpeg'
import IMG10 from './image/10.jpg'
import IMG11 from './image/11.jpg'
import IMG12 from './image/12.jpg'
import IMG13 from './image/13.jpg'

const ListMovies = () => {
  const [movies, setMovies] = useState([])
  const otherMovies = [{
    id: 1,
    image: IMG7,
    episode: 7, 
    title: 'The Force Awakens',
    director: 'J. J. Abrams',
    dateMovie: '2015-12-17',
    sinopse: 'Luke Skywalker has vanished. In his absence, the sinister FIRST ORDER has risen from the ashes of the Empire and will not rest until Skywalker, the last Jedi, has been destroyed. With the support of the REPUBLIC, General Leia Organa leads a brave RESISTANCE. She is desperate to find her brother Luke and gain his help in restoring peace and justice to the galaxy. Leia has sent her most daring pilot on a secret mission to Jakku, where an old ally has discovered a clue to Luke’s whereabouts ….'
  },
    {
    id: 2,
    image: IMG8,
    episode: 8, 
    title: 'The Last Jedi',
    director: 'Rian Johnson',
    dateMovie: '2017-12-14',
    sinopse: 'The FIRST ORDER reigns. Having decimated the peaceful Republic, Supreme Leader Snoke now deploys his merciless legions to seize military control of the galaxy. Only General Leia Organa’s band of RESISTANCE fighters stand against the rising tyranny, certain that Jedi Master Luke Skywalker will return and restore a spark of hope to the fight. But the Resistance has been exposed. As the First Order speeds toward the rebel base, the brave heroes mount a desperate escape....',
  },
  {
    id: 3,
    image: IMG9,
    episode: 9, 
    title: 'The Rise of Skywalker',
    director: 'J. J. Abrams',
    dateMovie: '2019-12-19',
    sinopse: 'The dead speak! The galaxy has heard a mysterious broadcast, a threat of REVENGE in the sinister voice of the late EMPEROR PALPATINE. GENERAL LEIA ORGANA dispatches secret agents to gather intelligence, while REY, the last hope of the Jedi, trains for battle against the diabolical FIRST ORDER. Meanwhile, Supreme Leader KYLO REN rages in search of the phantom Emperor, determined to destroy any threat to his power….',
    
  },
  {
    id: 4,
    image: IMG13,
    title: 'Rogue One: A Star Wars Story',
    director: 'Gareth Edwards',
    dateMovie: '2016-12-15',
    sinopse: '[not official] The Jedi are all but extinct, the Republic has fallen and in their wake, the Galactic Empire has engulfed the far reaches of the galaxy in fear. Persecuted members of the Old Republic have been thrust into hiding. Only members of the REBEL ALLIANCE dare take a stand against the ruthless Imperial forces. Deep in the Outer Rim territories, the dastardly Director Krennic has discovered the location of a long lost friend; one capable of completing the Empire’s most powerful weapon yet....',
    
  },
  {
    id: 5,
    image: IMG10,
    title: 'Solo: A Star Wars Story',
    director: 'Ron Howard',
    dateMovie: '2018-05-24',
    sinopse: 'It is a lawless time. CRIME SYNDICATES compete for resources - food, medicine, and HYPERFUEL. On the shipbuilding planet of CORELLIA, the foul LADY PROXIMA forces runaways into a life of crime in exchange for shelter and protection. On these mean streets, a young man fights for survival, but yearns to fly among the stars....',
    
  },
  {
    id: 6,
    image: IMG11,
    title: 'The Mandalorian (TV Series)',
    director: 'Jon Favreau',
    dateMovie: '2019-11-12',
    sinopse: 'The Mandalorian doesn’t have a traditional opening crawl.',
    
  },
  {
    id: 7,
    image: IMG12,
    title: 'The Book of Boba Fett (TV Series)',
    director: 'Jon Favreau',
    dateMovie: '2021-12-29',
    sinopse: 'The Book of Boba Fett doesn’t have a traditional opening crawl.',
    
  }
]

  useEffect(() => {
    axios.get('https://swapi.dev/api/films/')
         .then(res => setMovies(res.data.results))
         .catch(error => console.log(error), [])
  })

    return (
    <>
      <Container>
        <List>
          
    {movies.map((movie) => { 
      return(
        <>
        
        <Movie key={movie.episode_id}>
          <IMG src={movie.episode_id === 1 ? IMG1 : false ||
            movie.episode_id === 2 ? IMG2 : false ||
              movie.episode_id === 3 ? IMG3 : false ||
                movie.episode_id === 4 ? IMG4 : false ||
                  movie.episode_id === 5 ? IMG5 : false ||
                    movie.episode_id === 6 ? IMG6 : false} alt={`Poster Movie of ${movie.title}`}/>
          <h1>{movie.title}</h1>
          <p>Director: {movie.director}</p>
          <p>Episode: {movie.episode_id}</p>
          <p>Release Date: {movie.release_date}</p>
          <br />
          <p>{movie.opening_crawl}</p>
        </Movie></>
            
            )
          })}
        {otherMovies.map(({title, image, sinopse, director, id, dateMovie, episode}) => { 
      return(
        <>
        
        <Movie key={id}>
          <IMG src={image} alt={`Poster Movie of ${title}`}/>
          <h1>{title}</h1>
          <p>Director: {director}</p>
          <p>Episode: {episode}</p>
          <p>Release Date: {dateMovie}</p>
          <br />
          <p>{sinopse}</p>
        </Movie>
        </>
            
            )
          })}
          
          </List>
          </Container>
          
    </>

      
  )
    }
export default ListMovies