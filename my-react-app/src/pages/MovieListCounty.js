import { useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import GenreList from "../component/GenreList";
import Header from "../component/Header";
import Navbar from "../component/Navbar";

import { useDispatch, useSelector } from "react-redux";
import GlobalStyles from "../component/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../component/theme";
import useBoxOffice from "../hooks/useBoxOffice";

export default function MovieListCounty() {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieListCountry = searchParams.get("country");
  const genreList = useSelector((state) => state.genreList);
  const isDarkMode = useSelector((state) => state.app.isDarkMode);

  const dispatch = useDispatch();
  // 영화 리스트 API호출 훅
  useBoxOffice(dispatch, movieListCountry + "MovieList");

  const { koreaMovieList } = useSelector((state) => state.koreaMovieList);
  const { japenMovieList } = useSelector((state) => state.japenMovieList);
  const { usMovieList } = useSelector((state) => state.usMovieList);
  const { etcMovieList } = useSelector((state) => state.etcMovieList);

  // 영화 리스트
  const [movieList, setMovieList] = useState();

  const [title, setTitle] = useState();
  useEffect(() => {
    if (movieListCountry === "Korea") {
      setMovieList(koreaMovieList);
      setTitle("한국영화");
    } else if (movieListCountry === "Japen") {
      setMovieList(japenMovieList);
      setTitle("일본영화");
    } else if (movieListCountry === "Us") {
      setMovieList(usMovieList);
      setTitle("미국영화");
    } else if (movieListCountry === "Etc") {
      setMovieList(etcMovieList);
      setTitle("기타영화");
    }
  }, [koreaMovieList, japenMovieList, usMovieList, etcMovieList]);

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <_MainPage>
          <_bigWrapper className="BigWrapper">
            <h1>{title}</h1>
            <h3>장르선택</h3>
            <hr style={{ width: "89%" }} />
            <GenreList />
            <_section>
              <_ul>
                {movieList &&
                  movieList
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
