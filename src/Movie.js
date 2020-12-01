import React from "react";

function Movie({ year, title, summary, poster, genres }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="genres">
                    {genres.map((genre, index) => (
                        <li key={index} className="genre">
                            {genre}
                        </li>
                    ))}
                </ul>
                <p className="movie_summary">{summary}</p>
            </div>
        </div >
    )
}

export default Movie;