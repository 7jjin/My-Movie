import axios from "axios";
import styled from "styled-components";
import React, { useEffect, useState } from "react";

export default function RelativeMovie(props) {
  const [post, setPost] = useState([]);
  const { nation, use, actor } = props.movieInfos;
  console.log(nation, use, actor);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios({
          method: "GET",
          url: `https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&listCount=15&sort=RANK,1&detail=Y&nation=${nation}&use=${use}&actor=${actor}&ServiceKey=EP520Y4JRPI6ZC781VKW`,
        });

        const newPosts = res.data.Data[0].Result.map((value) => {
          // poster값이 빈 값인 경우는 return 하지 않았다.
          const poster = value.posters.split("|")[0];
          if (poster) {
            return poster;
          }
          return null;
        });

        setPost([...post, ...newPosts.filter(Boolean)]);
      } catch (error) {
        console.log("Error");
      }
    };
    getData();
  }, [nation, use, actor]);

  return (
    <>
      <_h1>비슷한 콘텐츠</_h1>
      <_section>
        <_ul>
          {post.map((value) => {
            return (
              <>
                <_li key={value}>
                  <_img src={value} />
                </_li>
              </>
            );
          })}
        </_ul>
      </_section>
    </>
  );
}
const _h1 = styled.h1`
  padding: 0px 40px;
  font-size: 20px;
  margin-bottom: 25px;
`;

const _section = styled.section`
  padding: 0px 40px;
  @media (max-width: 900px) {
    margin-bottom: 80px;
  }
`;

const _ul = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0px;
  padding: 0px;
`;

const _li = styled.li`
  width: 18%;
  list-style: none;
  padding: 0px 6px;
  cursor: pointer;
  border-radius: 4px;
`;

const _img = styled.img`
  width: 100%;
  border-radius: 5px;
`;
