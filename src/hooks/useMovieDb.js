import { useState } from "react"

const useMovieDb = () => {
  const [data, setData] = useState([])

  const addMovie = (movie) => setData(prevData => ([...prevData, movie]))

  return { data, addMovie }
}

export default useMovieDb