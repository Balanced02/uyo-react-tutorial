const TableList = ({ data }) => {
  return <table>
    <thead>
      <tr>
        <th>Movie Title</th>
        <th>Movie Rating</th>
        <th>Movie Year</th>
      </tr>
    </thead>
    <tbody>
      {data.map(movie =>
        <tr key={movie.title} >
          <td>{movie.title}</td>
          <td>{movie.year}</td>
          <td>{movie.rating}</td>
        </tr>
      )}
    </tbody>
  </table>
}

export default TableList