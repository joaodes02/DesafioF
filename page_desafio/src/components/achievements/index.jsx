import Achievement from "../Achievement/index.jsx";
import "./achievements.css";

const Achievements = ({ achievements }) => {
  return (
    <>
      <div id="achievements" className="container-achievements">
        <h3>Conquistas</h3>
        {achievements.map((achievement) => (
          <Achievement achievement={achievement}></Achievement>
        ))}
      </div>
    </>
  );
};

export default Achievements;
