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
      <div class="col-lg-12">
        <div class="anime__details__pic set-bg p-4">
          <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} />

          <div class="col-lg-10 p-4">
            <div class="anime__details__text">
              <div class="anime__details__title">
                <h3> {title} </h3>
                <span> Id: {id} </span>
              </div>

              <div class="anime__details__rating">
                <div class="rating">
                  <a href="#">
                    <i class="fa fa-star"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-star"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-star"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-star"></i>
                  </a>
                </div>
                <span> {vote_count} </span>
              </div>
              <p>{overview}</p>
            </div>
            <div class="anime__details__widget">
              <div class="row">
                <div class="col-lg-6 col-md-6">
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
            <div class="anime__details__btn">
              <a href="#" class="follow-btn">
                <i class="fa fa-heart"></i> Favorite
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
