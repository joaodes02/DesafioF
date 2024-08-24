import "./footer.css";
import twitter from "../../assets/images/twitter.png";
import youtube from "../../assets/images/youtube.png";
import tiktok from "../../assets/images/tiktok.png";
import instagram from "../../assets/images/instagram.png";

const Footer = () => {
  const widthIcons = "35px";
  return (
    <div className="footer" id="footer">
      <div className="icons">
        <a href="https://www.instagram.com/furiagg/" target="_blank">
          <img width={widthIcons} src={instagram} alt="Instagram" />
        </a>
        <a href="https://x.com/FURIA" target="_blank">
          <img width={widthIcons} src={twitter} alt="X" />
        </a>
        <a href="https://www.youtube.com/@FURIAggCS" target="_blank">
          <img width={widthIcons} src={youtube} alt="youtube" />
        </a>
        <a href="https://www.tiktok.com/@furia" target="_blank">
          <img width={widthIcons} src={tiktok} alt="TikTok" />
        </a>
      </div>
      <div className="container-footer">
        <div className="image">
          <img
            width="150px"
            src="https://seeklogo.com/images/F/furia-esports-logo-C7F0FAD39C-seeklogo.com.png"
            alt="logo"
          />
        </div>
        <div className="text">
          <span>
            Nascida em 2017, a FURIA Esports rapidamente se tornou uma das
            equipes de esports mais respeitadas e reconhecidas no cenário
            global. Com o Counter-Strike correndo em nossas veias, somos movidos
            pela paixão e pela determinação de sempre alcançar o topo. Compomos
            nosso legado em várias modalidades, incluindo Counter-Strike 2, onde
            conquistamos vitórias épicas e aprendemos lições valiosas. Para nós,
            não existe derrota — só existe a vontade incessante de sermos os
            melhores. E nunca, jamais, ficamos satisfeitos com nada menos do que
            a excelência em cada jogo que disputamos.
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
