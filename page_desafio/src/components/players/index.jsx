import Player from "../player/index.jsx";
import "./players.css";

const Players = ({ players }) => {
  return (
    <>
      <h2 id="players">Counter-Strike 2</h2>
      <div className="container-players">
        {players.map((player) => (
          <Player player={player}></Player>
        ))}
      </div>
    </>
  );
};

export default Players;
