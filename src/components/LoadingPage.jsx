import React from 'react'
import './LoadingPage.css'
import LoadingImg from '../images/Loading.gif'

const LoadingPage = () => {
    return (
        <div className="loading-page">
            <img src={LoadingImg} alt="" />
        </div>
    )
}

export default LoadingPage