import React from "react";
import "./HomeScreen.css";
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";
import Row from "../Row/Rows";
import requests from "../../Requests";
const HomeScreen = () => {
  return (
    <>
      <div className="homeScreen">
        <Nav />

        <Banner />
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      </div>
    </>
  );
};

export default HomeScreen;
