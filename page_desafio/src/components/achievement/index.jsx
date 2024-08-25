import "./achievement.css";
import ouro from "../../assets/images/ouro.png";
import prata from "../../assets/images/prata.png";
import bronze from "../../assets/images/bronze.png";

const Achievement = ({ achievement }) => {
  function goToSite() {
    var win = window.open(achievement.url, "_blank");
    win.focus();
  }

  return (
    <>
      <div
        onClick={goToSite}
        id={"medal" + achievement.id}
        className="info-achievement"
      >
        <div className="achievement-position">
          <img
            width="55px"
            src={
              achievement.position === "1º"
                ? ouro
                : achievement.position === "2º"
                  ? prata
                  : bronze
            }
            alt="Medal Gold"
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
