import React from 'react';
import './MovieCard.scss'

const MovieCard = (props) => {
  const {data} = props;
  return (
    <div >
      <div className="card-item">
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} alt="" />
          </div>
          <div className="card-bottom">
            <h2>{data.Title}</h2>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;