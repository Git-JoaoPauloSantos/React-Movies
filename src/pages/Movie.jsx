import React from 'react'
import './Movie.css'
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { FaPlay } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';

const moviesURL = import.meta.env.VITE_API_MOVIE
const tvURL = import.meta.env.VITE_API_TV
const apiKey = import.meta.env.VITE_API_KEY
const imageUrl = import.meta.env.VITE_IMG

const Movie = () => {

  const { id } = useParams()
  const { type } = useParams()
  const { data: movie } = useFetch(`${type == 'tv' ? tvURL : moviesURL}${id}?${apiKey}&language=pt-BR`)
  console.log(movie)

  const toInt = (number) => {
    let numFixed = number.toFixed(1)
    let numInteger = numFixed * 10
    return numInteger
  }

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
              <div className="featured-infos">
                <div className='featured-name'><h1>{movie.name || movie.title}</h1></div>
                <div className="average"><p>{toInt(movie.vote_average)}% Relevante</p></div>
                <div className="featured-description"><p>{movie.overview}</p></div>
                <div className="buttons">
                  <a href="#" className='btn-watch'> <FaPlay /> Assistir </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </React.Fragment>
  )
}

export default Movie