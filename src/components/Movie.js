import React from "react";

export const Movie = ({ movieInfo }) => {
  console.log(movieInfo.backdrop_path);
  return (
    <>
      <div class="col-lg-12">
        <div class="anime__details__pic set-bg p-4">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieInfo.backdrop_path}`}
          />

          <div class="col-lg-10 p-4">
            <div class="anime__details__text">
              <div class="anime__details__title">
                <h3> {movieInfo.title} </h3>
                <span> Id: {movieInfo.id} </span>
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
                <span> {movieInfo.vote_count} </span>
              </div>
              <p>{movieInfo.overview}</p>
            </div>
            <div class="anime__details__widget">
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <ul>
                    <li>
                      <span>Date:</span> {movieInfo.release_date}
                    </li>
                    <li>
                      <span>Popularity:</span> {movieInfo.popularity}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="anime__details__btn">
              <a href="#" class="follow-btn">
                <i class="fa fa-heart-o"></i> Favorite
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
