import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './Card'

let arr=[
  {
    Poster: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
Title: "Batman Begins",
Type: "movie",
Year: "2005",
  }
]


const App = () => {
  let API_url='http://www.omdbapi.com/?i=tt3896198&apikey=4c1ee5e1'
  const [movies,setMovies]=useState([])
  const [searchterm,setSearchTerm]=useState([])
  let search=async (title)=>{
    const response=await fetch(`${API_url}&s=${title}`)
    const data=await response.json()
   // arr=data.Search
     setMovies(data.Search)
     console.log(arr[0])
    // console.log(setMovies(data.Search))
    console.log(movies)

  }
  useEffect(()=>{
    search('batman');
    console.log(arr[0])
  },[]);

  return (

          <div>

            <div className='center searchFeild'>
            <input type='text' placeholder='Search Movie' value={searchterm} onChange={(e)=>{
            setSearchTerm(e.target.value)
          }} />
          <button onClick={()=>{
            search(searchterm)
          }}>search</button>
            </div>

          {movies?.length > 0
          ?
          (
            <div className='movieCard'>
                     {movies?.map(movie => {
              return (
                <div key={movie.imdbID}>
                  <Card movie={movie}/>
                </div>
              );
            })}
            </div>
          ):(
            <div className='center'>
            <h2> Movie not found</h2>
                        </div>
          )



        }

          </div>


  );
}

export default App;
