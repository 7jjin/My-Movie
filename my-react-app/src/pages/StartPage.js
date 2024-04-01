/* eslint-disable react/jsx-pascal-case */
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import searchIcon from "../img/search-icon.png";
import homeIcon from "../img/home-icon.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function StartPage() {
  useEffect(() => {
    const time = gsap.timeline();
    time
      .to(".fade-wrap", {
        keyframes: {
          "0%": {
            scaleX: 1,
            skewX: "50deg",
            transformOrigin: "left",
          },
          "100%": {
            scaleX: 0,
            skewX: "0deg",
            transformOrigin: "left",
          },
          easeEach: "power2.out",
        },
        transformOrigin: "left",
        animationFillMode: "both",
        duration: 1.8,
      })
      .to(".char", {
        y: 0,
        stagger: 0.05,
        duration: 0.1,
      })
      .to(".content", {
        opacity: 1,
        duration: 0.3,
        delay: 0.5,
      })
      .to(".home", {
        opacity: 1,
        x: 50,
        duration: 0.5,
      });
  }, []);

  return (
    <>
      <_wrap className="wrap">
        <Link to={"/"}>
          <_homeBox className="home">
            <_homeIcon src={homeIcon} alt="home-icon" />
            <_homeSpan>Home</_homeSpan>
          </_homeBox>
        </Link>

        <_title>
          <div className="char">보</div>
          <div className="char">고</div>
          <div className="char">싶</div>
          <div className="char" style={{ marginRight: "30px" }}>
            은
          </div>
          <div className="char">영</div>
          <div className="char">화</div>
          <div className="char" style={{ marginRight: "30px" }}>
            를
          </div>
          <div className="char">검</div>
          <div className="char">색</div>
          <div className="char">하</div>
          <div className="char">세</div>
          <div className="char">요</div>
        </_title>
        <_contentBox className="content">
          <_input type="text"></_input>
          <_searchImg src={searchIcon} alt="search-icon" />
        </_contentBox>
      </_wrap>
      <_fadeWrap className="fade-wrap"></_fadeWrap>
    </>
  );
}
const _wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #242525;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const _homeBox = styled.div`
  display: flex;
  position: fixed;
  top: 30px;
  left: 30px;
  flex-direction: column;
  align-items: center;
  opacity: 0;
`;
const _homeIcon = styled.img`
  width: 65px;
  height: 65px;
`;
const _homeSpan = styled.span`
  margin-top: 5px;
  font-size: 25px;
  font-weight: 600;
  color: white;
`;

const _title = styled.h2`
  display: flex;
  color: white;
  font-size: 75px;
  font-weight: 700;
  margin: 0px;
  margin-bottom: 115px;
  .char {
    transform: translateY(115px);
    transition: transform 0.5s;
  }
`;

const _contentBox = styled.div`
  display: flex;
  border-bottom: 3px solid white;
  padding-bottom: 10px;
  opacity: 0;
`;

const _input = styled.input`
  outline: none;
  color: white;
  border: none;

  background: none;
  font-size: 48px;
`;

const _searchImg = styled.img`
  width: 74px;
  height: 72px;
`;

const _fadeWrap = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: -37%;
  background-color: grey;
  width: 175%;
  height: 100%;
  transform-origin: left;
  /* animation-fill-mode: both; */
  /* animation: coverleft 2000ms both cubic-bezier(0.77, 0, 0.35, 1.21); */
  @keyframes coverleft {
    0% {
      transform: scaleX(1) skewX(50deg);
      transform-origin: left;
    }
    100% {
      transform: scaleX(0) skewX(3deg);
      transform-origin: left;
    }
  }
`;
