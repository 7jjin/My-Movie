import styled from "styled-components";
import { Link } from "react-router-dom";
import koreaMovieImg from "../img/jinCha_korea.webp";
import japenMovieImg from "../img/jinCha_japen.webp";
import usMovieImg from "../img/jinCha_us.webp";
import etcMovieImg from "../img/jinCha_etc.webp";

export default function Country() {
  return (
    <>
      <_CountryWrapper className="CountryWrapper">
        <_title className="title">나라별 추천 영화</_title>
        <_countryBox className="countryBox">
          <Link to={"/movieList?country=Korea"}>
            <_countryKorea>
              <div className="Korea">
                <span>한국</span>
                <_img src={koreaMovieImg} rel="preload" loading="lazy" alt="koreaMovie"></_img>
              </div>
            </_countryKorea>
          </Link>

          <Link to={"/movieList?country=Japen"}>
            <_countryJapen>
              <div className="Japen">
                <span>일본</span>
                <_img src={japenMovieImg} rel="preload" loading="lazy" alt="japenMovie"></_img>
              </div>
            </_countryJapen>
          </Link>

          <Link to={"/movieList?country=Us"}>
            <_countryUS>
              <div className="Us">
                <span>미국</span>
                <_img src={usMovieImg} rel="preload" loading="lazy" alt="usMovie"></_img>
              </div>
            </_countryUS>
          </Link>

          <Link to={"/movieList?country=Etc"}>
            <_countryEtc>
              <div className="Etc">
                <span>기타</span>
                <_img src={etcMovieImg} rel="preload" loading="lazy" alt="etcMovie"></_img>
              </div>
            </_countryEtc>
          </Link>
        </_countryBox>
      </_CountryWrapper>
    </>
  );
}
const _CountryWrapper = styled.div`
  padding-right: 40px;
  padding-left: 40px;
  margin-top: 40px;
  @media (max-width: 500px) {
    padding-bottom: 40px;
  }
`;

const _title = styled.div`
  font-size: 22px;
  line-height: 1.423em;
  font-weight: 700;
  color: ${(props) => props.theme.color};
`;

const _countryBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  div {
    width: 90%;
    height: 165px;
    border-radius: 10px;
    @media (max-width: 750px) {
      height: 140px;
    }
    @media (max-width: 500px) {
      height: 80px;
    }
  }
`;

const _countryKorea = styled.div`
  background: 0% 0% / cover no-repeat rgb(56, 11, 11);
  transform: scale(1.01);
  position: relative;

  div {
    height: 100%;
    border-radius: 10px;
    background: 0% 0% / cover no-repeat rgb(56, 11, 11);
  }
  span {
    color: white;
    position: absolute;
    top: 10px;
    left: 15px;
  }
`;
const _countryJapen = styled.div`
  background: 0% 0% / cover no-repeat rgb(96, 101, 41);
  transform: scale(1.01);
  position: relative;

  div {
    height: 100%;
    border-radius: 10px;
    background: 0% 0% / cover no-repeat rgb(96, 101, 41);
  }
  span {
    color: white;
    position: absolute;
    top: 10px;
    left: 15px;
  }
`;
const _countryUS = styled.div`
  background: 0% 0% / cover no-repeat rgb(26, 71, 113);
  transform: scale(1.01);
  position: relative;
  div {
    height: 100%;
    border-radius: 10px;
    background: 0% 0% / cover no-repeat rgb(26, 71, 113);
  }
  span {
    color: white;
    position: absolute;
    top: 10px;
    left: 15px;
  }
`;
const _countryEtc = styled.div`
  background: 0% 0% / cover no-repeat rgb(39, 63, 55);
  transform: scale(1.01);
  position: relative;

  div {
    height: 100%;
    border-radius: 10px;
    background: 0% 0% / cover no-repeat rgb(39, 63, 55);
  }
  span {
    color: white;
    position: absolute;
    top: 10px;
    left: 15px;
  }
`;

const _img = styled.img`
  width: 100%;
  height: 100%;
`;
