import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetail from "../pages/MovieDetail";
import MainPage from "../pages/MainPage";
import MovieChart from "../component/MovieChart";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movie/:movieName/:openDate" element={<MovieDetail />} />
          <Route path="/movieChart" element={<MovieChart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
