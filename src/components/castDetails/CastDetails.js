import React, { useEffect, useState } from "react";
import axios from "axios";
import Status from "../../images/Icons/Status.png";
import Gender from "../../images/Icons/Gender.png";
import Location from "../../images/Icons/Location.png";
import origin from "../../images/Icons/origin.png";
import Redirect from "../../images/Icons/Redirect.png";
import Species from "../../images/Icons/Species.png";
import Vector from "../../images/Icons/Vector.png";
import logo from "../../images/Logo.png";

import "./castDetails.css";
import { Link, useParams } from "react-router-dom";

const EpisodeName = ({ url }) => {
  const [epNm, setEpNm] = useState("");

  useEffect(() => {
    getEpisodeName(url);
  }, []);

  const getEpisodeName = async (url) => {
    const { data } = await axios.get(url);
    setEpNm(data.name);
  };

  return <li>{epNm}</li>;
};

const CastDetails = () => {
  const [character, setCharacter] = useState();
  console.log(character);

  const params = useParams();
  const castId = params.id;
  console.log({ castId });

  // Characters data Fetching
  const getChar = async () => {
    const url = `https://rickandmortyapi.com/api/character/${castId}`;
    const { data } = await axios.get(url);
    console.log(data);
    setCharacter(data);
  };

  useEffect(() => {
    getChar();
  }, []);

  return (
    <div className="castDetails-container">
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </Link>
      {character && (
        <div className="cast-details">
          <div className="left-side">
            <span className="char-name">
              <h2 className="character-name">{character.name}</h2>
            </span>

            <div className="character-img theme-border">
              <img src={character.image} alt="" />
            </div>
          </div>

          <div className="right-side">
            <div className="first-part">
              <div className="first-part-child theme-border">
                <div className="details-icon">
                  <img src={Status} alt="" />
                </div>
                <div>
                  <span>
                    <small>Status</small>
                  </span>{" "}
                  <br /> <span>{character.status}</span>
                </div>
              </div>

              <div className="first-part-child theme-border">
                <div className="details-icon">
                  <img src={Species} alt="" />
                </div>
                <div>
                  <span>
                    <small>Species</small>
                  </span>{" "}
                  <br /> <span>{character.species}</span>
                </div>
              </div>

              <div className="first-part-child theme-border">
                <div className="details-icon">
                  <img src={Gender} alt="" />
                </div>
                <div>
                  <span>
                    <small>Gender</small>
                  </span>
                  <br /> <span>{character.gender}</span>
                </div>
              </div>
            </div>
            <div className="second-part theme-border">
              <div className="details-icon">
                <img src={origin} alt="" />
              </div>
              <div>
                <div>
                  <span>
                    {" "}
                    <small>Origin</small>{" "}
                  </span>{" "}
                  <br />
                  <div className="second-part-lower">
                    <span>{character?.origin?.name}</span>
                    <div className="share-icon">
                      <img src={Redirect} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="third-part theme-border">
              <div className="details-icon">
                <img src={Location} alt="" />
              </div>
              <div>
                <div>
                  <span>
                    <small>Last Known Location</small>
                  </span>{" "}
                  <br />
                  <div className="second-part-lower">
                    <span>{character?.origin?.name}</span>
                    <div className="share-icon">
                      <img src={Redirect} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fourth-part theme-border">
              <div className="details-icon">
                <img src={Vector} alt="" />
              </div>
              <div>
                <div>
                  <span>
                    <small> Episodes (S)</small>
                  </span>{" "}
                  <br />
                  <div className="fourth-part-lower">
                    <ul>
                      {character.episode &&
                        character.episode.map((epd, index) => (
                          <EpisodeName key={index} url={epd} />
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="cast-show">
  <Card className="card-container">
    <Card.Body>
      <Card.Title>{character.name}</Card.Title>
    </Card.Body>
    <Card.Img variant="top" src={character.image} />
  </Card>
</div> */}
          {/* <div className="castDetails-show">.</div> */}
        </div>
      )}
    </div>
  );
};

export default CastDetails;
