import styled from "styled-components";
import Header from "../component/Header";
import Main from "../component/Main";
import Navbar from "../component/Navbar";

const _MainPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 56px 0 0 240px;
`;

export default function MainPage() {
  return (
    <>
      <_MainPage>
        <Header />
        <Navbar />
        <Main />
      </_MainPage>
    </>
  );
}
