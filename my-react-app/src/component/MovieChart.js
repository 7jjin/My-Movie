import MainSlide from "./SwiperSlide";
import styled from "styled-components";

const _movieChartTitle = styled.span`
  font-size: 22px;
  line-height: 1.423em;
  font-weight: 700;
  color: white;
`;

const _movieChartChart = styled.div`
  padding: 20px 20px;
  margin-top: 20px;
`;

const _movieChartWrapper = styled.div`
  background-image: linear-gradient(to bottom, #000, rgb(255 255 255 / 80%));
  padding-right: 40px;
  padding-left: 40px;
  position: relative;
`;

export default function MovieChart() {
  return (
    <>
      <_movieChartWrapper className="movieChartWrapper">
        <div className="content">
          <_movieChartTitle>
            <span>현재 상영중인 영화</span>
          </_movieChartTitle>
          <_movieChartChart className="movieChartChart">
            <MainSlide />
          </_movieChartChart>
        </div>
      </_movieChartWrapper>
    </>
  );
}
