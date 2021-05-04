import React from "react";
import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import { Movie } from "./Movie";

export const MovieDetail = () => {
  
  const { id } = useParams();

  const movieInfo = useFetch(`
    https://api.themoviedb.org/3/movie/${id}?api_key=845830b044da48c46edee3e9a1b50525&language=en-US&page=1`);

 // console.log(movieInfo);

  return <Movie movieInfo={movieInfo.result} />;
};
