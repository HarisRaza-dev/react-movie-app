import React from 'react';
const MovieList = (
  {
    image,
    title,
    year,
    type,
    
  }
) => {
  return (
    <div className="image-card">
      {image === "N/A" ? <img alt="poster" className="movie-card-image" src={require("./poster.png")} /> : <img alt="poster" className="movie-card-image" src={image} />}
      <h3 className="movie-title">{title}</h3>
      <h4 className="movie-released-date">{year}</h4>
      <h4 className="movie-type">{type}</h4>
    </div>
  )
}
export default MovieList;
