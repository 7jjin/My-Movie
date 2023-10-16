import styled from "styled-components";
import { Link } from "react-router-dom";
const _CountryWrapper = styled.div`
  padding-right: 40px;
  padding-left: 40px;
  margin-top: 40px;
`;

const _title = styled.div`
  font-size: 22px;
  line-height: 1.423em;
  font-weight: 700;
  color: ${(props) => props.theme.color};
`;

const _countryBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  a {
    width: 23%;
    height: 165px;
    border-radius: 10px;
  }
`;

const _countryKorea = styled.a`
  background: 0% 0% / cover no-repeat rgb(56, 11, 11);
  transform: scale(1.01);
  position: relative;

  div {
    height: 100%;
    border-radius: 10px;
    background: 0% 0% / cover no-repeat rgb(56, 11, 11);
  }
  span {
    color: white;
    position: absolute;
    top: 10px;
    left: 15px;
  }
`;
const _countryJapen = styled.a`
  background: 0% 0% / cover no-repeat rgb(96, 101, 41);
  transform: scale(1.01);
  position: relative;

  div {
    height: 100%;
    border-radius: 10px;
    background: 0% 0% / cover no-repeat rgb(96, 101, 41);
  }
  span {
    color: white;
    position: absolute;
    top: 10px;
    left: 15px;
  }
`;
const _countryUS = styled.a`
  background: 0% 0% / cover no-repeat rgb(26, 71, 113);
  transform: scale(1.01);
  position: relative;
  div {
    height: 100%;
    border-radius: 10px;
    background: 0% 0% / cover no-repeat rgb(26, 71, 113);
  }
  span {
    color: white;
    position: absolute;
    top: 10px;
    left: 15px;
  }
`;
const _countryEtc = styled.a`
  background: 0% 0% / cover no-repeat rgb(39, 63, 55);
  transform: scale(1.01);
  position: relative;

  div {
    height: 100%;
    border-radius: 10px;
    background: 0% 0% / cover no-repeat rgb(39, 63, 55);
  }
  span {
    color: white;
    position: absolute;
    top: 10px;
    left: 15px;
  }
`;

const _img = styled.img`
  width: 100%;
  height: 100%;
`;

export default function Country() {
  return (
    <>
      <_CountryWrapper className="CountryWrapper">
        <_title className="title">나라별 추천 영화</_title>
        <_countryBox className="countryBox">
          <Link to={"/KoreaMovie"}>
            <_countryKorea>
              <div className="Korea">
                <span>한국</span>
                <_img src="https://an2-img.amz.wtchn.net/image/v2/h9H3n1xkSHJsHSoxgr0gVw.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSm9Jam95TnpBc0luQWlPaUl2ZGpJdmMzUnZjbVV2YzNablgzUmxiWEJzWVhSbEx6RTJOVFUwTXpFd09EazBPREV3TXpNMk16TWlMQ0p6ZG1kZmNHRnlZVzBpT25zaVkyOXNiM0l4SWpvaUl6VTNNREV4UWlKOUxDSjNJam8zTWpCOS5WUUUySnBydHQzdjNWTmR3b1lPS1VKZUNHSFB0OHlNX2ZzYVBFNEU5Rll3"></_img>
              </div>
            </_countryKorea>
          </Link>

          <Link to={"/JapenMovie"}>
            <_countryJapen>
              <div className="Korea">
                <span>일본</span>
                <_img src="https://an2-img.amz.wtchn.net/image/v2/uT7KUYcoHGulWNYly2EyBQ.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSm9Jam95TnpBc0luQWlPaUl2ZGpJdmMzUnZjbVV2YzNablgzUmxiWEJzWVhSbEx6RTJORFl5T0RjNU5qUTNPVEkzTWprd01ERWlMQ0p6ZG1kZmNHRnlZVzBpT25zaVkyOXNiM0l4SWpvaUl6VkVORFpDUVNKOUxDSjNJam8zTWpCOS5IY2VFNzRYRTdUaGdOc3FDdE9pZEZKRmZUMnl0TV9ZcWxHaXdKQ3pDUzVZ"></_img>
              </div>
            </_countryJapen>
          </Link>

          <Link to={"/UsMovie"}>
            <_countryUS>
              <div className="Korea">
                <span>미국</span>
                <_img src="https://an2-img.amz.wtchn.net/image/v2/qPiND_BzhBkRJBHI8JmpLA.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSm9Jam95TnpBc0luQWlPaUl2ZGpJdmMzUnZjbVV2YzNablgzUmxiWEJzWVhSbEx6RTJORFl5T0RjM01qWTBNVEkzT0RVeU16SWlMQ0p6ZG1kZmNHRnlZVzBpT25zaVkyOXNiM0l4SWpvaUl6QkVNemMxUmlKOUxDSjNJam8zTWpCOS5KX3pnX1BEMHFPaFRLY3pHdVJWdy1mMS1ZLUNFaExrRlRoOWpCN3lvdW1Z"></_img>
              </div>
            </_countryUS>
          </Link>

          <Link to={"/EtcMovie"}>
            <_countryEtc>
              <div className="Korea">
                <span>기타</span>
                <_img src="https://an2-img.amz.wtchn.net/image/v2/UMW6qIdqK62nuAS7atZT4w.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSm9Jam95TnpBc0luQWlPaUl2ZGpJdmMzUnZjbVV2YzNablgzUmxiWEJzWVhSbEx6RTJORFk0TnpjeU9EQTJOemMzT1RZd056WWlMQ0p6ZG1kZmNHRnlZVzBpT25zaVkyOXNiM0l4SWpvaUl6UTVNVVJET0NKOUxDSjNJam8zTWpCOS5yUnQzUXFIcjJmdFV2UjVBWGtJUXFPZWEwOUY3VmxJbkg3MkxyVVMyVm8w"></_img>
              </div>
            </_countryEtc>
          </Link>
        </_countryBox>
      </_CountryWrapper>
    </>
  );
}
