import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Movie from './Movie';


const Movies = () => {
  const URL = 'https://api.themoviedb.org/3';
  const API_KEY = '2eaba40ff42798891bccb440ff0201cb';
    const [data, setData] = useState([]);

    const [isLoading, setLoading] = useState(false);

    const getData = () => {
      axios
        .get(`${URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
        .then(res => {
          setData(res.data.results);
        }) 
        .catch(error => console.log("Error", error))
    }

    useEffect(() => {
      setLoading();
      getData();
    }, []);

    return (
      <div >
        <body className="allMovies">
          {isLoading ? (
              <h2>Loading ...</h2>
            ) : (
          data.map( (allMyMovies) => <Movie key={allMyMovies.page} {...allMyMovies} />))
          }
          <Movie />
        </body>
      </div>
    );
}

export default Movies;