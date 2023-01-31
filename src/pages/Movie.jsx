import React from 'react'
import './Movie.css'
import '../components/FeaturedMovie.css'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { FaPlay } from 'react-icons/fa';
import Functions from '../Functions'
import LoadingPage from '../components/LoadingPage'

const moviesURL = import.meta.env.VITE_API_MOVIE
const tvURL = import.meta.env.VITE_API_TV
const apiKey = import.meta.env.VITE_API_KEY
const searchGoogleURL = `https://www.google.com/search?q=assistir `


const Movie = () => {
  const { id } = useParams()
  const { type } = useParams()
  const { data: movie } = useFetch(`${type == 'tv' ? tvURL : moviesURL}${id}?${apiKey}&language=pt-BR`)
  console.log(movie)

  return (
    <React.Fragment>
      {movie && (
        <section className='featured'
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
          }}>
          <div className="featured-gradient-vertical">
            <div className="featured-gradient-horizontal">
              <div className="featured-infos-movie">
                <div className='featured-name'><h1>{Functions.limitDescription(movie.name || movie.title, 38)}</h1></div>
                <div className="average">
                  <p>{Functions.toInt(movie.vote_average)}% Relevante
                    <span>{Functions.toFullYear(movie.first_air_date || movie.release_date)}</span>
                  </p>
                </div>
                <div className="featured-description"><p>{Functions.limitDescription(movie.overview, 200)}</p></div>
                <div className="buttons">
                  <a
                    href={`${searchGoogleURL}${movie.name || movie.title}&sourceid=chrome&ie=UTF-8`}
                    target="_blank"
                    className='btn-watch'>
                    <FaPlay /> Assistir
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {!movie && <LoadingPage />}
    </React.Fragment>
  )
}

export default Movie