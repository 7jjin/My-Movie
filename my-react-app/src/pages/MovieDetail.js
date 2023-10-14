import { useParams } from "react-router-dom";
import Header from "../component/Header";
import styled from "styled-components";
import Navbar from "../component/Navbar";
import { useSelector } from "react-redux";

import { useEffect, useState } from "react";
import axios from "axios";

const _MainPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 56px 0 0 240px;
  background-color: black;
  color: white;
`;

const _movieInfos = styled.div`
  display: flex;
  padding: 0px 40px 30px;
  margin-top: 100px;
`;

const _postDiv = styled.div`
  width: 169px;
  height: 247px;
  margin-right: 40px;
`;

const _img = styled.img`
  border-radius: 15px;
  width: 100%;
`;
const _titleDiv = styled.div`
  font-size: 45px;
  font-weight: 700;
`;

const _genreDiv = styled.div`
  display: flex;
  margin-top: 10px;
  color: rgb(186, 186, 193);
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
`;

const _subTitle = styled.div`
  margin-top: 10px;
  color: rgb(186, 186, 193);
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 20px;
  max-width: 600px;
  margin: 10px 0px 0px;
  outline: 1px solid black;
  width: 630px;
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
`;

const _ratingDiv = styled.div`
  display: flex;
`;

export default function MovieDetail() {
  const [movieData, setMovieData] = useState([]);
  const { movieName, openDate } = useParams();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const json = await axios({
          method: "GET",
          url: `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&title=${movieName}&releaseDts=${openDate}&ServiceKey=EP520Y4JRPI6ZC781VKW`,
        });
        setMovieData(json.data);
      } catch (error) {
        console.error("Error fetching poster:", error);
      }
    };
    getMovies();
  }, []);

  console.log(movieData);
  return (
    <>
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
                <div className="infos">
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

                  <_subTitle className="subtitle">
                    <span>{value.Result[0].plots.plot[0].plotText}</span>
                  </_subTitle>
                </div>
              </section>
            </_movieInfos>
          );
        })}
        <Header />
        <Navbar />
      </_MainPage>
    </>
  );
}
