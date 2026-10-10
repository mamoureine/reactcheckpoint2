import Card from 'react-bootstrap/Card';

function Player({ name, team, nationality, jerseyNumber, age, imageUrl }) {
  return (
    <Card className="player-card h-100" style={{ position: 'relative' }}>
      <span className="player-number" aria-label={`Jersey number ${jerseyNumber}`}>
        {jerseyNumber}
      </span>
      <Card.Img
        className="player-card-image"
        variant="top"
        src={imageUrl}
        alt={name}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <p className="player-team">{team}</p>
        <dl className="player-details">
          <div>
            <dt>Nationality</dt>
            <dd>{nationality}</dd>
          </div>
          <div>
            <dt>Age</dt>
            <dd>{age}</dd>
          </div>
          <div>
            <dt>Jersey</dt>
            <dd>#{jerseyNumber}</dd>
          </div>
          <div>
            <dt>Club</dt>
            <dd>{team}</dd>
          </div>
        </dl>
      </Card.Body>
    </Card>
  );
}

Player.defaultProps = {
  name: 'Unknown Player',
  team: 'Free Agent',
  nationality: 'Unknown',
  jerseyNumber: 0,
  age: 'N/A',
  imageUrl: 'https://cdn.sofifa.net/players/000/000/25_120.png',
};

export default Player;
