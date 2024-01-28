import { useEffect, useMemo } from "react";
import axios from "axios";
import { WeekendMovieChartAction } from "../store/weekendMovieChart";
import { TodayMovieChartAction } from "../store/todayMovieChart";
import getCurrentDate from "../libs/date";
import { koreaMovieListAction } from "../store/koreaMovie";
import { japenMovieListAction } from "../store/japenMovie";
import { etcMovieListAction } from "../store/etcMovie";
import { usMovieListAction } from "../store/UsMovie";
import { apiLoadingAction } from "../store/apiLoading";

// 박스오피스 정보를 불러오는 Hook
const useBoxOffice = (dispatch, sortedMovie) => {
  // 날짜
  const currentDate = useMemo(() => getCurrentDate(), []);

  useEffect(() => {
    let url;
    switch (sortedMovie) {
      case "dailyBoxOffice":
        url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.REACT_APP_BOXOFFICE_SECRETKEY}&targetDt=${currentDate}`;
        break;
      case "weeklyBoxOffice":
        url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${process.env.REACT_APP_BOXOFFICE_SECRETKEY}&targetDt=${currentDate}&weekGb=0`;
        break;
      case "KoreaMovieList":
        url =
          "https://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=f5eef3421c602c6cb7ea224104795888&repNationCd=22041011&movieTypeCd=220101&openStartDt=2010&openEndDt=2022&itemPerPage=100";
        break;
      case "JapenMovieList":
        url =
          "https://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=f5eef3421c602c6cb7ea224104795888&repNationCd=22041008&movieTypeCd=220101&openStartDt=2010&openEndDt=2022&itemPerPage=100";
        break;
      case "UsMovieList":
        url =
          "https://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=f5eef3421c602c6cb7ea224104795888&repNationCd=22042002&movieTypeCd=220101&openStartDt=2010&openEndDt=2022&itemPerPage=100";
        break;
      case "EtcMovieList":
        url =
          "https://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=f5eef3421c602c6cb7ea224104795888&repNationCd=22049999&movieTypeCd=220101&openStartDt=2010&openEndDt=2022&itemPerPage=100";
        break;
      default:
        break;
    }
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
          case "KoreaMovieList":
            movieList = res.data.movieListResult.movieList;
            break;
          case "JapenMovieList":
            movieList = res.data.movieListResult.movieList;
            break;
          case "UsMovieList":
            movieList = res.data.movieListResult.movieList;
            break;
          case "EtcMovieList":
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
          case "KoreaMovieList":
            dispatch(koreaMovieListAction.isLoading(updatedMovieList));
            break;
          case "JapenMovieList":
            dispatch(japenMovieListAction.isLoading(updatedMovieList));
            break;
          case "UsMovieList":
            dispatch(usMovieListAction.isLoading(updatedMovieList));
            break;
          case "EtcMovieList":
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
