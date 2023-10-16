import Header from "../component/Header";
import Main from "../component/Main";
import Navbar from "../component/Navbar";
import GlobalStyles from "../component/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { darkTheme, lightTheme, NavbarDark, NavbarLight } from "../component/theme";
import isDarkMode from "../store/darkMode";

const _MainPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 56px 0 0 240px;
`;

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
