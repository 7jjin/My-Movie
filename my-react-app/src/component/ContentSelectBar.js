import { useDispatch } from "react-redux";
import styled from "styled-components";
import { contentAction } from "../store/content";

const _section = styled.section`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  padding-right: 40px;
  padding-left: 40px;
  position: sticky;
  top: 56px;
  background: rgb(0, 0, 0);
  margin: 0px 0px 24px;
`;

const _button = styled.button`
  display: inline-block;
  position: relative;
  white-space: nowrap;
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 20px;
  padding: 14px 20px;
  background: none;
  border: none;
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: 0px;
    left: 0px;
    background: rgb(255, 255, 255);
    width: 100%;
    height: 2px;
  }
`;

export default function ContentSelectBar() {
  const dispatch = useDispatch();
  return (
    <>
      <_section>
        <div>
          <_button onClick={() => dispatch(contentAction.StillCut())}>콘텐츠 정보</_button>
        </div>
        <div>
          <_button onClick={() => dispatch(contentAction.RelativeMovie())}>관련 콘텐츠</_button>
        </div>
      </_section>
    </>
  );
}
