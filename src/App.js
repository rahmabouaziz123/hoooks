import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { moviesData } from './data';// contient data tableau de objet
import { MovieList } from './Components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';

import './pp.scss';
import { AddNiewMovie } from './Components/AddNiewMovie';
import { Search } from './Components/Search';
// import StarRatingp from './Components/StarRating';


function App() {

const[ data,setData]=useState(moviesData)
// state search 
const [searching, setSearching]=useState("")
const [rating, setRating] = useState(1)
//editsearch
 const handelSeartch=(y)=>setSearching(y)
//
const handelRating=(z)=>setRating(z)



// to delete a Movie
const HandelDelete=(ID)=>{setData(data.filter((el)=>el.id!==ID))}

//add
const handelAdd=(newMovie)=>{
  setData([...data,newMovie])
}

// edit Movie

const handelEdit=(editeMovie=>setData(data.map(el=>el.id===editeMovie.id?{...el,...editeMovie}:el)))






  return (
    <div className="App">
      <Search searching={searching}  rating={rating} handelRating={handelRating} handelSeartch={handelSeartch}   />
      <MovieList list={data.filter(el=>el.name.toLowerCase().includes(searching.toLowerCase())  && el.rating>=rating  ) } deleteMovie={HandelDelete}  handelEdit={handelEdit}/>
      <AddNiewMovie handelAdd={handelAdd}/>
     
    </div>
  );
}

export default App;
