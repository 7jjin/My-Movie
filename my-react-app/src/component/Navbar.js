import ReactDOM from "react-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { titleAction } from "../store/maintitle_h1";
import { Link } from "react-router-dom";

const NavbarDiv = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 501;
  background: #141517;
  width: 240px;
  height: 100%;
  border-right: 1px #1b1c1d solid;
`;
const Navbar_a = styled.a`
  display: block;
  margin: 24px 0 0 26px;
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

const Nav_a = styled.a`
  display: flex;
  padding: 9px 12px;
  color: #d4d7db;
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

export default function Navbar() {
  //dispatch로 함수 실행
  const dispatch = useDispatch();
  return (
    <>
      <NavbarDiv>
        <Navbar_a>
          <Navbar_img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTk2IiBoZWlnaHQ9IjU5IiB2aWV3Qm94PSIwIDAgMTk2IDU5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTc4LjI3MTMgMTIuOTE4NFYyMC43NzFIODYuMDk0NlY1Ni4xOTU2SDk1Ljg0MzJWMjAuNzcxSDEwMy4yMThWMTIuOTE4NEg3OC4yNzEzWk0xNTMuNDY0IDI5LjYzODlIMTQ2LjAwNFYxMi45NzYzSDEzNi4yODVWNTYuMjUzMkgxNDYuMDA0VjM3LjQ5MTJIMTUzLjQ2NFY1Ni4yNTMySDE2My4xODNWMTIuOTc2M0gxNTMuNDY0VjI5LjYzODlaTTExOS42MTMgMTIuNDUyN0gxMTcuOTJDMTA5LjE0MiAxMi40NTI3IDEwNS42MzEgMTYuOTMxNiAxMDUuNjMxIDI0LjIwM1Y0NC44NTIxQzEwNS42MzEgNTIuMTIzOSAxMDkuMTQyIDU2Ljc3NyAxMTguMTA4IDU2Ljc3N0gxMTkuODAxQzEyOC43MDQgNTYuNzc3IDEzMS44MzkgNTEuNDI1MiAxMzEuODM5IDQ1LjM3NjNWMzcuOTg5MUgxMjIuMzA5VjQ0Ljg1MjFDMTIyLjMwOSA0Ny40MTIzIDEyMS40MzEgNDguOTgyNiAxMTguOTIzIDQ4Ljk4MjZDMTE2LjQ3NyA0OC45ODI2IDExNS42NjMgNDcuNTI4NiAxMTUuNjYzIDQ0Ljc5NDZWMjQuMTQ0NkMxMTUuNjYzIDIxLjQxMDUgMTE2LjQ3NyAyMC4wMTUgMTE4LjkyMyAyMC4wMTVDMTIxLjQ5MyAyMC4wMTUgMTIyLjMwOSAyMS41MjY5IDEyMi4zMDkgMjQuMTQ0NlYyOS4xNDdIMTMxLjgzOVYyMy42MjFDMTMxLjgzOSAxNi40MDg3IDEyOC40NTMgMTIuNDUyNyAxMTkuNjEzIDEyLjQ1MjdaTTY4Ljc4MiA0MS40MjI0TDY1Ljk1NTggMjMuMzMxNkg2NC4yODQxTDYxLjQ1NzYgNDEuNDIyNEg2OC43ODJaTTcyLjMyNjIgMTIuOTE4NEw3OS45NzU5IDU2LjE5NTZINzEuMDkwMkw3MC4wMDkgNDkuMjc1M0g2MC4yMzA4TDU5LjE0OTMgNTYuMTk1Nkg1MC4yNjM2TDU3LjkxMzYgMTIuOTE4NEg3Mi4zMjYyWk0xODQuMzkxIDQxLjQyMjRMMTgxLjU2NCAyMy4zMzE2SDE3OS44OTNMMTc3LjA2NiA0MS40MjI0SDE4NC4zOTFaTTE4Ny45MzUgMTIuOTE4NEwxOTUuNTg1IDU2LjE5NTZIMTg2LjY5OUwxODUuNjE4IDQ5LjI3NTNIMTc1Ljg0TDE3NC43NTkgNTYuMTk1NkgxNjUuODczTDE3My41MjIgMTIuOTE4NEgxODcuOTM1WiIgZmlsbD0iI0ZGMDU1OCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQyLjI1MDEgMC43NTc4MTJMMzkuMzUyMSA0Mi4yMDY3TDM4LjU3MzMgNDIuMjQ2NkwzMS42ODA3IDEyLjkyMjRIMjMuMTY0TDE4LjAwNzggNDMuMzA3MkwxNi45MDI3IDQzLjM2MzlMMTIuMjg2MiAxMi45MjI0SDAuNDE0MDYyTDExLjIxNTEgNTguMjM5N0wyMy4yODkxIDU3LjQ1NTdMMjcuMjE3MyAyOS4zMjY4TDI4LjM2OTQgMjkuMjY1M0wzMy42Mjk1IDU2Ljc3NjFMNDUuMTg1NSA1Ni4wMjA2TDU0LjM2MjUgMC43NTc4MTJINDIuMjUwMVoiIGZpbGw9IiNGRjA1NTgiLz4KPC9zdmc+Cg=="></Navbar_img>
        </Navbar_a>
        <Section>
          <ul>
            <li>
              <Link to={"/"}>
                <Nav_a onClick={() => dispatch(titleAction.Home())}>
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
          </ul>
        </Section>
      </NavbarDiv>
    </>
  );
}
