import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import MainTitle from "./MainTitle";
import MovieChart from "./MovieChart";
import Country from "./Country";

const _mainWrapper = styled.div`
  padding-bottom: 32px;
  height: 100vh;
  background-color: ${(props) => props.theme.mainWrapper};
  color: white;
`;

export default function Main() {
  return (
    <>
      <_mainWrapper>
        <MainTitle />
        <MovieChart />
        <Country />
      </_mainWrapper>
    </>
  );
}
