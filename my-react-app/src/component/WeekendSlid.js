import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useBoxOffice from "../hooks/useBoxOffice";
import getCurrentDate from "../libs/date.js";

export default function WeekendSlid() {
  const { weekendMovieList } = useSelector((state) => state.weekendMovieChart);
  const dispatch = useDispatch();
  const date = getCurrentDate();
  const url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${process.env.REACT_APP_BOXOFFICE_SECRETKEY}&targetDt=${date}&weekGb=0`;

  // 주간 박스오피스 정보 가져오는 custom-hook
  useBoxOffice(dispatch, url, "weeklyBoxOffice");

  return (
    <_customSwiper
      modules={[Navigation, A11y]}
      spaceBetween={10}
      slidesPerView={5}
      navigation
      slidesPerGroup={5} // 그룹 당 슬라이드 수 설정
      //   onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      breakpoints={{
        // 1300px 이상일 때
        1300: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        // 1024px 이상일 때
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
          slidesPerGroup: 4, // 그룹 당 슬라이드 수 설정
        },
        // 768px 이상일 때
        750: {
          slidesPerView: 3,
          slidesPerGroup: 3, // 그룹 당 슬라이드 수 설정
        },
        375: {
          slidesPerView: 2,
          slidesPerGroup: 2, // 그룹 당 슬라이드 수 설정
        },
      }}
    >
      {weekendMovieList.map((movie) => {
        return (
          <>
            <SwiperSlide key={movie.rnum}>
              <div>
                <_imgWrapper>
                  <Link to={`/movie/${movie.movieNm}/${movie.openDt.replaceAll("-", "")}`}>
                    <_movieImg src={movie.poster} alt={movie.poster} loading="lazy" decoding="async" />
                    <_movieRank>{movie.rnum}</_movieRank>
                  </Link>
                </_imgWrapper>

                <_movieBox>
                  <_movieName>{movie.movieNm}</_movieName>
                  <div>
                    {movie.audiChange > 0 ? (
                      <span>저번주보다 {movie.audiChange}% 🔥 </span>
                    ) : (
                      <span>전번주보다 {movie.audiChange}% 👎</span>
                    )}
                  </div>
                </_movieBox>
              </div>
            </SwiperSlide>
          </>
        );
      })}
    </_customSwiper>
  );
}

//  styled-components
const _movieImg = styled.img`
  height: 234px;
  border-radius: 15px;
  width: 80%;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.09) 35%, rgba(0, 0, 0, 0.85));
  @media (max-width: 1300px) {
    height: 210px;
  }
  @media (max-width: 750px) {
    height: 175px;
    width: 83%;
  }
`;
const _movieBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 10px;
  font-size: 13px;
  width: 80%;
  color: black;
  font-weight: 700;
  @media (max-width: 750px) {
    width: 83%;
  }
  @media (max-width: 500px) {
    font-size: 11px;
  }
`;

const _movieName = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const _imgWrapper = styled.div`
  position: relative;
`;

const _movieRank = styled.div`
  font-style: italic;
  color: white;
  font-size: 39px;
  bottom: 0px;
  left: 11px;
  position: absolute;
`;

const _customSwiper = styled(Swiper)`
  position: initial;
  .swiper-button-prev,
  .swiper-button-next {
    border-radius: 50%; /* 동그란 모양으로 설정 */
    color: #000; /* 텍스트 색상 설정 */
    width: 40px; /* 버튼 너비 설정 */
    height: 40px; /* 버튼 높이 설정 */
    background: rgba(255, 255, 255, 0.8) center/9px 13px scroll no-repeat;
    cursor: pointer;

    &:hover {
      background-color: #000; /* Hover 상태의 배경 색상 설정 */
      color: #fff; /* Hover 상태의 텍스트 색상 설정 */
    }
  }
  .swiper-button-prev {
    left: 12px !important;
    top: 55%;
    @media (max-width: 500px) {
      width: 30px;
      height: 30px;
    }
  }
  .swiper-button-next {
    top: 55%;
    right: 50px !important;
    @media (max-width: 750px) {
      right: 55px !important;
    }
    @media (max-width: 500px) {
      right: 41px !important;
      width: 30px;
      height: 30px;
    }
  }
  .swiper-button-next:after {
    font-size: 10px;
  }
  .swiper-button-prev:after {
    font-size: 10px;
    right: -10px !important;
  }
`;
