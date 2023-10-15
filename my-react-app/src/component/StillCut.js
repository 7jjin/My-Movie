import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import axios from "axios";

import styled from "styled-components";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const _h1 = styled.h1`
  padding: 0px 40px;
  font-size: 20px;
`;

const _customSwiper = styled(Swiper)`
  position: initial;
  background-color: black;
  .swiper-button-prev,
  .swiper-button-next {
    top: 93px;
    color: white;
  }
  .swiper-button-next {
    right: 46px;
  }
  .swiper-button-prev {
    left: 20px;
  }
`;

const _swiperWrapper = styled.div`
  padding: 10px 80px 32px;
  position: relative;
  .swiper-wrapper {
    transition-timing-function: linear !important;
    transition-duration: 500ms !important;
  }
`;

const _stillImg = styled.img`
  height: 160px;
  border-radius: 15px;
  width: 80%;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.09) 35%, rgba(0, 0, 0, 0.85));
`;

export default function StillCut() {
  const [movieData, setMovieData] = useState([]);
  const { movieName, openDate } = useParams();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(
          `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&title=${movieName}&releaseDts=${openDate}&ServiceKey=EP520Y4JRPI6ZC781VKW`
        );
        const jsonData = response.data.Data[0].Result[0];
        const imageUrls = jsonData.stlls.split("|");
        setMovieData(imageUrls);
      } catch (error) {
        console.error("포스터를 불러오는 중 오류 발생:", error);
      }
    };
    getMovies();
  }, [movieName, openDate]);

  return (
    <>
      <_h1>스틸컷</_h1>
      <_swiperWrapper className="swiperWrppaer">
        <_customSwiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            loop: true,
            loopAdditionalSlides: 1,
            pauseOnMouseEnter: true,
          }}
          onSwiper={(swiper) => {
            swiper.autoplay.start(); // 렌더링 후에 Autoplay를 시작합니다.
          }}
        >
          {movieData.map((imageUrl, index) => (
            <SwiperSlide key={imageUrl}>
              <div>
                <_stillImg src={imageUrl} alt={`스틸 이미지 ${index}`} />
              </div>
            </SwiperSlide>
          ))}
        </_customSwiper>
      </_swiperWrapper>
    </>
  );
}
