<div className="castDetails-container">
  <div className="cast-details row">
    <div className="left-side">
      <h2 className="character-name">{character.name}</h2>
      <img src={character.image} alt="" />
    </div>

    <div className="right-side">
      <div className="first-part flex-row">
        <div>
          <div className="details-icon">
            <img src={Status} alt="" />
          </div>
          <div>
            <span>Status</span> <br /> <span>{character.status}</span>
          </div>
        </div>

        <div>
          <div className="details-icon">
            <img src={Status} alt="" />
          </div>
          <div>
            <span>Status</span> <br /> <span>{character.status}</span>
          </div>
        </div>

        <div>
          <div className="details-icon">
            <img src={Status} alt="" />
          </div>
          <div>
            <span>Status</span> <br /> <span>{character.status}</span>
          </div>
        </div>
      </div>
      <div className="second-part"></div>
      <div className="third-part"></div>
      <div className="fourth-part"></div>
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
</div>;
