# 🔥JinCha🔥  
<p align="center">
  <img src="https://github.com/7jjin/My-Movie/assets/101184549/b603c9f2-cfbe-4863-9c2e-26a4f7c5444f" width="100%">
</p>
 

## ✅ 프로젝트 개요


### **프로젝트 기획 의도**

JinCha는 왓챠를 토대로 만든 영화 사이트입니다. React와 Styled-component를 사용한 첫번째 프로젝트이며, 다양한 hook을 경험하는 것과 새로운 기능구현을 목표로 하였습니다.

### **프로젝트 기간**

23.10.11 ~ 23.10.18 (1주일)

### **배포 링크**

🔖url : [https://www.mymovieapp.store](https://www.mymovieapp.store/)   


### **기술 스택**

**Front-End**

![javascript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![react](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![styled-components](https://img.shields.io/badge/Styled%20component-DB7093?style=for-the-badge&logo=styled-components&logoColor=black)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=black)
![React-Hook-Form](https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=for-the-badge&logo=React-Hook-Form&logoColor=black)
![React-Router](https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=React-Router&logoColor=black)

### **시작하기**

**⚒️ 패키지 설치 및 빌드 방법**


```
$ npm install    // 패키지 설치하기
$ npm run start  // 빌드 방법
```

**📜 File Tree**


```
📦public
 ┣ 📜favicon.ico
 ┣ 📜index.html
 ┣ 📜logo192.png
 ┣ 📜logo512.png
 ┣ 📜manifest.json
 ┗ 📜robots.txt
📦src
 ┣ 📂component
 ┃ ┣ 📜ContentSelectBar.js
 ┃ ┣ 📜Country.js
 ┃ ┣ 📜Footer.js
 ┃ ┣ 📜Genre.js
 ┃ ┣ 📜GenreList.js
 ┃ ┣ 📜GlobalStyles.js
 ┃ ┣ 📜Header.js
 ┃ ┣ 📜Main.js
 ┃ ┣ 📜MainTitle.js
 ┃ ┣ 📜MovieChart.js
 ┃ ┣ 📜Navbar.js
 ┃ ┣ 📜RelativeMovie.js
 ┃ ┣ 📜StillCut.js
 ┃ ┣ 📜SwiperSlide.js
 ┃ ┣ 📜theme.js
 ┃ ┗ 📜WeekendSlid.js
 ┣ 📂img
 ┃ ┣ 📜JINCHA_LOGO.png
 ┃ ┣ 📜movie1.jpg
 ┃ ┣ 📜movie2.jpg
 ┃ ┣ 📜movie3.jpg
 ┃ ┣ 📜movie4.jpg
 ┃ ┣ 📜movie5.jpg
 ┃ ┣ 📜movie6.jpg
 ┃ ┣ 📜movie7.jpg
 ┃ ┣ 📜movie8.jpg
 ┃ ┗ 📜movie9.jpg
 ┣ 📂pages
 ┃ ┣ 📜EtcMovie.js
 ┃ ┣ 📜JapenMovie.js
 ┃ ┣ 📜KoreaMovie.js
 ┃ ┣ 📜LoginPage.js
 ┃ ┣ 📜MainPage.js
 ┃ ┣ 📜MovieDetail.js
 ┃ ┣ 📜SignupPage.js
 ┃ ┗ 📜UsMovie.js
 ┣ 📂router
 ┃ ┗ 📜Router.js
 ┣ 📂store
 ┃ ┣ 📜content.js
 ┃ ┣ 📜darkMode.js
 ┃ ┣ 📜etcMovie.js
 ┃ ┣ 📜genreButton.js
 ┃ ┣ 📜index.js
 ┃ ┣ 📜japenMovie.js
 ┃ ┣ 📜koreaMovie.js
 ┃ ┣ 📜maintitle_h1.js
 ┃ ┣ 📜todayMovieChart.js
 ┃ ┣ 📜UsMovie.js
 ┃ ┗ 📜weekendMovieChart.js
 ┣ 📜App.js
 ┗ 📜index.js
 ┣📜.env
 ┣📜.gitignore
 ┣📜package-lock.json
 ┣📜package.json
 ┣📜README.md
```

<br/>
<br/>


## ✅ 기능 소개

### **1️⃣ Dark Mode & Light Mode**

<p align="center">
  <img src="https://github.com/7jjin/My-Movie/assets/101184549/e8817462-dff6-422d-8805-d4c955cc25b7"
"width="100%">
</p>

**사용자 경험 향상을 위해 다크모드를 구현했습니다.**


### **2️⃣ 일별 & 주간 박스오피스**

<p align="center">
  <img src="https://github.com/7jjin/My-Movie/assets/101184549/109e06f2-5b7e-4dad-a25f-5f53e7d343a3"
"width="100%">
</p>

**각각의 버튼을 클릭하면 캐러셀 안에 영화 정보가 바뀌도록 구현했습니다.**

**🔥API 호출 지연 이슈**

- 영화의 정보와 포스터를 같이 불러오기 위해서는 2번의 axios 호출이 필요했습니다. 때문에 매번 박스오피스 버튼을 클릭해 영화 정보를 띄어줄 때마다 데이터 로딩이 오래걸리는 이슈가 발생했습니다.

**🎯해결**

- 두 타입의 영화 정보를 Redux-tool-kit을 사용해 전역 상태로 지정해 재클릭시에도 api가 호출이 안돼도록 구현 했습니다. 그리고 useEffect 훅을 사용해 의존성 배열에 일별 박스오피스는 하루를, 주간 박스오피스는 일주일을 기간을 변수로 두었습니다.


### **3️⃣ 영화 상세페이지**

<p align="center">
  <img src="https://github.com/7jjin/My-Movie/assets/101184549/2d8ecf10-b070-4502-b789-daebcb97e4e0">
</p>

**영화 포스터 클릭 시 영화 정보와 관련 콘텐츠가 나오는 페이지입니다. 또 관련 콘텐츠는 주연이 비슷한 영화들로만 선별 하였습니다.**

- **react-router-dom을 사용해서 영화 제목과 개봉 날짜를 Params로 보내, axios를 조건에 맞게 호출 했습니다.**

### **4️⃣ 나라별 추천 영화 페이지**

<p align="center">
  <img src="https://github.com/7jjin/My-Movie/assets/101184549/bc0ea99e-f0f7-4e45-a1a3-e2aae05d796a">
</p>

**나라별 영화를 추천해주는 페이지입니다. 한국,일본,미국,기타 총 4가지 선택지를 만들었습니다. 또 장르를 선택할 수 있는 필터 기능도 구현했습니다.**


```
<_ul>
     {koreaMovieList
          .filter((movie) => {
          // 선택한 장르 목록에 어떤 장르가 포함되어 있으면 해당 장르의 영화만 표시
              return genreList.length === 0 || genreList.includes(movie.genreAlt.split(",")[0]);
           })
           .filter((movie) => movie.poster)
           .map((movie) => {
               return (
                   <_li key={movie.rnum}>
                      <_img src={movie.poster} />
                   </_li>
            );
      })}
</_ul>
```


- **filter ,map 메소드를 활용해서 첫번째 filter인 경우 해당 장르인 영화만 추출했으며, 두번째 filter 추출한 영화의 포스터가 있는 경우를 추출해서 만들었습니다.**


### **5️⃣ 회원가입 & 로그인 페이지**

<p align="center">
  <img src="https://github.com/7jjin/My-Movie/assets/101184549/64cdfbc6-bd9b-43de-acff-ad363eac941b">
</p>

**회원가입과 로그인을 할 수 있는 페이지입니다. 본인 인증을 통해서 할 수 있는 기능은 없지만 React-hook-form을 활용해보고 싶어서 만들어 봤습니다.**






