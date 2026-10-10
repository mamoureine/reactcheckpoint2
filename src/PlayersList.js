import Player from './Player';
import players from './players';

function PlayersList() {
  return (
    <section className="players-grid" aria-label="Featured football players">
      {players.map((player) => (
        <Player key={player.name} {...player} />
      ))}
    </section>
  );
}

export default PlayersList;
