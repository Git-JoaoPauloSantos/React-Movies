import React from 'react'
import './Movie.css'
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const moviesURL = import.meta.env.VITE_API_MOVIE
const apiKey = import.meta.env.VITE_API_KEY
const imageUrl = import.meta.env.VITE_IMG

const Movie = () => {
  
  const { id } = useParams()
  const {data: movie} = useFetch(`${moviesURL}${id}?${apiKey}&language=pt-BR`)

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })
  }

  return (
    <div className='movie-page'>
      {movie &&
        <React.Fragment>
          <img src={imageUrl + movie.poster_path} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p><FaStar /> {movie.vote_average}</p>
          <p className='tagline'>{movie.tagline}</p>
          <div className="info">
            <h3><BsWallet2 /> Orçamento:</h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className="info">
            <h3><BsGraphUp /> Receita:</h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="info">
            <h3><BsHourglassSplit /> Duração:</h3>
            <p>{movie.runtime} minutos</p>
          </div>
          <div className="info description">
            <h3><BsFillFileEarmarkTextFill /> Descriçãp:</h3>
            <p>{movie.overview}</p>
          </div>
        </React.Fragment>
      }
    </div>
  )
}

export default Movie