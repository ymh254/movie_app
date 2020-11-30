import React from "react";

function Movie({ year, title, summary, poster }) {
    return (
        <div class="movie">
            <img src={poster} alt={title} title={title} />
            <div class="movie_data">
                <h3 class="movie_title">{title}</h3>
                <h5 class="movie_year">{year}</h5>
                <p class="movie_summary">{summary}</p>
            </div>
        </div >
    )
}

export default Movie;