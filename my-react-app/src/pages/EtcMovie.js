import React, { useEffect, useState } from "react";
import GenreList from "../component/GenreList";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { etcMovieListAction } from "../store/etcMovie";
import GlobalStyles from "../component/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, NavbarDark, NavbarLight } from "../component/theme";

const _MainPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 56px 0 0 240px;
  @media (max-width: 900px) {
    padding-left: 0px;
  }
`;
const _bigWrapper = styled.div`
  padding: 0px 40px;
  padding-top: 54px;
  min-height: 100vh;
  background-color: ${(props) => props.theme.originBlack};
  @media (max-width: 900px) {
    padding-bottom: 100px;
  }
  @media (max-width: 500px) {
    font-size: 23px;
    padding: 0px 15px 100px;
  }
  h1,
  h3 {
    color: ${(props) => props.theme.color};
  }
  h1 {
    font-weight: 800;
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    @media (max-width: 700px) {
      font-size: 28px;
    }
  }
  h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    @media (max-width: 700px) {
      font-size: 16px;
    }
    @media (max-width: 500px) {
      font-size: 13px;
    }
  }
  hr {
    background-color: rgb(27, 28, 29);
    width: 100%;
    height: 1px;
    padding: 0px;
    border: none;
    margin: 0px;
  }
`;

const _section = styled.section``;

const _ul = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0px;
  padding: 0px;
`;

const _li = styled.li`
  width: 18%;
  list-style: none;
  padding: 0px 6px;
  margin-bottom: 5px;
  cursor: pointer;
  border-radius: 4px;
  @media (max-width: 500px) {
    width: 25%;
  }
`;

const _img = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export default function KoreaMovie() {
  const { etcMovieList } = useSelector((state) => state.etcMovieList);
  const genreList = useSelector((state) => state.genreList);
  const isDarkMode = useSelector((state) => state.app.isDarkMode);

  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios({
          method: "GET",
          url: `https://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=f5eef3421c602c6cb7ea224104795888&repNationCd=22049999&movieTypeCd=220101&openStartDt=2010&openEndDt=2022&itemPerPage=100`,
        });
        console.log(res.data);
        const movieList = res.data.movieListResult.movieList;

        // 각 영화에 대한 포스터 호출
        const moviePromises = movieList.map((movie) => getMovies(movie));
        const moviesWithPosters = await Promise.all(moviePromises);

        const updatedMovieList = movieList.map((movie, index) => ({
          ...movie,
          poster: moviesWithPosters[index],
        }));
        dispatch(etcMovieListAction.isLoding(updatedMovieList));
      } catch (error) {
        console.log(error);
      }
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
        console.error("Error", error);
      }
    };
    getData();
  }, []);
  // console.log(koreaMovieList);
  console.log(genreList);
  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <_MainPage>
          <_bigWrapper className="BigWrapper">
            <h1>기타 영화</h1>
            <h3>장르선택</h3>
            <hr />
            <GenreList />
            <_section>
              <_ul>
                {etcMovieList
                  .filter((movie) => {
                    // 선택한 장르 목록에 어떤 장르가 포함되어 있으면 해당 장르의 영화만 표시
                    return genreList.length === 0 || genreList.includes(movie.genreAlt.split(",")[0]);
                  })
                  .filter((movie) => movie.poster)
                  .map((movie) => {
                    return (
                      <_li key={movie.rnum}>
                        <_img src={movie.poster} />
                      </_li>
                    );
                  })}
              </_ul>
            </_section>
          </_bigWrapper>
        </_MainPage>
        <Header />
        <Navbar />
      </ThemeProvider>
    </>
  );
}
