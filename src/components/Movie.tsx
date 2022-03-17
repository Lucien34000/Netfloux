import * as React from 'react';

interface MovieProps {
    poster_path: string;
    navigateOnMovie: () => void;
    deleteMovie: () => void;
    title: string;
    release_date: Date | string,
}

const Movie: React.FC<MovieProps> = (props: MovieProps) => {
    

    if (props != null) {
        return (
            <div className="card cardContent">
                <img className='poster' src={"https://image.tmdb.org/t/p/w500/" + props.poster_path} alt={props.title} />
                <h3>Movie : {props.title}</h3>
                <p>Release date : {props.release_date}</p>
                <button className='btn'>See more...</button>
                <button className='btn'>Delete</button>
            </div>
        ) 
    } else {
        return (
            <h3>Pas de films disponibles</h3>
        )
    }
    
}

export default Movie;