import './FeaturedMovie.css'
import { FaPlay } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';
import Functions from '../Functions'


const FeaturedMovie = ({ movie }) => {

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
                        <div className='featured-name'><h1>{Functions.limitDescription(movie.name || movie.title, 38)}</h1></div>
                        <div className="featured-description"><p>{Functions.limitDescription(movie.overview, 200)}</p></div>
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