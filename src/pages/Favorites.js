import React from "react";
import { Link } from "react-router-dom";

export const Favorites = () => {
  const title = JSON.parse(localStorage.getItem("title"));
  const poster_path = JSON.parse(localStorage.getItem("poster"));
  const id = JSON.parse(localStorage.getItem("id"));
  const overview = JSON.parse(localStorage.getItem("overview"));
  const backdrop_path = JSON.parse(localStorage.getItem("backdrop_path"));

  return (
    <>
      <div
        className="bg-favorites"
        style={{
          backgroundImage: `URL("https://image.tmdb.org/t/p/w500/${backdrop_path}")`,
        }}
      >
        <div className="container relative">
          <div className="row">
            <div className="col-lg-12 mt-5  ">
              <div className="trending__product">
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className="section-title">
                      <h4>favorites</h4>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-lg-4 col-md-6 col-sm-6 ">
                    <div className="product__item ">
                      <div className="product__item__pic set-bg  text-center">
                        <Link to={`/movie/${id}`}>
                          <img
                            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                            alt={title}
                            style={{ width: 300, height: 400 }}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-5">
                    <div>
                      <p className="text-info text-uppercase fw-bold fs-6">
                        {title}{" "}
                      </p>
                      <p className="text-light"> {overview} </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
