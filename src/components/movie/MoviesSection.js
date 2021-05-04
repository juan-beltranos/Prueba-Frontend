import React, { useEffect, useState } from "react";
import movieDB from "../../api/MovieDb";
import { MovieCard } from "./MovieCard";


export const MoviesSection = () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {

    (async () => {
      const popularMovies = await movieDB.get("/popular");
      const movies = await popularMovies.data.results;
    
      setMovieList(movies);

    })();
    
  }, []);

  return (
    <>
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="trending__product">
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className="section-title">
                      <h4>Populares</h4>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  {movieList.map((popular) => (
                    <MovieCard popular={popular} key={popular.id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
