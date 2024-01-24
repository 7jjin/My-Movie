import { useParams } from "react-router-dom";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import axios from "axios";
import StillCut from "../component/StillCut";
import ContentSelectBar from "../component/ContentSelectBar";
import RelativeMovie from "../component/RelativeMovie";
import GlobalStyles from "../component/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../component/theme";

export default function MovieDetail() {
  const [movieData, setMovieData] = useState([]);
  const { movieName, openDate } = useParams();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const json = await axios({
          method: "GET",
          url: `https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&title=${movieName}&releaseDts=${openDate}&ServiceKey=EP520Y4JRPI6ZC781VKW`,
        });
        setMovieData(json.data);
      } catch (error) {
        console.error("Error fetching poster:", error);
      }
    };
    getMovies();
  }, []);

  // RelativeMovie 컴포넌트로 전달할 props 객체 만들기
  const movieInfos = {};

  if (
    movieData &&
    movieData.Data &&
    movieData.Data.length > 0 &&
    movieData.Data[0].Result &&
    movieData.Data[0].Result.length > 0
  ) {
    movieInfos.nation = movieData.Data[0].Result[0].nation;
    movieInfos.use = movieData.Data[0].Result[0].use;
    movieInfos.actor = movieData.Data[0].Result[0].actors.actor[0].actorNm;
  } else {
    console.log("데이터를 사용할 수 없습니다.");
  }
  const isDarkMode = useSelector((state) => state.app.isDarkMode);

  const content = useSelector((state) => state.content.content);
  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <_MainPage>
          {movieData.Data?.map((value) => {
            return (
              <_movieInfos key={value.CollName}>
                {/* {value.Result[0].posters.split("|")[0]} */}
                <section className="imgBox">
                  <_postDiv className="post">
                    <_img src={value.Result[0].posters.split("|")[0]} />
                  </_postDiv>
                </section>
                <section className="infoBox">
                  <_infos className="infos">
                    <_titleDiv className="title">
                      <span>{movieName}</span>
                    </_titleDiv>
                    <_genreDiv>
                      <div className="gerne">
                        {value.Result[0].genre.split(",").length > 2 ? (
                          <span>
                            {value.Result[0].genre.split(",")[0]},{value.Result[0].genre.split(",")[1]}
                          </span>
                        ) : (
                          <span>{value.Result[0].genre}</span>
                        )}
                      </div>

                      <p>|</p>

                      <_ratingDiv className="rating">
                        <span>{value.Result[0].runtime}분</span>
                        <p>|</p>
                        <span>{value.Result[0].ratings.rating[0].ratingGrade}</span>
                      </_ratingDiv>
                    </_genreDiv>
                    <_actorDiv className="actor">
                      {value.Result[0].actors.actor.length > 3 ? (
                        <span>
                          배우 : {value.Result[0].actors.actor[0].actorNm},{value.Result[0].actors.actor[1].actorNm},
                          {value.Result[0].actors.actor[2].actorNm}
                        </span>
                      ) : (
                        <span>{value.Result[0].actors.actor[0].actorNm}</span>
                      )}
                    </_actorDiv>

                    <_subTitle className="subtitle">
                      <span>{value.Result[0].plots.plot[0].plotText}</span>
                    </_subTitle>
                  </_infos>
                </section>
              </_movieInfos>
            );
          })}
          <_sectionDiv>
            <div>
              <_playButton>
                <_playButtonInnerDiv>
                  <_playButtonSvg>
                    <FontAwesomeIcon icon={faPlay} />
                  </_playButtonSvg>
                  <span>무료로 감상하기</span>
                </_playButtonInnerDiv>
              </_playButton>
            </div>
          </_sectionDiv>
          <ContentSelectBar />
          {content === "stillCut" ? <StillCut /> : <RelativeMovie movieInfos={movieInfos} />}
          <Header />
          <Navbar />
        </_MainPage>
      </ThemeProvider>
    </>
  );
}
const _MainPage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 56px 0 0 240px;
  background-color: ${(props) => props.theme.mainWrapper};
  color: ${(props) => props.theme.color};
  @media (max-width: 900px) {
    padding-left: 0px;
  }
`;

const _movieInfos = styled.div`
  display: flex;
  padding: 0px 40px 30px;
  margin-top: 100px;
  @media (max-width: 900px) {
    margin-top: 50px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    .imgBox {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;

const _postDiv = styled.div`
  width: 169px;
  height: 247px;
  margin-right: 40px;
  @media (max-width: 700px) {
    margin-right: 0px;
  }
`;

const _img = styled.img`
  border-radius: 15px;
  width: 100%;
`;
const _titleDiv = styled.div`
  font-size: 45px;
  font-weight: 700;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const _genreDiv = styled.div`
  display: flex;
  margin-top: 10px;
  color: ${(props) => props.theme.MovieDetailSpan};
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 20px;
  white-space: pre;
  p {
    margin: 0px;
    font-size: 1px;
    margin: 0px 5px;
  }
  @media (max-width: 700px) {
    justify-content: center;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const _subTitle = styled.div`
  margin-top: 10px;
  color: ${(props) => props.theme.MovieDetailSpan};
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 20px;
  max-width: 600px;
  margin: 10px 0px 0px;
  outline: ${(props) => props.theme.movieDetailOutline};
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  line-height: 1.2;
  height: 3.6em;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const _ratingDiv = styled.div`
  display: flex;
`;

const _actorDiv = styled.div`
  margin-top: 10px;
  color: ${(props) => props.theme.MovieDetailSpan};
  font-size: 15px;
  font-weight: 400;
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const _sectionDiv = styled.section`
  padding: 16px 40px;
`;

const _playButton = styled.button`
  padding: 10px 16px;
  color: white;
  background: rgb(248, 47, 98);
  display: flex;
  border: none;
  border-radius: 4px;
  &:hover {
    background: rgb(255, 61, 110);
  }
  @media (max-width: 500px) {
    padding: 5px 8px;
  }
`;
const _playButtonInnerDiv = styled.div`
  display: flex;
  align-items: center;
`;
const _playButtonSvg = styled.div`
  margin-right: 5px;
`;

const _infos = styled.div`
  @media (max-width: 700px) {
    text-align: center;
  }
`;
