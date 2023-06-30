import { useState, useEffect } from 'react';
import './App.css';
import { Auth } from "./components/auth";
import { db } from "./config/firebase"
import { getDocs, collection } from "firebase/firestore";

function App() {

  const [movieList, setMovieList] = useState([]);

  const moviesCollectionRef = collection(db, "movies");

  useEffect(() => {
    const getMovieList = async () => {
      //read the data from database
      //set movie list
      try {
        const data = await getDocs(moviesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));
        //  console.log(filteredData);
        setMovieList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getMovieList();
  }, [])

  return (
    <div className="App">
      <Auth />

      <div>
        {movieList.map((movie) => {
          <div>
            <h1>{movieList.title}</h1>
            <p>Data : {movie.releaseDate} </p>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
