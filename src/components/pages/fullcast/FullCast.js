import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import logo from "../../../images/Logo.png";

import "./fullcast.css";
import "../Home.css";

export default function FullCast() {
  const [characters, setCharacter] = useState([]);

  const getChar = async () => {
    const url = "https://rickandmortyapi.com/api/character";
    const { data } = await axios.get(url);
    console.log(data.results);
    setCharacter(data.results);
  };

  useEffect(() => {
    getChar();
  }, []);

  return (
    <div className="fullCast-container">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </Link>

      <span className="the-cast-text">
        <h2>The Cast</h2>
      </span>
      <div className="full-cast-container ">
        {characters &&
          characters.map((item, index) => (
            <Link to={`/castDetails/${item.id}`}>
              <Card className="card-container theme-border" key={index}>
                <Card.Img className="card-img" variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          ))}
      </div>
    </div>
  );
}
