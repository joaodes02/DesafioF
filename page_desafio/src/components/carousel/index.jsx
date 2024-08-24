import { Swiper, SwiperSlide } from "swiper/react";
import "./carousel.css";
import { EffectFade } from "swiper/modules";
const Carrosel = () => {
  const images = [
    {
      id: 1,
      image:
        "https://img-cdn.hltv.org/gallerypicture/zSqOxPOrWWmqrkehStFC88.jpg?auto=compress&fm=avif&ixlib=java-2.1.0&m=%2Fm.png&mw=160&mx=30&my=710&q=75&w=1200&s=eeafcc475d797d483caa5b700693dcba",
    },
    {
      id: 2,
      image:
        "https://img-cdn.hltv.org/gallerypicture/oK3VFjQlAJ5_eQ2AiWLCgz.jpg?auto=compress&fm=avif&ixlib=java-2.1.0&m=%2Fm.png&mw=160&mx=30&my=710&q=75&w=1200&s=245d10cd1e84d8ba542cd6becb52c081",
    },
    {
      id: 3,
      image:
        "https://img-cdn.hltv.org/gallerypicture/zu435MCXjBt1LrW8pWyLvw.jpg?auto=compress&fm=avif&ixlib=java-2.1.0&m=%2Fm.png&mw=160&mx=30&my=710&q=75&w=1200&s=37a307ef6aac3aedcc4d817a3a6be41d",
    },
  ];
  return (
    <div className="carrosel">
      <Swiper
        data-swiper-autoplay="500"
        modules={[EffectFade]}
        effect="fade"
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={true}
        navigation
      >
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="Slider" className="slide-item" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrosel;
