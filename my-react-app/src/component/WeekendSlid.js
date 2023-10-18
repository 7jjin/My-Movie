import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { WeekendMovieChartAction } from "../store/weekendMovieChart";

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

// 날짜를 YYYY/MM/DD형식으로 바꾸기
function getCurrentDate() {
  var date = new Date();
  var year = date.getFullYear().toString();
  var month = date.getMonth() + 1;
  month = month < 10 ? "0" + month.toString() : month.toString();

  var day = date.getDate();
  day = day < 10 ? "0" + day.toString() : day.toString();

  return year + month + day - 7;
}

export default function WeekendSlid() {
  const { weekendMovieList } = useSelector((state) => state.weekendMovieChart);

  const dispatch = useDispatch();

  let now = getCurrentDate();

  useEffect(() => {
    // 박스오피스 영화 데이터 가져오는 함수
    const getData = async () => {
      const res = await axios({
        method: "GET",
        url: `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${now}&weekGb=0`,
      });

      const boxOfficeMovies = res.data.boxOfficeResult.weeklyBoxOfficeList;

      // 각 영화에 대해 getMovies 함수를 호출
      const moviePromises = boxOfficeMovies.map((movie) => getMovies(movie));
      const moviesWithPosters = await Promise.all(moviePromises);

      const updatedMovieList = boxOfficeMovies.map((movie, index) => ({
        ...movie,
        poster: moviesWithPosters[index],
      }));
      dispatch(WeekendMovieChartAction.isLoading(updatedMovieList));
    };

    // 박스오피스 영화 데이터의 영화제목과 개봉일 정보를 인자로 받아와 포스터를 가져오는 함수
    const getMovies = async (movie) => {
      try {
        const json = await axios({
          method: "GET",
          url: `https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&title=${
            movie.movieNm
          }&releaseDts=${movie.openDt.replaceAll("-", "")}&ServiceKey=EP520Y4JRPI6ZC781VKW`,
        });
        const posterURL = json.data.Data[0].Result[0].posters.split("|")[0];
        const title = json.data.Data[0].Result[0].title;
        return posterURL;
      } catch (error) {
        console.error("Error fetching poster:", error);
      }
    };

    getData();
  }, [now]);

  return (
    <_customSwiper
      modules={[Navigation, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      slidesPerGroup={1} // 그룹 당 슬라이드 수 설정
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
                    <_movieImg src={movie.poster} />
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
