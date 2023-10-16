import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { genreListAction } from "../store/genreButton";

const _ul = styled.ul`
  background: rgb(0, 0, 0);
  padding: 16px 0px 8px;
  margin-bottom: 0px;
  list-style: none;
`;

const _li = styled.li`
  display: inline-block;
  vertical-align: top;
  margin: 0px 8px 0px 0px;
  margin-bottom: 8px;
`;

const _button = styled.button`
  background: ${(props) => (props.active ? "white" : "rgb(34, 35, 38)")};
  color: ${(props) => (props.active ? "black" : "rgb(132, 134, 141)")};
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 20px;
  vertical-align: top;
  padding: 8px 16px;
  border-radius: 24px;
  cursor: pointer;
  border: 0 none transparent;
  outline: none 0;
`;

export default function GenreList() {
  // const [activeGenres, setActiveGenres] = useState([]);

  // const handleButtonClick = (genre) => {
  //   if (activeGenres.includes(genre)) {
  //     setActiveGenres(activeGenres.filter((item) => item !== genre));
  //   } else {
  //     setActiveGenres([...activeGenres, genre]);
  //   }
  // };

  const genreList = useSelector((state) => state.genreList);
  const dispatch = useDispatch();

  return (
    <>
      <_ul>
        <_li>
          <_button active={genreList.includes("스릴러")} onClick={() => dispatch(genreListAction.toggle("스릴러"))}>
            스릴러
            {genreList.includes("스릴러") && (
              <FontAwesomeIcon
                icon={faXmark}
                style={{
                  verticalAlign: "middle",
                  width: "15px",
                  height: "15px",
                  marginLeft: "4px",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "50%",
                }}
              />
            )}
          </_button>
        </_li>

        <_li>
          <_button active={genreList.includes("드라마")} onClick={() => dispatch(genreListAction.toggle("드라마"))}>
            드라마
            {genreList.includes("드라마") && (
              <FontAwesomeIcon
                icon={faXmark}
                style={{
                  verticalAlign: "middle",
                  width: "15px",
                  height: "15px",
                  marginLeft: "4px",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "50%",
                }}
              />
            )}
          </_button>
        </_li>
        <_li>
          <_button
            active={genreList.includes("다큐멘터리")}
            onClick={() => dispatch(genreListAction.toggle("다큐멘터리"))}
          >
            다큐멘터리
            {genreList.includes("다큐멘터리") && (
              <FontAwesomeIcon
                icon={faXmark}
                style={{
                  verticalAlign: "middle",
                  width: "15px",
                  height: "15px",
                  marginLeft: "4px",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "50%",
                }}
              />
            )}
          </_button>
        </_li>
        <_li>
          <_button active={genreList.includes("미스터리")} onClick={() => dispatch(genreListAction.toggle("미스터리"))}>
            미스터리
            {genreList.includes("미스터리") && (
              <FontAwesomeIcon
                icon={faXmark}
                style={{
                  verticalAlign: "middle",
                  width: "15px",
                  height: "15px",
                  marginLeft: "4px",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "50%",
                }}
              />
            )}
          </_button>
        </_li>
        <_li>
          <_button active={genreList.includes("범죄")} onClick={() => dispatch(genreListAction.toggle("범죄"))}>
            범죄
            {genreList.includes("범죄") && (
              <FontAwesomeIcon
                icon={faXmark}
                style={{
                  verticalAlign: "middle",
                  width: "15px",
                  height: "15px",
                  marginLeft: "4px",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "50%",
                }}
              />
            )}
          </_button>
        </_li>
        <_li>
          <_button
            active={genreList.includes("애니메이션")}
            onClick={() => dispatch(genreListAction.toggle("애니메이션"))}
          >
            애니메이션
            {genreList.includes("애니메이션") && (
              <FontAwesomeIcon
                icon={faXmark}
                style={{
                  verticalAlign: "middle",
                  width: "15px",
                  height: "15px",
                  marginLeft: "4px",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "50%",
                }}
              />
            )}
          </_button>
        </_li>
      </_ul>
    </>
  );
}
