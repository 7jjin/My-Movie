import { useEffect, useMemo } from "react";
import axios from "axios";
import { WeekendMovieChartAction } from "../store/weekendMovieChart";
import { TodayMovieChartAction } from "../store/todayMovieChart";
import getCurrentDate from "../libs/date";
import { koreaMovieListAction } from "../store/koreaMovie";
import { japenMovieListAction } from "../store/japenMovie";
import { etcMovieListAction } from "../store/etcMovie";
import { usMovieListAction } from "../store/UsMovie";
import { useSelector } from "react-redux";
import { apiLoadingAction } from "../store/apiLoading";

// 박스오피스 정보를 불러오는 Hook
const useBoxOffice = (dispatch, url, sortedMovie) => {
  // 날짜 메모이제이션
  const currentDate = useMemo(() => getCurrentDate(), []);

  // 로딩 상태
  const { isLoading } = useSelector((state) => state.apiLoading);

  useEffect(() => {
    const getMovie = async () => {
      dispatch(apiLoadingAction.isLoading(true));
      try {
        const res = await axios({
          method: "GET",
          url: url,
        });

        let movieList;
        switch (sortedMovie) {
          case "dailyBoxOffice":
            movieList = res.data.boxOfficeResult.dailyBoxOfficeList;
            break;
          case "weeklyBoxOffice":
            movieList = res.data.boxOfficeResult.weeklyBoxOfficeList;
            break;
          case "koreaMovieList":
            movieList = res.data.movieListResult.movieList;
            break;
          case "japenMovieList":
            movieList = res.data.movieListResult.movieList;
            break;
          case "usMovieList":
            movieList = res.data.movieListResult.movieList;
            break;
          case "etcMovieList":
            movieList = res.data.movieListResult.movieList;
            break;
          default:
            break;
        }

        // 포스터 정보를 추출하는 함수 실행
        const moviesWithPosters = await Promise.all(movieList.map((movie) => getPoster(movie)));

        // 박스오피스 정보에 포스터 정보까지 합쳐서 저장
        const updatedMovieList = movieList.map((movie, index) => ({
          ...movie,
          poster: moviesWithPosters[index],
        }));
        switch (sortedMovie) {
          case "dailyBoxOffice":
            dispatch(TodayMovieChartAction.isLoading(updatedMovieList));
            break;
          case "weeklyBoxOffice":
            dispatch(WeekendMovieChartAction.isLoading(updatedMovieList));
            break;
          case "koreaMovieList":
            dispatch(koreaMovieListAction.isLoading(updatedMovieList));
            break;
          case "japenMovieList":
            dispatch(japenMovieListAction.isLoading(updatedMovieList));
            break;
          case "usMovieList":
            dispatch(usMovieListAction.isLoading(updatedMovieList));
            break;
          case "etcMovieList":
            dispatch(etcMovieListAction.isLoading(updatedMovieList));
            break;
          default:
            break;
        }
        dispatch(apiLoadingAction.isLoading(false));
      } catch (error) {
        console.error("Error fetching box office data:", error);
      }
    };

    // 포스터 정보를 추출하는 함수
    const getPoster = async (movie) => {
      try {
        const json = await axios({
          method: "GET",
          url: `https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&title=${
            movie.movieNm
          }&releaseDts=${movie.openDt.replaceAll("-", "")}&ServiceKey=${process.env.REACT_APP_POSTERS_SECRETKEY}`,
        });
        const posterURL = json.data.Data[0].Result[0].posters.split("|")[0];
        return posterURL;
      } catch (error) {
        console.error("Error fetching poster:", error);
      }
    };
    getMovie();
  }, [currentDate]);
};

export default useBoxOffice;
