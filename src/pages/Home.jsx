import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import { useFetch } from "../hooks/useFetch"

import './MoviesGrid.css'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
  const [topMovies, setTopMovies] = useState([])

  const {data: movies} = useFetch(`${moviesURL}top_rated?${apiKey}&language=pt-BR`)

  useEffect(() => {
    {movies && setTopMovies(movies.results)}

  }, [movies])

  return (
    <div className="container">
      <h2 className="title">Melhores filmes</h2>
      <div className="movies-container">
        {!topMovies && <p>Carregando...</p>}
        {topMovies && topMovies.map((movie) => (<MovieCard key={movie.id} movie={movie} />))}
      </div>
    </div>
  )
}

export default Home