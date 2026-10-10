import './App.css';
import PlayersList from './PlayersList';

function App() {
  return (
    <main className="app-shell">
      <header className="page-heading">
        <p className="eyebrow">FIFA Ultimate Team · 2025/26</p>
        <h1>LEGENDS <span>&</span> GAME CHANGERS</h1>
        <p className="page-description">
          The names, numbers, and nations behind the beautiful game.
        </p>
      </header>
      <PlayersList />
      <footer className="page-footer">THE WORLD'S GAME · BUILT DIFFERENT</footer>
    </main>
  );
}

export default App;
