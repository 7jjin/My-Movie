import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// React.lazy 적용
const MainPage = lazy(() => import("../pages/MainPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const SignupPage = lazy(() => import("../pages/SignupPage"));
const MovieDetail = lazy(() => import("../pages/MovieDetail"));
const KoreaMovie = lazy(() => import("../pages/KoreaMovie"));
const JapenMovie = lazy(() => import("../pages/JapenMovie"));
const UsMovie = lazy(() => import("../pages/UsMovie"));
const EtcMovie = lazy(() => import("../pages/EtcMovie"));

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="/movie/:movieName/:openDate" element={<MovieDetail />} />
            <Route path="/KoreaMovie" element={<KoreaMovie />} />
            <Route path="/JapenMovie" element={<JapenMovie />} />
            <Route path="/UsMovie" element={<UsMovie />} />
            <Route path="/EtcMovie" element={<EtcMovie />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
