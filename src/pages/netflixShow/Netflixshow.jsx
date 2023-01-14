import { AddOutlined, PlayArrow } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/netflixShowPage/navbar/Navbar";
import Row from "../../components/netflixShowPage/row/Row";
import "./netflixshow.css";

const apiKey = "745a0d028e46b157597384bf4fcbc17e";
const url = "https://api.themoviedb.org/3";
const popular = "popular";
const topRated = "top_rated";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const imgUrl = "https://image.tmdb.org/t/p/original";

const Netflixshow = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);

      setPopularMovies(results);
    };

    const fetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);

      setTopRatedMovies(results);
    };

    const fetchUpcomingMovies = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);

      setUpcomingMovies(results);
    };

    const fetchNowPlayingMovies = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);

      setNowPlayingMovies(results);
    };

    const fetchGenre = async () => {
      const {
        data: { genres },
      } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
      console.log(genres);
      setMovieGenres(genres);
    };

    fetchGenre();
    fetchNowPlayingMovies();
    fetchUpcomingMovies();
    fetchTopRated();
    fetchPopular();
  }, []);

  return (
    <div className="netflixshow">
      <Navbar />

      <div
        className="banner"
        style={{
          backgroundImage: popularMovies[0]
            ? `url(${`${imgUrl}/${popularMovies[0].poster_path}`})`
            : "none",

          objectFit: "cover",
        }}
      >
        {popularMovies[0] && (
          <h1 className="banner-h">{popularMovies[0].original_title}</h1>
        )}

        {popularMovies[0] && (
          <p className="banner-p">{popularMovies[0].overview}</p>
        )}

        <div className="buttons">
          <button className="play-btn">
            <PlayArrow /> Play
          </button>
          <button className="plus-btn">
            My List <AddOutlined />{" "}
          </button>
        </div>
      </div>

      <Row title={"Upcoming"} arr={upcomingMovies} />
      <Row title={"Popular"} arr={popularMovies} />
      <Row title={"Top Rated"} arr={topRatedMovies} />
      <Row title={"Now Playing"} arr={nowPlayingMovies} />

      <div className="genreBox">
        {movieGenres.map((item) => {
          <Link key={item.index} to={`/genre/${item.id}`}>
            {item.name}
          </Link>;
        })}
      </div>
    </div>
  );
};

export default Netflixshow;
