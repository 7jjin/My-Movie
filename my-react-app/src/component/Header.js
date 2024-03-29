import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import JINCHA_LOGO from "../img/JINCHA_LOGO.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Header() {
  const [isLogin, setIsLogin] = useState(!!localStorage.getItem("isLogin"));
  const logout = () => {
    localStorage.clear();
    setIsLogin(false); // 로그아웃 시 상태를 업데이트하여 리렌더링
  };
  return (
    <>
      <WrapperBox>
        <Link to={"/main"}>
          <Navbar_a>
            <Navbar_img src={JINCHA_LOGO} alt="LOGO"></Navbar_img>
          </Navbar_a>
        </Link>
        <UlTag>
          <li>
            <FontAwesomeIcon icon={faBell} />
          </li>
          {isLogin && (
            <li>
              <LoginBtn onClick={logout}>로그아웃</LoginBtn>
            </li>
          )}

          {!isLogin && (
            <li>
              <Link to="/signup">
                <SignInButton>회원가입</SignInButton>
              </Link>
            </li>
          )}

          {!isLogin && (
            <li>
              <Link to="/login">
                <LoginBtn>로그인</LoginBtn>
              </Link>
            </li>
          )}
        </UlTag>
      </WrapperBox>
    </>
  );
}
const WrapperBox = styled.div`
  display: flex;
  /* background-color: #141517; */
  background-color: ${(props) => props.theme.bgColor};
  flex-direction: row-reverse;
  height: 56px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  width: 100%;

  @media (max-width: 900px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

const UlTag = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 12px 40px;
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  & > li {
    color: ${(props) => props.theme.color};
    margin: 0px 5px;
  }
`;

const LoginBtn = styled.button`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 13px;
  font-weight: 900;
  border: none;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const SignInButton = styled.button`
  background-color: rgb(255 0 65);
  color: white;
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 13px;
  font-weight: 900;
  border: none;
`;

const Navbar_a = styled.div`
  display: block;
  margin: 24px 0 0 26px;
  text-decoration: none;
  display: none;
  @media (max-width: 900px) {
    display: block;
    margin-top: 14px;
  }
`;
const Navbar_img = styled.img`
  vertical-align: top;
  width: 88px;
  height: 26px;
`;
