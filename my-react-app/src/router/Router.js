import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// React.lazy 적용
const StartPage = lazy(() => import("../pages/StartPage"));
const MainPage = lazy(() => import("../pages/MainPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const SignupPage = lazy(() => import("../pages/SignupPage"));
const MovieDetail = lazy(() => import("../pages/MovieDetail"));
const MovieListCounty = lazy(() => import("../pages/MovieListCounty"));

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path="/start" element={<StartPage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="/movie/:movieName/:openDate" element={<MovieDetail />} />
            <Route path="/movieList" element={<MovieListCounty />} /> {/* 국가별 영화 페이지 */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
