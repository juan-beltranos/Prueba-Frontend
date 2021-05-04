import React, { useState } from "react";
import { Link } from "react-router-dom";

export const MovieCard = ({ popular }) => {

  //console.log(popular);
  const { id, title, poster_path, vote_count, overview , backdrop_path} = popular;

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
   
    if (!isFavorite  ) {
      localStorage.setItem( "title",JSON.stringify(title));
      localStorage.setItem( "poster",JSON.stringify(poster_path));
      localStorage.setItem( "id",JSON.stringify(id));
      localStorage.setItem( "vote_count",JSON.stringify(vote_count));
      localStorage.setItem( "overview",JSON.stringify(overview));
      localStorage.setItem( "backdrop_path",JSON.stringify(backdrop_path));
    }
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
      <div className="product__item mt-5">
        <div className="product__item__pic set-bg">
          <Link to={`/movie/${id}`}>
            <div className="ep"> {title} </div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
            />
            <div className="comment">
              <i className="fa fa-comments"></i> {vote_count}
            </div>
          </Link>
          <div className="view" onClick={() => handleFavorite()}>
            {isFavorite ? (
              <i className="fa fa-heart  text-danger favorite"></i>
            ) : (
              <i className="fa fa-heart   favorite"></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
