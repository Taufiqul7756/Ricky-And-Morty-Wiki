import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "react-bootstrap/Card";

import Bubble from "../../images/HomePage/bubble.png";
import Gun from "../../images/HomePage/Gun.png";
import pill from "../../images/HomePage/pill.png";
import portal from "../../images/HomePage/portal.png";
import logo from "../../images/Logo.png";
import play from "../../images/Icons/button.png";

import "./Home.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
  const [characters, setCharacter] = useState([]);
  const [episodes, setEpisode] = useState([]);
  const [locations, setLocation] = useState([]);

  const characterSettings = {
    dots: false,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  const lowerSettings = {
    dots: false,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  // Characters data Fetching
  const getChar = async () => {
    const url = "https://rickandmortyapi.com/api/character";
    const { data } = await axios.get(url);
    console.log(data.results);
    setCharacter(data.results);
  };

  // Episode data Fetching
  const getEpisode = async () => {
    const url = "https://rickandmortyapi.com/api/episode";
    const { data } = await axios.get(url);
    console.log(data.results);
    setEpisode(data.results);
  };

  // Locations data Fetching
  const getLocation = async () => {
    const url = "https://rickandmortyapi.com/api/location";
    const { data } = await axios.get(url);
    console.log(data.results);
    setLocation(data.results);
  };

  useEffect(() => {
    getChar();
    getEpisode();
    getLocation();
  }, []);

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      {/* Hero fashion */}

      <div className="header-container">
        <div className="upper-line">
          <span className="header-title white-text white-space italic-text">
            The
          </span>
          <img className="white-space" src={portal} alt="" />
          <span className="header-title theme-text white-space">Rick</span>{" "}
          <span className="header-title theme-text">&</span>
        </div>
        <div className="bubble">
          <img src={Bubble} alt="" />
        </div>
        <div className="dash">
          <img src={pill} alt="" />
        </div>
        <div className="second-line">
          <span className="header-title theme-text white-space">Morty</span>
          <span className="header-title white-text italic-text white-space">
            wiki
          </span>
        </div>
        <div className="gun">
          <img src={Gun} alt="" />
        </div>
        <div className="third-line">
          <div className="watchNow-btn">
            <button className="watch-now-btn  white-space">
              {" "}
              <img src={play} alt="" />
              Watch Now
            </button>
          </div>
          <p className="third-line-text">
            Brilliant but boozy scientist Rick hijacks his fretful teenage
            grandson, Morty, for wild escapades in other worlds and alternate
            dimensions.
          </p>
        </div>
      </div>
      {/* Character */}
      <div className="meet-the-cast-text">
        <span className="text">
          <h4>Meet the Cast</h4>
        </span>
        <Link to="fullcast">
          <Button className="view-all-btn">View All</Button>
        </Link>
      </div>
      <Slider {...characterSettings}>
        {characters.map((item, index) => (
          <Link to={`/castDetails/${item.id}`}>
            <Card className="card-container  theme-border" key={index}>
              <Card.Img className="card-img" variant="top" src={item.image} />
              <Card.Body>
                <Card.Title className="text character-name">
                  {item.name}
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </Slider>
      {/* Episode */}
      <div className="episodes-text">
        <span className="text">
          <h4>Episodes</h4>
        </span>
      </div>
      <Slider {...lowerSettings}>
        {episodes.map((item, index) => (
          <Card
            className=" card-episode card-container theme-border"
            key={index}
          >
            <Card.Body>
              <Card.Title className="text">{item.episode}</Card.Title>
              <Card.Title className="text">{item.name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </Slider>
      {/* Locations */}
      <div>
        <div className="locations-text">
          <span className="text">
            <h4>Locations</h4>
          </span>
        </div>

        <Slider {...lowerSettings}>
          {locations.map((item, index) => (
            <Card
              className="card-container card-episode location-container theme-border"
              key={index}
            >
              <Card.Body>
                <Card.Title className="text">#{index + 1}</Card.Title>
                <Card.Title className="text">{item.name}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
