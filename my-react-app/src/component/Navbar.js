import ReactDOM from "react-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

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
  /* border-right: 1px #1b1c1d solid; */
`;
const Navbar_a = styled.a`
  display: block;
  margin: 24px 0 0 26px;
  text-decoration: none;
`;
const Navbar_img = styled.img`
  vertical-align: top;
  width: 88px;
  height: 26px;
`;
const Section = styled.section`
  padding: 0 16px;
  margin: 45px 0 0;
  & > ul {
    list-style: none;
    color: white;
    margin: 0;
    padding: 0;
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
`;
const Nav_span = styled.span`
  margin-left: 10px;
  font-weight: 700;
  cursor: pointer;
`;

const _lightmodeli = styled.li`
  box-sizing: border-box;
  padding: 0px 16px;
  left: 0px;
  width: 100%;
  bottom: 30px;
  position: absolute;
  display: flex;
  padding: 9px 12px;
  padding-left: 20px;
  color: #d4d7db;
  cursor: pointer;
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
`;

const _lightModeBtn = styled.button`
  background: ${(props) => props.theme.bgColor};
  border: none;
  color: ${(props) => props.theme.color};
  font-size: 20px;
  display: flex;
  align-items: center;
`;
const _lightModeSpan = styled.span`
  margin-left: 10px;
  font-weight: 700;
  cursor: pointer;
`;

export default function Navbar() {
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
            <li>
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <Nav_a>
                  <FontAwesomeIcon icon={faHouse} />
                  <Nav_span>홈</Nav_span>
                </Nav_a>
              </Link>
            </li>
            <li>
              <Nav_a onClick={() => dispatch(titleAction.TodayBoxOffice())}>
                <FontAwesomeIcon icon={faHouse} />
                <Nav_span>일별 박스오피스</Nav_span>
              </Nav_a>
            </li>
            <li>
              <Nav_a onClick={() => dispatch(titleAction.WeekendBoxOffice())}>
                <FontAwesomeIcon icon={faHouse} />
                <Nav_span>주간 박스오피스</Nav_span>
              </Nav_a>
            </li>

            <_lightmodeli onClick={() => dispatch(toggleDarkModeAction.toggleDarkMode())}>
              <_lightModeBtn>
                <BsFillSunFill />
                <_lightModeSpan>{isDarkMode ? "라이트모드" : "다크모드"}</_lightModeSpan>
              </_lightModeBtn>
            </_lightmodeli>
          </ul>
        </Section>
      </NavbarDiv>
    </>
  );
}
