import './LoadingPage.css'

// Gif
import LoadingImg from '../../images/Loading.gif'

const LoadingPage = () => {
    return (
        <div className="loading-page">
            <img src={LoadingImg} alt="" />
        </div>
    )
}

export default LoadingPage