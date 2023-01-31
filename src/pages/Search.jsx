import '../pages/Search.css'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { FaPlay } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';
import { RiArrowDownSLine } from 'react-icons/ri';
import Functions from '../Functions';
import LoadingPage from '../components/LoadingPage';

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY
const imageUrl = import.meta.env.VITE_IMG

const Search = () => {
  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([])
  const query = searchParams.get("q")

  const { data } = useFetch(`${searchURL}?${apiKey}&query=${query}&language=pt-BR`)

  useEffect(() => {
    { data && setMovies(data.results) }
  }, [data])

  return (
    <div className='grid-movies-container'>
      <h2>Resultados para: <span>{query}</span></h2>
      <div className="grid-movies">
        {movies.length > 0 && movies.map((movie) => (
          <div key={movie.id} className="movie">
            <Link to={`/movie/${movie.id}`}><img src={imageUrl + movie.backdrop_path} alt={movie.name || movie.title} /></Link>
            <div className="content">
              <div className='btns'>
                <div className="btn-group">
                  <button className='btn-play'><FaPlay /></button>
                  <Link to={`/movie/${movie.id}`}><button><HiPlus /></button></Link>
                  <button><AiOutlineLike /></button>
                  <button><AiOutlineDislike /></button>
                </div>
                <div className="btn-individual">
                  <button><RiArrowDownSLine /></button>
                </div>
              </div>
              <div className="infos">
                <p className='average'>{Functions.toInt(movie.vote_average)}% Relevante</p>
                <p className='name'>{Functions.limitDescription(movie.name || movie.title, 26)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {movies.length <= 0 && <LoadingPage />}
    </div>
  )
}

export default Search

{/* 

<div className='list-movies-container'>
<h2>{title}</h2>
<div className="btn-left" onClick={handleLeftClick}> <button><MdNavigateBefore /></button> </div>
<div className="btn-right" onClick={handleRightClick}> <button><MdNavigateNext /></button> </div>
<div className="list-movies" ref={listMovies}>
    {body.results.length > 0 && body.results.map((movie) => (
        <div key={movie.id} className="movie">
            <Link to={`${top == 'originals' ? 'tv' : 'movie'}/${movie.id}`}><img src={imageUrl + movie.backdrop_path} alt={movie.name || movie.title} /></Link>
            <div className="content">
                <div className='btns'>
                    <div className="btn-group">
                        <button className='btn-play'><FaPlay /></button>
                        <Link to={`${top == 'originals' ? 'tv' : 'movie'}/${movie.id}`}><button><HiPlus /></button></Link>
                        <button><AiOutlineLike /></button>
                        <button><AiOutlineDislike /></button>
                    </div>
                    <div className="btn-individual">
                        <button><RiArrowDownSLine /></button>
                    </div>
                </div>
                <div className="infos">
                    <p className='average'>{toInt(Number(movie.vote_average))}% Relevante</p>
                    <p className='name'>{movie.name || movie.title}</p>
                </div>
            </div>
        </div>
    ))}
</div>
</div>

*/}