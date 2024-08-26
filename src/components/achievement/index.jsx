import "./achievement.css";
import ouro from "../../assets/images/ouro.png";
import prata from "../../assets/images/prata.png";
import bronze from "../../assets/images/bronze.png";

const Achievement = ({ achievement }) => {
  const { id, position, date, camp, local, url } = achievement;

  function goToSite() {
    var win = window.open(achievement.url, "_blank");
    win.focus();
  }

  const getMedalImage = (position) => {
    switch (position) {
      case "1º":
        return ouro;
      case "2º":
        return prata;
      case "3º":
        return bronze;
      default:
        return bronze;
    }
  };

  return (
    <>
      <div
        onClick={goToSite}
        id={"medal" + achievement.id}
        className="info-achievement"
      >
        <div className="achievement-position">
          <img
            width="30px"
            src={getMedalImage(position)}
            alt={`Medal ${position}`}
          />
          <span>{achievement.position}</span>
        </div>
        <span>{achievement.date}</span>
        <span id="camp">{achievement.camp}</span>
        <span>{achievement.local}</span>
      </div>
    </>
  );
};

export default Achievement;
