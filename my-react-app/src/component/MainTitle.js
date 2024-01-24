import { useSelector } from "react-redux";
import styled from "styled-components";

export default function MainTitle() {
  // console.log(title);
  return (
    <>
      <_h1Wrapper>
        <_h1>홈</_h1>
        <_hr />
      </_h1Wrapper>
    </>
  );
}

const _h1Wrapper = styled.div`
  margin: 54px 0 0;
  padding-right: 40px;
  padding-left: 40px;
  @media (max-width: 900px) {
    margin-top: 20px;
  }
`;

const _h1 = styled.h1`
  color: ${(props) => props.theme.h1Wrapper};
  margin: 0 0 12px;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 0px;
  line-height: 40px;
  @media (max-width: 500px) {
    font-size: 25px;
  }
`;

const _hr = styled.hr`
  background-color: #1b1c1d;
  width: 100%;
  height: 1px;
  padding: 0;
  border: none;
  margin: 0;
  margin: 0 0 18px;
`;
