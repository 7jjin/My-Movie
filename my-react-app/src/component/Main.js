import styled from "styled-components";
import MainTitle from "./MainTitle";
import MovieChart from "./MovieChart";
import Country from "./Country";

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
const _mainWrapper = styled.div`
  padding-bottom: 32px;
  background-color: ${(props) => props.theme.mainWrapper};
  color: white;
`;
