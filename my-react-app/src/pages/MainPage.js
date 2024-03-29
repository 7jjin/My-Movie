import Header from "../component/Header";
import Main from "../component/Main";
import Navbar from "../component/Navbar";
import GlobalStyles from "../component/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../component/theme";

export default function MainPage() {
  const isDarkMode = useSelector((state) => state.app.isDarkMode);
  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <_MainPage>
          <Header />
          <Navbar />
          <Main />
        </_MainPage>
      </ThemeProvider>
    </>
  );
}
const _MainPage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 56px 0 0 240px;
  height: 100vh;
  background-color: ${(props) => props.theme.mainWrapper};
  @media (max-width: 900px) {
    padding-left: 0px;
    padding-bottom: 58px;
  }
`;
