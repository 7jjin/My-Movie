import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
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
  background: rgb(34, 35, 38);
  color: rgb(132, 134, 141);
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
  return (
    <>
      <_ul>
        <_li>
          <_button>
            스릴러
            {/* <FontAwesomeIcon
                  icon={faXmark}
                  style={{
                    verticalAlign: "middle",
                    width: "15px",
                    height: "15px",
                    margin: "0px,0px,0px,5px",
                    marginLeft: "4px",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "50%",
                  }}
                /> */}
          </_button>
        </_li>
        <_li>
          <_button>
            액션
            {/* <FontAwesomeIcon
                  icon={faXmark}
                  style={{
                    verticalAlign: "middle",
                    width: "15px",
                    height: "15px",
                    margin: "0px,0px,0px,5px",
                    marginLeft: "4px",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "50%",
                  }}
                /> */}
          </_button>
        </_li>
        <_li>
          <_button>
            SF
            {/* <FontAwesomeIcon
                  icon={faXmark}
                  style={{
                    verticalAlign: "middle",
                    width: "15px",
                    height: "15px",
                    margin: "0px,0px,0px,5px",
                    marginLeft: "4px",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "50%",
                  }}
                /> */}
          </_button>
        </_li>
        <_li>
          <_button>
            코미디
            {/* <FontAwesomeIcon
                  icon={faXmark}
                  style={{
                    verticalAlign: "middle",
                    width: "15px",
                    height: "15px",
                    margin: "0px,0px,0px,5px",
                    marginLeft: "4px",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "50%",
                  }}
                /> */}
          </_button>
        </_li>
        <_li>
          <_button>
            로맨스
            {/* <FontAwesomeIcon
                  icon={faXmark}
                  style={{
                    verticalAlign: "middle",
                    width: "15px",
                    height: "15px",
                    margin: "0px,0px,0px,5px",
                    marginLeft: "4px",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "50%",
                  }}
                /> */}
          </_button>
        </_li>
        <_li>
          <_button>
            판타지
            {/* <FontAwesomeIcon
                  icon={faXmark}
                  style={{
                    verticalAlign: "middle",
                    width: "15px",
                    height: "15px",
                    margin: "0px,0px,0px,5px",
                    marginLeft: "4px",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "50%",
                  }}
                /> */}
          </_button>
        </_li>
        <_li>
          <_button>
            범죄
            {/* <FontAwesomeIcon
                  icon={faXmark}
                  style={{
                    verticalAlign: "middle",
                    width: "15px",
                    height: "15px",
                    margin: "0px,0px,0px,5px",
                    marginLeft: "4px",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "50%",
                  }}
                /> */}
          </_button>
        </_li>
        <_li>
          <_button>
            드라마
            {/* <FontAwesomeIcon
                  icon={faXmark}
                  style={{
                    verticalAlign: "middle",
                    width: "15px",
                    height: "15px",
                    margin: "0px,0px,0px,5px",
                    marginLeft: "4px",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "50%",
                  }}
                /> */}
          </_button>
        </_li>
        <_li>
          <_button>
            사랑
            {/* <FontAwesomeIcon
                  icon={faXmark}
                  style={{
                    verticalAlign: "middle",
                    width: "15px",
                    height: "15px",
                    margin: "0px,0px,0px,5px",
                    marginLeft: "4px",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "50%",
                  }}
                /> */}
          </_button>
        </_li>
        <_li>
          <_button>
            추리
            {/* <FontAwesomeIcon
                  icon={faXmark}
                  style={{
                    verticalAlign: "middle",
                    width: "15px",
                    height: "15px",
                    margin: "0px,0px,0px,5px",
                    marginLeft: "4px",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "50%",
                  }}
                /> */}
          </_button>
        </_li>
        <_li>
          <_button>
            미스터리
            {/* <FontAwesomeIcon
                  icon={faXmark}
                  style={{
                    verticalAlign: "middle",
                    width: "15px",
                    height: "15px",
                    margin: "0px,0px,0px,5px",
                    marginLeft: "4px",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "50%",
                  }}
                /> */}
          </_button>
        </_li>
      </_ul>
    </>
  );
}
