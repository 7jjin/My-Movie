import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetail from "../pages/MovieDetail";
import MainPage from "../pages/MainPage";
import KoreaMovie from "../pages/KoreaMovie";
import JapenMovie from "../pages/JapenMovie";
import UsMovie from "../pages/UsMovie";
import EtcMovie from "../pages/EtcMovie";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movie/:movieName/:openDate" element={<MovieDetail />} />
          <Route path="/KoreaMovie" element={<KoreaMovie />} />
          <Route path="/JapenMovie" element={<JapenMovie />} />
          <Route path="/UsMovie" element={<UsMovie />} />
          <Route path="/EtcMovie" element={<EtcMovie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
