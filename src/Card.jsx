import './App.css';

function Card({movie}) {
  return (
  <div className='center card'>
  <img src={movie.Poster} />
    <h2>{movie.Title}</h2>
    <p>{movie.Year} </p>
  </div>
  );
}

export default Card;