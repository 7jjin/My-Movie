import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import movie1 from "../img/movie1.jpg";
import movie2 from "../img/movie2.jpg";
import movie3 from "../img/movie3.jpg";
import movie4 from "../img/movie4.jpg";
import movie5 from "../img/movie5.jpg";
import movie6 from "../img/movie6.jpg";
import movie7 from "../img/movie7.jpg";
import movie8 from "../img/movie8.jpg";
import movie9 from "../img/movie9.jpg";
import styled from "styled-components";
import { useEffect, useState } from "react";

const _movieImg = styled.img`
  height: 234px;
  border-radius: 15px;
  width: 80%;
`;
const _movieBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  width: 80%;
  color: black;
  font-weight: 700;
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
  font-size: 33px;
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
    top: 200px;
  }
  .swiper-button-next {
    right: 55px !important;
    top: 200px;
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

  return year + month + day - 1;
}

export default function MainSlide() {
  const [movieList, setMovieList] = useState([]);

  let now = getCurrentDate();

  useEffect(() => {
    // 박스오피스 영화 데이터 가져오는 함수
    const getData = async () => {
      const res = await axios({
        method: "GET",
        url: `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=4c5de9e925edf65fae959e9305f483ce&targetDt=${now}`,
      });

      const boxOfficeMovies = res.data.boxOfficeResult.dailyBoxOfficeList;

      // 각 영화에 대해 getMovies 함수를 호출
      const moviePromises = boxOfficeMovies.map((movie) => getMovies(movie));
      const moviesWithPosters = await Promise.all(moviePromises);

      const updatedMovieList = boxOfficeMovies.map((movie, index) => ({
        ...movie,
        poster: moviesWithPosters[index],
      }));

      setMovieList(updatedMovieList);
    };

    // 박스오피스 영화 데이터의 영화제목과 개봉일 정보를 인자로 받아와 포스터를 가져오는 함수
    const getMovies = async (movie) => {
      try {
        const json = await axios({
          method: "GET",
          url: `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&title=${
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
      spaceBetween={30}
      slidesPerView={5}
      navigation
      slidesPerGroup={5} // 그룹 당 슬라이드 수 설정
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {movieList.map((movie) => {
        return (
          <>
            <SwiperSlide key={movie.rnum}>
              <div>
                <_imgWrapper>
                  <_movieImg src={movie.poster} />
                  <_movieRank>{movie.rnum}</_movieRank>
                </_imgWrapper>

                <_movieBox>
                  <_movieName>{movie.movieNm}</_movieName>
                  <div>
                    {movie.audiChange > 0 ? (
                      <span>어제보다 {movie.audiChange}% 🔥 </span>
                    ) : (
                      <span>어제보다 {movie.audiChange}% 👎</span>
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
