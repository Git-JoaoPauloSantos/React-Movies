import React, { useEffect, useState } from 'react'
import './Movie.css'
import '../components/FeaturedMovie.css'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { FaPlay } from 'react-icons/fa';
import Functions from '../Functions'

const moviesURL = import.meta.env.VITE_API_MOVIE
const tvURL = import.meta.env.VITE_API_TV
const apiKey = import.meta.env.VITE_API_KEY

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
              <div className="featured-infos-movie">
                <div className='featured-name'><h1>{Functions.limitDescription(movie.name || movie.title, 38)}</h1></div>
                <div className="average"><p>{toInt(movie.vote_average)}% Relevante</p></div>
                <div className="featured-description"><p>{Functions.limitDescription(movie.overview, 200)}</p></div>
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