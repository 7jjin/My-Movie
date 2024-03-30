import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export default function StartPage() {
  return (
    <>
      <_wrap className="wrap"></_wrap>
      <_fadeWrap className="fade-wrap"></_fadeWrap>
    </>
  );
}
const _wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

const _fadeWrap = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: -37%;
  background-color: grey;
  width: 175%;
  height: 100%;
  transform-origin: left;
  animation: coverleft 2000ms both cubic-bezier(0.77, 0, 0.35, 1.21);
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
