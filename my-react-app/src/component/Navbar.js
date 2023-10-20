import ReactDOM from "react-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { titleAction } from "../store/maintitle_h1";
import { Link } from "react-router-dom";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { toggleDarkModeAction } from "../store/darkMode";
import JINCHA_LOGO from "../img/JINCHA_LOGO.png";
const NavbarDiv = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 501;
  background: ${(props) => props.theme.bgColor};

  width: 240px;
  height: 100%;
  @media (max-width: 900px) {
    bottom: 0px;
    width: 100%;
    height: auto;
    top: initial;
  }
`;
const Navbar_a = styled.a`
  display: block;
  margin: 24px 0 0 26px;
  text-decoration: none;
  @media (max-width: 900px) {
    display: none;
  }
`;
const Navbar_img = styled.img`
  vertical-align: top;
  width: 88px;
  height: 26px;
`;
const Section = styled.section`
  padding: 0 16px;
  margin: 45px 0 0;
  @media (max-width: 900px) {
    margin-top: 12px;
    margin-bottom: 12px;
  }
  & > ul {
    list-style: none;
    color: white;
    margin: 0;
    padding: 0;
    @media (max-width: 900px) {
      display: flex;
      padding-right: 165px;
      justify-content: space-between;
    }
    @media (max-width: 500px) {
      padding-right: 30px;
    }
  }
`;

const Nav_a = styled.li`
  display: flex;
  padding: 9px 12px;

  color: ${(props) => props.theme.navbarli};
  cursor: pointer;
  &:hover {
    background: #303133;
    border-radius: 8px;
    color: white;
  }
  @media (max-width: 900px) {
    justify-content: center;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Nav_span = styled.span`
  margin-left: 10px;
  font-weight: 700;
  cursor: pointer;
  @media (max-width: 750px) {
    font-size: 14px;
  }
  @media (max-width: 500px) {
    margin-left: 0px;
    margin-top: 5px;
  }
`;

const _lightmodeli = styled.li`
  box-sizing: border-box;
  padding: 0px 16px;
  left: 0px;
  width: 85%;
  bottom: 30px;
  position: absolute;
  display: flex;
  padding: 9px 12px;
  margin: 0px 16px;

  color: #d4d7db;
  cursor: pointer;
  @media (max-width: 900px) {
    left: initial;
    right: 0px;
    width: initial;
    top: 11px;
    height: 60%;
    margin-right: 16px;
  }
  &:hover {
    background: #303133;
    border-radius: 8px;
    color: white;
    button {
      background: #303133;
      border-radius: 8px;
      color: white;
    }
  }
  @media (max-width: 500px) {
    position: fixed;
    height: fit-content;
    padding: 5px;

    top: 550px;
    .short-text {
      display: flex;
      font-size: 25px;
      background: none;
      border-radius: 50%;
    }
    .full-text {
      display: none; /*  버튼off */
    }
    &:hover {
    }
  }
`;

const _lightModeBtn = styled.button`
  background: ${(props) => props.theme.bgColor};
  border: none;
  color: ${(props) => props.theme.color};
  font-size: 16px;
  display: flex;
  align-items: center;
`;
const _lightModeSpan = styled.span`
  margin-left: 10px;
  font-weight: 700;
  cursor: pointer;
  @media (max-width: 750px) {
    font-size: 14px;
  }
`;

const _li = styled.li`
  .short-text {
    display: none;
  }
  @media (max-width: 900px) {
    display: flex;
    width: 33.3%;
    justify-content: center;
    flex-direction: column;
  }
  @media (max-width: 500px) {
    width: 20%;
    .short-text {
      display: inline; /* Show the short text "일별" */
    }
    .full-text {
      display: none; /* Hide the full text "일별 박스오피스" */
    }
  }
`;

export default function Navbar() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 500);

  // 화면 크기가 변경될 때 이벤트 핸들러를 등록합니다.
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시 이벤트 핸들러를 제거합니다.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //dispatch로 함수 실행
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.app.isDarkMode);
  return (
    <>
      <NavbarDiv>
        <Navbar_a>
          <Navbar_img src={JINCHA_LOGO}></Navbar_img>
        </Navbar_a>
        <Section>
          <ul>
            <_li>
              <Link to={"/"} style={{ textDecoration: "none", width: "100%" }}>
                <Nav_a>
                  <FontAwesomeIcon icon={faHouse} />
                  <Nav_span>홈</Nav_span>
                </Nav_a>
              </Link>
            </_li>
            <_li isSmallScreen={isSmallScreen}>
              <Nav_a onClick={() => dispatch(titleAction.TodayBoxOffice())}>
                <FontAwesomeIcon icon={faHouse} />
                <Nav_span className="full-text">일별 박스오피스</Nav_span>
                <Nav_span className="short-text">일별</Nav_span>
              </Nav_a>
            </_li>
            <_li isSmallScreen={isSmallScreen}>
              <Nav_a onClick={() => dispatch(titleAction.WeekendBoxOffice())}>
                <FontAwesomeIcon icon={faHouse} />
                <Nav_span className="full-text">주간 박스오피스</Nav_span>
                <Nav_span className="short-text">주간</Nav_span>
              </Nav_a>
            </_li>
          </ul>
          <_lightmodeli isSmallScreen={isSmallScreen} onClick={() => dispatch(toggleDarkModeAction.toggleDarkMode())}>
            <_lightModeBtn className="full-text">
              {isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
              <_lightModeSpan>{isDarkMode ? "라이트모드" : "다크모드"}</_lightModeSpan>
            </_lightModeBtn>
            {isSmallScreen && (
              <_lightModeBtn className="short-text">
                {isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
              </_lightModeBtn>
            )}
          </_lightmodeli>
        </Section>
      </NavbarDiv>
    </>
  );
}
