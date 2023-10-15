import GenreList from "../component/GenreList";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import styled from "styled-components";

const _MainPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 56px 0 0 240px;
`;
const _bigWrapper = styled.div`
  padding: 0px 40px;
  padding-top: 54px;
  background-color: black;
  color: white;
  h1,
  h3 {
    color: rgb(255, 255, 255);
  }
  h1 {
    font-weight: 800;
  }
  hr {
    background-color: rgb(27, 28, 29);
    width: 100%;
    height: 1px;
    padding: 0px;
    border: none;
    margin: 0px;
  }
`;

export default function KoreaMovie() {
  return (
    <>
      <_MainPage>
        <_bigWrapper className="BigWrapper">
          <h1>한국영화</h1>
          <h3>장르선택</h3>
          <hr />
          <GenreList />
        </_bigWrapper>
      </_MainPage>
      <Header />
      <Navbar />
    </>
  );
}
