// 날짜를 YYYY/MM/DD형식으로 바꾸는 함수
const getCurrentDate = () => {
  let date = new Date();
  let year = date.getFullYear().toString();
  let month = date.getMonth() + 1;
  month = month < 10 ? "0" + month.toString() : month.toString();
  let day = date.getDate();
  day = day < 10 ? "0" + day.toString() : day.toString();
  return year + month + day - 7;
};

export default getCurrentDate;
