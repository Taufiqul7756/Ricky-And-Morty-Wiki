import React, { useEffect, useState } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Bubble from "../../images/HomePage/bubble.png";
import Gun from "../../images/HomePage/Gun.png";
import pill from "../../images/HomePage/pill.png";
import portal from "../../images/HomePage/portal.png";
import logo from "../../images/Logo.png";

import "./Home.css";

const Home = () => {
  const [characters, setCharacter] = useState([]);
  const [episode, setEpisode] = useState([]);
  const getData = async () => {
    const url = "https://rickandmortyapi.com/api/character";
    const { data } = await axios.get(url);
    console.log(data.results);
    setCharacter(data.results);
  };

  const seeDetails = () => {};
  useEffect(() => {
    getData();
  }, []);
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
        {characters.map((item, index) => (
          <Card className="card-container" key={index}>
            <Card.Img variant="top" src={item.image} />
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
