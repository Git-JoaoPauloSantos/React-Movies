import './Home.css'
import { useState, useEffect } from "react"
import ListMovies from "../components/ListMovies"
import FeaturedMovie from '../components/FeaturedMovie'
import Api from "../Api"


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

  console.log(listAll)

  return (
    <div className="container">
      {featureMovieData && <FeaturedMovie movie={featureMovieData} />}
      <section className="lists-movies">
        {listAll && listAll.map((list) => (
          <ListMovies key={list.title} title={list.title} body={list.body} top={list.top} />
        ))}
      </section>
    </div>
  )
}

export default Home