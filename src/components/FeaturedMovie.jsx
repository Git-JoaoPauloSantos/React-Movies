import './FeaturedMovie.css'
import { FaPlay } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';


const FeaturedMovie = ({ movie }) => {
    console.log(movie)
    return (
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
                        <div className="featured-description"><p>{movie.overview}</p></div>
                        <div className="buttons">
                            <a href="#" className='btn-watch'> <FaPlay /> Assistir </a>
                            <a href="#" className='btn-more-infos'> <FiInfo /> Mais informações </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedMovie