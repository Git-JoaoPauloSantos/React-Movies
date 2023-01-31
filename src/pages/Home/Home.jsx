import { useState, useEffect } from "react"
import './Home.css'
import ListMovies from "../../components/ListMovies/ListMovies"
import FeaturedMovie from '../../components/FeaturedMovie/FeaturedMovie'
import LoadingPage from '../../components/LoadingPage/LoadingPage'
import Api from "../../Api"


const Home = () => {
  const [listAll, setListAll] = useState([])
  const [featureMovieData, setFeatureMuvieDdata] = useState(null)

  useEffect(() => {
    const loadAll = async () => {
      let data = await Api.getHomeList()
      setListAll(data)

      // Pegando filme em destaque de forma randomica
      let toprated = data.filter(i=> i.top === 'toprated')
      let randomMovie = Math.floor(Math.random() * (toprated[0].body.results.length -1))
      let movie = toprated[0].body.results[randomMovie]
      setFeatureMuvieDdata(movie)
    }
    loadAll()

  }, [])

  return (
    <div className="container">
      {featureMovieData && <FeaturedMovie movie={featureMovieData} />}
      <section className="lists-movies">
        {listAll && listAll.map((list) => (
          <ListMovies key={list.title} title={list.title} body={list.body} top={list.top} />
        ))}
      </section>
      {listAll.length <= 0 && featureMovieData === null && <LoadingPage />}
    </div>
  )
}

export default Home