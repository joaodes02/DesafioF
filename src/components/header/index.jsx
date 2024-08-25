import "./header.css";
// import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="navbar">
        <img
          src="https://seeklogo.com/images/F/furia-esports-logo-C7F0FAD39C-seeklogo.com.png"
          width="65px"
          alt="Logo Furia"
        />
        <div className="titles">
          <h4>
            <a href="#players">JOGADORES</a>
          </h4>
          <h4>
            <a href="#achievements">CONQUISTAS</a>
          </h4>
          <h4>
            <a href="#footer">SOBRE</a>
          </h4>
        </div>
      </div>
      <div className="user">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
          width="25px"
          alt="User"
        />
      </div>
    </header>
  );
};

export default Header;
