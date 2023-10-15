import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetail from "../pages/MovieDetail";
import MainPage from "../pages/MainPage";
import KoreaMovie from "../component/KoreaMovie";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movie/:movieName/:openDate" element={<MovieDetail />} />
          <Route path="/KoreaMovie" element={<KoreaMovie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
