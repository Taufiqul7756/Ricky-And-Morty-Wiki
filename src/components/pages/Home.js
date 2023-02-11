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

  // const [hideCast, setHideCast] = useState(false);

  // Characters data Fetching
  const getChar = async () => {
    const url = "https://rickandmortyapi.com/api/character";
    const { data } = await axios.get(url);
    console.log(data.results);
    setCharacter(data.results);
  };

  useEffect(() => {
    getChar();
  }, []);

  // Episode data Fetching
  const getEpisode = async () => {
    const url = "https://rickandmortyapi.com/api/episode";
    const { data } = await axios.get(url);
    console.log(data.results);
    setEpisode(data.results);
  };

  useEffect(() => {
    getEpisode();
  }, []);

  // Locations data Fetching
  const getLocation = async () => {
    const url = "https://rickandmortyapi.com/api/location";
    const { data } = await axios.get(url);
    console.log(data.results);
    setLocation(data.results);
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="home-container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      {/* Character */}

      <Slider {...settings}>
        {characters.map((item, index) => (
          <Link to={`/castDetails/${item.id}`}>
            <Card className="card-container" key={index}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </Slider>
      <div>
        {
          <div className="meet-the-cast-text">
            <h4>Meet the Cast</h4>
            <Link to="fullcast">
              <Button
              // onClick={() => {
              //   setHideCast(characters.slice(0, 5));
              //   setHideCast(true);
              // }}
              >
                View All
              </Button>
            </Link>
          </div>
        }
        <div className="characters-container">
          {characters.map((item, index) => (
            <Link to={`/castDetails/${item.id}`}>
              <Card className="card-container" key={index}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
      </div>

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
