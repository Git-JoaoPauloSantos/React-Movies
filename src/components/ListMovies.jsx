import './ListMovies.css'
import { MdNavigateBefore } from 'react-icons/md';
import { MdNavigateNext } from 'react-icons/md';
import { useRef } from 'react';

const imageUrl = import.meta.env.VITE_IMG

const ListMovies = ({ title, body }) => {
    const listMovies = useRef(null)

    const handleLeftClick = () => {

        listMovies.current.scrollLeft -= listMovies.current.offsetWidth
    }

    const handleRightClick = () => {

        listMovies.current.scrollLeft += listMovies.current.offsetWidth
    }

    return (
        <div className='list-movies-container'>
            <h2>{title}</h2>
            <button className="btn-left" onClick={handleLeftClick}><MdNavigateBefore /></button>
            <button className="btn-right" onClick={handleRightClick}><MdNavigateNext /></button>
            <div className="list-movies" ref={listMovies}>
                {body.results.length > 0 && body.results.map((movie) => (
                    <div key={movie.id} className="movie">
                        <img src={imageUrl + movie.backdrop_path} alt={movie.name || movie.title} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ListMovies