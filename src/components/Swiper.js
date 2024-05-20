import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";
import LoginpageImage from "../images/LoginpageImage.jpg";
import HomepageImage from "../images/homepageMainImage.jpg";
import image3 from "../images/image3.png";
import "swiper/css/zoom";
import "swiper/css/pagination";

export default () => {
  return (
    <Swiper
      style={{
        "--swiper-theme-color": "#fff",
        "--swiper-navigation-size": "70px",
      }}
      loop={true}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="swiper"
    >
      <SwiperSlide>
        <img src={HomepageImage} alt="logo" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={LoginpageImage} alt="logo" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image3} alt="logo" />
      </SwiperSlide>
    </Swiper>
  );
};
