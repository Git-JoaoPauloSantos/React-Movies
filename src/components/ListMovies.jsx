import './ListMovies.css'
import { MdNavigateBefore } from 'react-icons/md';
import { MdNavigateNext } from 'react-icons/md';

const imageUrl = import.meta.env.VITE_IMG

const ListMovies = ({ title, body }) => {
    return (
        <div className='list-movies-container'>
            <h2>{title}</h2>
            <div className="btn-left"><MdNavigateBefore /></div>
            <div className="btn-right"><MdNavigateNext /></div>
            <div className="list-movies-listarea">
                <div className="list-movies">
                    {body.results.length > 0 && body.results.map((movie) => (
                        <div key={movie.id} className="movie">
                            <img src={imageUrl + movie.backdrop_path} alt={movie.name || movie.title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ListMovies