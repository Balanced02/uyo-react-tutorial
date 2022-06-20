import './App.css';
import AddMovie from './views/AddMovie';
import useMovieDb from './hooks/useMovieDb';
import TableList from './views/TableList';

function App() {
  const { data, addMovie } = useMovieDb()
  return (
    <div className="container">
     <AddMovie addMovie={addMovie} />
     <TableList data={data} />
    </div>
  );
}

export default App;
