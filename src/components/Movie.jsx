import React from 'react';

const Movie = (props) => {
    if (props != null) {
        return (
            <div className="card">
                <img className='poster' src={"https://image.tmdb.org/t/p/w500/" + props.poster_path} alt={props.original_title} />
                <h3>Movie : {props.original_title}</h3>
                <p style={{textAlign: 'left'}}>Description : {props.overview}</p>
                <p>Release date : {props.release_date}</p>
                <button className='btn'>See more...</button>
            </div>
        ) 
    } else {
        return (
            <h3>Pas de films disponibles</h3>
        )
    }
    
}

export default Movie;