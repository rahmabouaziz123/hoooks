import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { moviesData } from "./data"; // contient data tableau de objet
import { MovieList } from "./Components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";

import "./pp.scss";
import { AddNiewMovie } from "./Components/AddNiewMovie";
import { Search } from "./Components/Search";
// import StarRatingp from './Components/StarRating';



// on utilise imrr
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link1 } from "./Components/Link1";
import { Link2 } from "./Components/Link2";
import { Link3 } from "./Components/Link3";
import { Detail } from "./Components/Detail";

function App() {
  const [data, setData] = useState(moviesData);
  // state search
  const [searching, setSearching] = useState("");
  const [rating, setRating] = useState(1);
  //editsearch
  const handelSeartch = (y) => setSearching(y);
  //
  const handelRating = (z) => setRating(z);

  // to delete a Movie
  const HandelDelete = (ID) => {
    setData(data.filter((el) => el.id !== ID));
  };

  //add
  const handelAdd = (newMovie) => {
    setData([...data, newMovie]);
  };

  // edit Movie

  const handelEdit = (editeMovie) =>
    setData(
      data.map((el) =>
        el.id === editeMovie.id ? { ...el, ...editeMovie } : el
      )
    );

  return (
    <div className="App">
      
      
      

      <Router>
      
      <Search
        searching={searching}
        rating={rating}
        handelRating={handelRating}
        handelSeartch={handelSeartch}
      />
     
    
    
        <Routes>
      
        <Route path="/"  element={<MovieList list={data.filter(el=>el.name.toLowerCase().includes(searching.toLowerCase())  && el.rating>=rating  ) } deleteMovie={HandelDelete}  handelEdit={handelEdit}/>} >       </Route>
         
          <Route  path="addMovie" element={<AddNiewMovie handelAdd={handelAdd}/>}></Route>

          {/* <Route  path="search" element={<Search searching={searching}  rating={rating} handelRating={handelRating} handelSeartch={handelSeartch} />}></Route> */}

              <Route path="/link1" element={<Link1/>}/>
              <Route path="/link2" element={<Link2/>}/>
              <Route path="/link3" element={<Link3/>}/>


              <Route path="/product/:id" element={<Detail infoData={data}  />}/>
              
                
              {/* <Route path="/link3" element={<AddNiewMovie handelAdd={handelAdd}/>}/> */}
        </Routes>

     
       
        <AddNiewMovie handelAdd={handelAdd} />
      

      </Router>
    </div>
  );
}

export default App;
