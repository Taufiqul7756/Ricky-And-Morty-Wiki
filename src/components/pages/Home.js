import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "react-bootstrap/Card";

import Bubble from "../../images/HomePage/bubble.png";
import Gun from "../../images/HomePage/Gun.png";
import pill from "../../images/HomePage/pill.png";
import portal from "../../images/HomePage/portal.png";
import logo from "../../images/Logo.png";

import "./Home.css";

const Home = () => {
  const [characters, setCharacter] = useState([]);
  const [episodes, setEpisode] = useState([]);
  const [locations, setLocation] = useState([]);

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

  const seeDetails = () => {};
  return (
    <div className="home-container">
      <div
        onClick={() => {
          seeDetails();
        }}
        className="characters-container"
      >
        {characters.map((item, index) => (
          <Card className="card-container" key={index}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Episode */}

      <div
        onClick={() => {
          seeDetails();
        }}
        className="episode-container"
      >
        {episodes.map((item, index) => (
          <Card className="card-container" key={index}>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Locations */}

      <div
        onClick={() => {
          seeDetails();
        }}
        className="episode-container"
      >
        {locations.map((item, index) => (
          <Card className="card-container" key={index}>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
