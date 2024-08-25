import { useState } from "react";
import Header from "./components/header/index.jsx";
import Carrosel from "./components/carousel/index.jsx";
import Players from "./components/players/index.jsx";
import Achievements from "./components/achievements/index.jsx";
import Footer from "./components/footer/index.jsx";

function App() {
  const players = [
    {
      id: "1",
      imageUrl:
        "https://img-cdn.hltv.org/playerbodyshot/EQuPdPSxo2xmXDwwoVRx4j.png?ixlib=java-2.1.0&w=400&s=a22c84e43ee55c164fbb59fbb35366a6",
      name: "Gabriel 'Fallen' Tolledo",
      function: "Awper - IGL",
      url: "https://www.hltv.org/player/2023/fallen",
    },
    {
      id: "2",
      imageUrl:
        "https://profilerr.net/static/content/thumbs/335x335/8/1b/5czsw6---c1x1x200px0p-rc--896e09b773a6f21682fc7bad28fee1b8.png",
      name: "Marcelo 'chelo' Cespede",
      function: "Entry-fragger",
      url: "https://www.hltv.org/player/10566/chelo",
    },
    {
      id: "3",
      imageUrl:
        "https://img-cdn.hltv.org/playerbodyshot/FxsN1PVin9cB-2FPzklmaQ.png?ixlib=java-2.1.0&w=400&s=d99c29eab43c3e4f9b1c54b8ba494b22",
      name: "Yuri 'yuurih' Santos",
      function: "Rifler",
      url: "https://www.hltv.org/player/12553/yuurih",
    },
    {
      id: "4",
      imageUrl:
        "https://img-cdn.hltv.org/playerbodyshot/fqwcgzlPrkI1C5lFXiJhrj.png?ixlib=java-2.1.0&w=400&s=cde89d636742c79d559fe20d403b16bc",
      name: "Kaike 'KSCERATO' Cerato",
      function: "Rifler",
      url: "https://www.hltv.org/player/15631/kscerato",
    },
    {
      id: "5",
      imageUrl:
        "https://img-cdn.hltv.org/playerbodyshot/-JQfNT1ijoDX06XY6vO4PF.png?ixlib=java-2.1.0&w=400&s=a3b12775be6f8f6f41cf389b141ca52d",
      name: "Felipe 'skullz' Medeiros",
      function: "Rifler",
      url: "https://www.hltv.org/player/18676/skullz",
    },
  ];
  const achievements = [
    {
      id: "1",
      position: "1º",
      date: "Nov - 2023",
      camp: "Elisa Masters Espoo 2023",
      local: "Espoo, Finlândia",
      url: "https://liquipedia.net/counterstrike/Elisa/Masters/2023",
    },
    {
      id: "2",
      position: "3º - 4º",
      date: "Jun - 2023",
      camp: "Intel Extreme Masters Season XVII - Dallas",
      local: "Dallas, EUA",
      url: "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/Season_XVII/Dallas",
    },
    {
      id: "3",
      position: "3º - 4º",
      date: "Ago - 2022",
      camp: "ESL Pro League Season 15",
      local: "Online, NA",
      url: "https://liquipedia.net/counterstrike/ESL/Pro_League/Season_15",
    },
    {
      id: "4",
      position: "3º - 4º",
      date: "Out - 2022",
      camp: "IEM Rio Major",
      local: "Rio de Janeiro, Brazil",
      url: "https://liquipedia.net/counterstrike/Intel_Extreme_Masters/2022/Rio",
    },
    {
      id: "5",
      position: "3º - 4º",
      date: "Out - 2021",
      camp: "ESL Pro League Season 13",
      local: "Online, NA",
      url: "https://liquipedia.net/counterstrike/ESL/Pro_League/Season_13",
    },
    {
      id: "6",
      position: "1º",
      date: "Set - 2020",
      camp: "ESL Pro League Season 12",
      local: "Online, NA",
      url: "https://www.hltv.org/events/5495/esl-pro-league-season-12-north-america",
    },
    {
      id: "7",
      position: "3º - 4º",
      date: "Out - 2020",
      camp: "ESL Pro League Season 11",
      local: "Online, NA",
      url: "https://www.hltv.org/events/5246/esl-pro-league-season-11-north-america",
    },
    {
      id: "8",
      position: "2º",
      date: "Jun - 2019",
      camp: "Esport Championship Series Season 7",
      local: "Dallas, EUA",
      url: "https://liquipedia.net/counterstrike/Esports_Championship_Series/Season_7",
    },
    {
      id: "9",
      position: "3º - 4º",
      date: "Jun - 2019",
      camp: "DreamHack Masters Dallas 2019",
      local: "Dallas, EUA",
      url: "https://liquipedia.net/counterstrike/DreamHack/2019/Dallas",
    },
  ];

  return (
    <>
      <Header />
      <Carrosel />
      <Players players={players} />
      <Achievements achievements={achievements} />
      <Footer />
    </>
  );
}

export default App;
