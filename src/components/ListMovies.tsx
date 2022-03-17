import * as React from 'react';
import axios from 'axios';
import Movie from './Movie';
import { useNavigate } from 'react-router-dom';

type PropsListMovies = {
  isAuth: boolean;
}

interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: any;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number
}


const Movies: React.FC<PropsListMovies> = ({isAuth } : PropsListMovies) => {
    const URL = 'https://api.themoviedb.org/3';
    const API_KEY = '2eaba40ff42798891bccb440ff0201cb';

    const [data, setData] = React.useState<IMovie[] | null>(null);
    const [isLoading, setLoading] = React.useState(false);
    const [err, setErr] = React.useState("");

    let navigate = useNavigate();

    const getData = () => {
      axios
        .get(`${URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
        .then(res => { setData(res.data.results);}) 
        .catch(error => setErr(error));
    }

    const navigateOnMovie = (movie : IMovie) => {
      navigate(`/movies/${movie.id}`);
    };

    const deleteMovie = (movieIdToDelete: number) => {
      const updatedMovies = data?.filter(movie => movie.id !== movieIdToDelete);
      if (updatedMovies != null)
      {
          setData(updatedMovies);
      }
  };

    React.useEffect(() => {
        if (isAuth) {
          setLoading(false);
          getData();
        } else {
            navigate('/');
        }
    }, []);

    return (
      <div className="App">
        <div className="content">
        <body className="allMovies">
          {data != null ?
              data.map( (itemMovie) => { 
                return (
                  <>
                    <Movie 
                      {...itemMovie}
                      navigateOnMovie = {() => navigateOnMovie(itemMovie)}
                      deleteMovie = {() => deleteMovie(itemMovie.id)}
                    />)
                  </>
              
              )} )
              :
                <h2>Loading ...</h2>
              }
            </body>
        </div>
      </div>
    )
  }

export default Movies;