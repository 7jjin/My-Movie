import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import JINCHA_LOGO from "../img/JINCHA_LOGO.png";

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
  background-color: #f82f62;
  color: white;
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 13px;
  font-weight: 900;
  border: none;
`;

const Navbar_a = styled.a`
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

export default function Header() {
  return (
    <>
      <WrapperBox>
        <Navbar_a>
          <Navbar_img src={JINCHA_LOGO}></Navbar_img>
        </Navbar_a>
        <UlTag>
          <li>
            <FontAwesomeIcon icon={faBell} />
          </li>
          <li>
            <LoginBtn>로그인</LoginBtn>
          </li>
          <li>
            <SignInButton>회원가입</SignInButton>
          </li>
        </UlTag>
      </WrapperBox>
    </>
  );
}
