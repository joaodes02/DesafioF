import Achievement from "../achievement/index.jsx";
import "./achievements.css";

const Achievements = ({ achievements }) => {
  return (
    <>
      <div id="achievements" className="container-achievements">
        <h3>Conquistas</h3>
        {achievements.map((achievement) => (
          <Achievement achievement={achievement} />
        ))}
      </div>
    </>
  );
};

export default Achievements;
