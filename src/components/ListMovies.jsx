import './ListMovies.css'
import { MdNavigateBefore } from 'react-icons/md';
import { MdNavigateNext } from 'react-icons/md';
import { FaPlay } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';
import { RiArrowDownSLine } from 'react-icons/ri';
import Functions from '../Functions'
import ImgNotFound from '../images/ImgNotFound.png'

import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const imageUrl = import.meta.env.VITE_IMG
const searchGoogleURL = `https://www.google.com/search?q=assistir `

const ListMovies = ({ title, body, top }) => {
    const listMovies = useRef(null)

    const handleLeftClick = () => {
        listMovies.current.scrollLeft -= 800
    }

    const handleRightClick = () => {
        listMovies.current.scrollLeft += 800
    }

    return (
        <div className='list-movies-container'>
            <h2>{title}</h2>
            <div className="btn-left" onClick={handleLeftClick}> <button><MdNavigateBefore /></button> </div>
            <div className="btn-right" onClick={handleRightClick}> <button><MdNavigateNext /></button> </div>
            <div className="list-movies" ref={listMovies}>
                {body.results.length > 0 && body.results.map((movie) => (
                    <div key={movie.id} className="movie">
                        <Link
                            to={`${top == 'originals' ? 'tv' : 'movie'}/${movie.id}`}>
                            <img
                                src={movie.backdrop_path ? imageUrl + movie.backdrop_path : ImgNotFound}
                                alt={movie.name || movie.title} />
                        </Link>
                        <div className="content">
                            <div className='btns'>
                                <div className="btn-group">
                                    <a
                                        href={`${searchGoogleURL}${movie.name || movie.title}&sourceid=chrome&ie=UTF-8`}
                                        target="_blank">
                                        <button className='btn-play'><FaPlay /></button>
                                    </a>
                                    <Link to={`${top == 'originals' ? 'tv' : 'movie'}/${movie.id}`}><button><HiPlus /></button></Link>
                                    <button><AiOutlineLike /></button>
                                    <button><AiOutlineDislike /></button>
                                </div>
                                <div className="btn-individual">
                                    <button><RiArrowDownSLine /></button>
                                </div>
                            </div>
                            <div className="infos">
                                <p className='average'>
                                    {Functions.toInt(movie.vote_average)}% Relevante
                                </p>
                                <p className='name'>{Functions.limitDescription(movie.name || movie.title, 26)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListMovies