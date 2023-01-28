import { useEffect, useState } from "react"


export const useFetch = (url) => {
    const [data, setData] = useState(null)

    const fetchData = async () => {
        const res = await fetch(url)
        const json = await res.json()

        setData(json)

    }

    useEffect(() => {
        fetchData()

    }, [url])

    return { data }
}