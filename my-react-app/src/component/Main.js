import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import MainTitle from "./MainTitle";
import MovieChart from "./MovieChart";

const _mainWrapper = styled.div`
  padding-bottom: 32px;

  background-color: #000;
  color: white;
`;

export default function Main() {
  return (
    <>
      <_mainWrapper>
        <MainTitle />
        <MovieChart />
      </_mainWrapper>
    </>
  );
}
