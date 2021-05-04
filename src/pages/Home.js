import React from 'react';
import { Header } from '../components/layout/Header';
import { MoviesSection } from '../components/movie/MoviesSection';

export const Home = () => {
    return (
        <>
            <Header/>

            <MoviesSection/>
        </>
    )
}
