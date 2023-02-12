import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "react-bootstrap/Card";

import Bubble from "../../images/HomePage/bubble.png";
import Gun from "../../images/HomePage/Gun.png";
import pill from "../../images/HomePage/pill.png";
import portal from "../../images/HomePage/portal.png";
import logo from "../../images/Logo.png";

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

  const settings = {
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

      {/* Character */}
      <div className="meet-the-cast-text">
        <h4>Meet the Cast</h4>
        <Link to="fullcast">
          <Button>View All</Button>
        </Link>
      </div>

      <Slider {...settings}>
        {characters.map((item, index) => (
          <Link to={`/castDetails/${item.id}`}>
            <Card className="card-container theme-border" key={index}>
              <Card.Img className="card-img" variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </Slider>

      {/* Episode */}

      <div>
        <div className="episodes-text">
          <h4>Episodes</h4>
        </div>
        <div className="episode-container">
          {episodes.map((item, index) => (
            <Card className="card-container" key={index}>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      {/* Locations */}

      <div>
        <div className="locations-text">
          <h4>Locations</h4>
        </div>
        <div className="location-container">
          {locations.map((item, index) => (
            <Card className="card-container" key={index}>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
