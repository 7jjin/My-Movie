import { useEffect } from "react";
import axios from "axios";
import { WeekendMovieChartAction } from "../store/weekendMovieChart";
import { TodayMovieChartAction } from "../store/todayMovieChart";

// 날짜를 YYYY/MM/DD형식으로 바꾸는 함수
function getCurrentDate() {
  var date = new Date();
  var year = date.getFullYear().toString();
  var month = date.getMonth() + 1;
  month = month < 10 ? "0" + month.toString() : month.toString();
  var day = date.getDate();
  day = day < 10 ? "0" + day.toString() : day.toString();
  return year + month + day - 7;
}

// 현재 날짜
let now = getCurrentDate();

// 박스오피스 정보를 불러오는 Hook
const useBoxOffice = (dispatch, isDaily) => {
  let url;

  // 일별/주간 박스오피스에 따른 다른 url 제공
  if (isDaily) {
    url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.REACT_APP_BOXOFFICE_SECRETKEY}&targetDt=${now}`;
  } else {
    url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${process.env.REACT_APP_BOXOFFICE_SECRETKEY}&targetDt=${now}&weekGb=0`;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios({
          method: "GET",
          url: url,
        });

        // 일별/주간 박스오피스 리스트
        const boxOfficeMovies = isDaily
          ? res.data.boxOfficeResult.dailyBoxOfficeList
          : res.data.boxOfficeResult.weeklyBoxOfficeList;

        // 포스터 정보만 추출
        const moviePromises = boxOfficeMovies.map((movie) => getMovies(movie));
        const moviesWithPosters = await Promise.all(moviePromises);

        // 박스오피스 정보에 포스터 정보까지 합쳐서 저장
        const updatedMovieList = boxOfficeMovies.map((movie, index) => ({
          ...movie,
          poster: moviesWithPosters[index],
        }));
        dispatch(
          isDaily
            ? TodayMovieChartAction.isLoading(updatedMovieList)
            : WeekendMovieChartAction.isLoading(updatedMovieList)
        );
      } catch (error) {
        console.error("Error fetching box office data:", error);
      }
    };

    // 포스터 정보를 추출하는 함수
    const getMovies = async (movie) => {
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
    fetchData();
  }, [dispatchEvent, now]);
};

export default useBoxOffice;
