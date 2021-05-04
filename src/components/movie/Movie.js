import React, { useState } from "react";

export const Movie = ({ movieInfo }) => {
  const {
    backdrop_path,
    title,
    id,
    vote_count,
    overview,
    release_date,
    popularity,
    poster_path,
  } = movieInfo;

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);

    if (!isFavorite) {
      localStorage.setItem("title", JSON.stringify(title));
      localStorage.setItem("poster", JSON.stringify(poster_path));
      localStorage.setItem("id", JSON.stringify(id));
      localStorage.setItem("vote_count", JSON.stringify(vote_count));
      localStorage.setItem("overview", JSON.stringify(overview));
      localStorage.setItem("backdrop_path", JSON.stringify(backdrop_path));
    }
  };

  return (
    <>
      <div className="col-lg-12">
        <div className="anime__details__pic set-bg p-4">
          <img
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            alt={title}
            style={{ width: "100%", height: 500 }}
          />

          <div className="col-lg-10 p-4">
            <div className="anime__details__text">
              <div className="anime__details__title">
                <h3> {title} </h3>
                <span> Id: {id} </span>
              </div>

              <div className="anime__details__rating">
                <div className="rating">
                  <i className="fa fa-star"></i>

                  <i className="fa fa-star"></i>

                  <i className="fa fa-star"></i>

                  <i className="fa fa-star"></i>
                </div>
                <span> {vote_count} </span>
              </div>
              <p>{overview}</p>
            </div>
            <div className="anime__details__widget">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <ul>
                    <li>
                      <span>Date :</span> {release_date}
                    </li>
                    <li>
                      <span>Popularity :</span> {popularity}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="anime__details__btn"
              onClick={() => handleFavorite()}
            >
              <a href="/favorites" className="follow-btn text-decoration-none">
                <i className="fa fa-heart"></i> Favorite
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
