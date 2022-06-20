import { useState } from "react"

const AddMovie = ({ addMovie }) => {
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [rating, setRating] = useState('')

  const onSubmit = e => {
    e.preventDefault();
    if (!title) {
      return window.alert('Must provide title')
    }
    addMovie({ title, year, rating })
  }

  return <form onSubmit={onSubmit} >
    <input type="text" placeholder="Movie Title" value={title} onChange={e => setTitle(e.target.value)} required />
    <input type="text" placeholder="Movie Year" value={year} onChange={e => setYear(e.target.value)} />
    <input type="text" placeholder="Rating" value={rating} onChange={e => setRating(e.target.value)} />
    <button type="submit">Add Movie</button>
  </form>
}

export default AddMovie
