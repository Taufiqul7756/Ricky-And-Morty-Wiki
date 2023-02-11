import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import "./fullcast.css";

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
    <div className="full-cast-container">
      {characters &&
        characters.map((item, index) => (
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
  );
}
