import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled, { keyframes } from "styled-components";

export default function Carosel() {
  const array = [1, 2, 3, 4, 5];
  return (
    <>
      <_customSwiper
        modules={[Navigation, A11y]}
        spaceBetween={10}
        slidesPerView={5}
        navigation
        slidesPerGroup={5} // 그룹 당 슬라이드 수 설정
        //   onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          // 1300px 이상일 때
          1300: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          // 1024px 이상일 때
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
            slidesPerGroup: 4, // 그룹 당 슬라이드 수 설정
          },
          // 768px 이상일 때
          750: {
            slidesPerView: 3,
            slidesPerGroup: 3, // 그룹 당 슬라이드 수 설정
          },
          375: {
            slidesPerView: 2,
            slidesPerGroup: 2, // 그룹 당 슬라이드 수 설정
          },
        }}
      >
        {array.map((item, index) => {
          return (
            <>
              <SwiperSlide key={index}>
                <div>
                  <_imgWrapper>
                    <_movieImg />
                    <_movieRank></_movieRank>
                  </_imgWrapper>

                  <_movieBox>
                    <_movieName></_movieName>
                    <div>
                      <span></span>
                    </div>
                  </_movieBox>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </_customSwiper>
    </>
  );
}
const pulse = keyframes`
  0% {
    background-color: rgb(255 255 255 / 85%);
  }

  50% {
    background-color:#cbd5e1;
  }

  100% {
    background-color:rgb(255 255 255 /85%);
  }
`;
const _movieImg = styled.img`
  height: 234px;
  width: 80%;
  border-radius: 15px;

  @media (max-width: 1300px) {
    height: 210px;
  }
  @media (max-width: 750px) {
    height: 175px;
    width: 83%;
  }
  animation: ${pulse} 2s infinite ease-in-out;
`;
const _movieBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 10px;
  font-size: 13px;
  width: 80%;
  color: black;
  font-weight: 700;
  min-height: 26px;
  border-radius: 5px;
  @media (max-width: 750px) {
    width: 83%;
  }
  @media (max-width: 500px) {
    font-size: 11px;
  }
  animation: ${pulse} 2s infinite ease-in-out;
`;

const _movieName = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const _imgWrapper = styled.div`
  position: relative;
`;

const _movieRank = styled.div`
  font-style: italic;
  color: white;
  font-size: 39px;
  bottom: 0px;
  left: 11px;
  position: absolute;
`;

const _customSwiper = styled(Swiper)`
  position: initial;
  .swiper-button-prev,
  .swiper-button-next {
    border-radius: 50%; /* 동그란 모양으로 설정 */
    color: #000; /* 텍스트 색상 설정 */
    width: 40px; /* 버튼 너비 설정 */
    height: 40px; /* 버튼 높이 설정 */
    background: rgba(255, 255, 255, 0.8) center/9px 13px scroll no-repeat;
    cursor: pointer;

    &:hover {
      background-color: #000; /* Hover 상태의 배경 색상 설정 */
      color: #fff; /* Hover 상태의 텍스트 색상 설정 */
    }
  }
  .swiper-button-prev {
    left: 12px !important;
    top: 55%;
    @media (max-width: 500px) {
      width: 30px;
      height: 30px;
    }
  }
  .swiper-button-next {
    top: 55%;
    right: 50px !important;
    @media (max-width: 750px) {
      right: 55px !important;
    }
    @media (max-width: 500px) {
      right: 41px !important;
      width: 30px;
      height: 30px;
    }
  }
  .swiper-button-next:after {
    font-size: 10px;
  }
  .swiper-button-prev:after {
    font-size: 10px;
    right: -10px !important;
  }
`;
