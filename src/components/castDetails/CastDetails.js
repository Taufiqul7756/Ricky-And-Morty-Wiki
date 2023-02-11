import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "react-bootstrap/Card";
import "./castDetails.css";

const CastDetails = () => {
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

  return (
    <div className="castDetails-container">
      <div className="cast-details">
        <div className="cast-show">
          {characters.map((item, index) => (
            <Card className="card-container" key={index}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className="castDetails-show">
          <h1>hi</h1>
        </div>
      </div>
    </div>
  );
};

export default CastDetails;
