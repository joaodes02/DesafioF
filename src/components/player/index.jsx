import "./player.css";

const Player = ({ player }) => {
  function goToPlayer() {
    var win = window.open(player.url, "_blank");
    win.focus();
  }

  return (
    <div
      onClick={goToPlayer}
      id={"player" + player.id}
      className="container-player"
    >
      <img
        width="255px"
        height="275px"
        src={player.imageUrl}
        alt={"Foto" + player.name}
      />
      <div className="info-player">
        <strong>{player.name}</strong>
        <span>{player.function}</span>
      </div>
    </div>
  );
};

export default Player;
