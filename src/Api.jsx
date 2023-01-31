const apiURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const fetchData = async (endPoint) => {
    const req = await fetch(`${apiURL}${endPoint}${apiKey}`)
    const json = await req.json()
    return json
}

export default {
    getHomeList: async () => {
        return [
            {
                top: 'originals',
                title: 'Originais Netflix',
                body: await fetchData(`discover/tv?with_network=213&languege=pt-BR&`)
            },
            {
                top: 'trending',
                title: 'Recomendados para Você',
                body: await fetchData(`movie/popular?languege=pt-BR&`)
            },
            {
                top: 'toprated',
                title: 'Em Alta',
                body: await fetchData(`movie/top_rated?languege=pt-BR&`)
            },
            {
                top: 'action',
                title: 'Ação',
                body: await fetchData(`discover/movie?with_genres=28&languege=pt-BR&`)
            },
            {
                top: 'conedy',
                title: 'Comédia',
                body: await fetchData(`discover/movie?with_genres=35&languege=pt-BR&`)
            },
            {
                top: 'horor',
                title: 'Terror',
                body: await fetchData(`discover/movie?with_genres=27&languege=pt-BR&`)
            },
        ]
    }
}