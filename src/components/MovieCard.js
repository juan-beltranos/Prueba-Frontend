import React from "react";
import { Link } from "react-router-dom";

export const MovieCard = ({ popular }) => {
  
  const { id, title, poster_path, vote_count } = popular;

  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/movie/${id}`}>
        <div className="product__item">
          <div className="product__item__pic set-bg">
            <div className="ep"> {title} </div>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
            <div className="comment">
              <i className="fa fa-comments"></i> {vote_count}
            </div>
            <div className="view">
              <i class="fa fa-heart"></i>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
