import React from "react";

export const Movie = ({ movieInfo }) => {
  const {
    backdrop_path,
    title,
    id,
    vote_count,
    overview,
    release_date,
    popularity,
  } = movieInfo;

  return (
    <>
      <div className="col-lg-12">
        <div className="anime__details__pic set-bg p-4">
          <img
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            alt={title}
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
            <div className="anime__details__btn">
              <a href="/" className="follow-btn">
                <i className="fa fa-heart"></i> Favorite
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
