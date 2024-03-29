import styled from "styled-components";
import JINCHA_LOGO from "../img/JINCHA_LOGO.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function SignupPage() {
  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({ mode: "onChange" });
  const navigate = useNavigate();

  const [nameWatch, emailWatch, passWatch] = watch(["name", "email", "password"]);

  const onSubmit = (data) => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    if (data.email === email && data.password === password) {
      localStorage.setItem("isLogin", true);
      alert("로그인에 성공하셨습니다.");
      navigate("/");
    } else {
      alert("로그인에 실패하셨습니다.");
    }
  };

  return (
    <>
      <section className="login">
        <_nav>
          <Navbar_a>
            <Link to={"/main"}>
              <Navbar_img src={JINCHA_LOGO}></Navbar_img>
            </Link>
          </Navbar_a>
          <_loginDiv>
            <Link to={"/signup"}>
              <_loginBtn>회원가입</_loginBtn>
            </Link>
          </_loginDiv>
        </_nav>
        <_main>
          <_imgWrapper src="ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZNE5Ea3hOVGN4T1RJM05UQTVOVGs0TXlKOS5mRjlhcmYwZWNJd2cyNUl4YnBfZkZyV0E5UmpkMnhLdmVEUnhUUU1jUXN3">
            <_singupWrapper className="signupWrapper">
              <_signContent className="signupContent">
                <_signupTitle>로그인</_signupTitle>
                <_form onSubmit={handleSubmit(onSubmit)}>
                  <_inputBox className="email">
                    <_inputEmail
                      type="text"
                      placeholder="이메일 (example@gamil.com)"
                      {...register("email", {
                        required: true,
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                          message: "이메일 형식에 맞지 않습니다.",
                        },
                      })}
                    ></_inputEmail>
                    {emailWatch === undefined || emailWatch === "" ? (
                      ""
                    ) : errors.email ? (
                      <_inValidIcon></_inValidIcon>
                    ) : (
                      <_VliadIcon></_VliadIcon>
                    )}
                  </_inputBox>
                  <_inputBox className="pw">
                    <_inputPw
                      type="password"
                      placeholder="영문,숫자 조합 8자 이상"
                      {...register("password", {
                        required: true,
                        pattern: {
                          value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
                          message: "비밀번호 형식에 맞지 않습니다.",
                        },
                      })}
                    ></_inputPw>
                    {passWatch === undefined || passWatch === "" ? (
                      ""
                    ) : errors.password ? (
                      <_inValidIcon></_inValidIcon>
                    ) : (
                      <_VliadIcon></_VliadIcon>
                    )}
                  </_inputBox>
                  <_btnDiv>
                    {isValid ? <_btnOn type="submit">로그인</_btnOn> : <_btnOff type="submit">로그인</_btnOff>}
                  </_btnDiv>
                </_form>
              </_signContent>
            </_singupWrapper>
          </_imgWrapper>
        </_main>
      </section>
    </>
  );
}

const _main = styled.main`
  background: #000;
`;

const _imgWrapper = styled.div`
  height: 100vh;

  position: fixed;
  top: 0px;
  left: 0px;
  background-size: cover !important;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(https://an2-img.amz.wtchn.net/image/v2/v_rtGmsGmmSGuScg0hC76g.webp?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZNE5Ea3hOVGN4T1RJM05UQTVOVGs0TXlKOS5mRjlhcmYwZWNJd2cyNUl4YnBfZkZyV0E5UmpkMnhLdmVEUnhUUU1jUXN3);
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: opacity 500ms ease 0s;
`;

const _singupWrapper = styled.div`
  display: flex;
  position: relative;
  z-index: 1;

  flex-direction: column;

  justify-content: center;

  align-items: center;
  height: 100%;
  overflow: hidden;
`;

const _signContent = styled.div`
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  justify-content: center;
  width: 300px;
`;
const _signupTitle = styled.div`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -1px;
  margin: 0 0 14px;
`;

const _form = styled.form`
  box-sizing: border-box;
`;

const _inputBox = styled.div`
  position: relative;
  width: 100%;
  input {
    font-size: 16px;
    letter-spacing: -0.5px;
    line-height: normal;
    border-color: rgba(154, 151, 161, 0.2);
    width: 100%;
    padding: 10px 10px 10px 14px;
    box-sizing: border-box;
    &:focus {
      outline: none; /* focus일 때 outline을 없앰 */
    }
  }
`;

const _inputEmail = styled.input`
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;
const _inputPw = styled.input`
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const _btnDiv = styled.div`
  margin: 16px 0px;
`;
const _btnOn = styled.button`
  background-color: #f82f62;
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.1px;
  line-height: 51px;
  text-align: center;
  width: 100%;
  height: 52px;
  border-radius: 40px;
  font-size: 16px;
  line-height: 47px;
  height: 48px;
  opacity: 1;
`;
const _btnOff = styled.button`
  background-color: #f82f62;
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.1px;
  line-height: 51px;
  text-align: center;
  width: 100%;
  height: 52px;
  border-radius: 40px;
  font-size: 16px;
  line-height: 47px;
  height: 48px;
  opacity: 0.3;
`;

const _nav = styled.nav`
  z-index: 1;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Navbar_a = styled.a`
  display: block;
  margin: 24px 0 0 26px;
  text-decoration: none;
`;
const Navbar_img = styled.img`
  vertical-align: top;
  width: 88px;
  height: 26px;
`;

const _loginDiv = styled.div`
  margin-top: 24px;
  margin-right: 26px;
`;

const _loginBtn = styled.button`
  display: inline-block;
  background-color: #121218;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 21px;
  width: 100%;
  padding: 10px 14px;
  border-radius: 4px;
  background: #fff;
  color: #121218;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.3px;
  padding: 5px 18px 6px;
  border-radius: 40px;
`;

const _inValidIcon = styled.div`
  content: "";
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 12px;
  bottom: auto;
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5JY29ucyAvIFNldHRpbmdzIC8gSW52YWxpZDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJJY29ucy0vLVNldHRpbmdzLS8tSW52YWxpZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IngtY2lyY2xlLWYiIGZpbGw9IiNEQjQyNDEiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNy4wNzA1NTU2LDE3LjA3IEMxMy4xODE2NjY3LDIwLjk1ODg4ODkgNi44MTgzMzMzMywyMC45NTg4ODg5IDIuOTI5NDQ0NDQsMTcuMDcgQy0wLjk1ODg4ODg4OSwxMy4xODE2NjY3IC0wLjk1ODg4ODg4OSw2LjgxODMzMzMzIDIuOTI5NDQ0NDQsMi45Mjk0NDQ0NCBDNi44MTgzMzMzMywtMC45NTg4ODg4ODkgMTMuMTgxNjY2NywtMC45NTg4ODg4ODkgMTcuMDcsMi45Mjk0NDQ0NCBDMjAuOTU4ODg4OSw2LjgxODMzMzMzIDIwLjk1ODg4ODksMTMuMTgxNjY2NyAxNy4wNzA1NTU2LDE3LjA3IEwxNy4wNzA1NTU2LDE3LjA3IFogTTEzLjg5Mzg4ODksNy42NjM4ODg4OSBMMTIuMzM2MTExMSw2LjEwNjExMTExIEwxMCw4LjQ0Mjc3Nzc4IEw3LjY2Mzg4ODg5LDYuMTA2MTExMTEgTDYuMTA2NjY2NjcsNy42NjM4ODg4OSBMOC40NDI3Nzc3OCwxMCBMNi4xMDY2NjY2NywxMi4zMzYxMTExIEw3LjY2Mzg4ODg5LDEzLjg5Mzg4ODkgTDEwLDExLjU1NzIyMjIgTDEyLjMzNjExMTEsMTMuODkzODg4OSBMMTMuODkzODg4OSwxMi4zMzYxMTExIEwxMS41NTcyMjIyLDEwIEwxMy44OTM4ODg5LDcuNjYzODg4ODkgTDEzLjg5Mzg4ODksNy42NjM4ODg4OSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==)
    no-repeat;
  width: 20px;
  height: 20px;
  margin-top: -10px;
`;

const _VliadIcon = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 12px;
  bottom: auto;
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5JY29ucyAvIFNldHRpbmdzIC8gVmFsaWQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbnMtLy1TZXR0aW5ncy0vLVZhbGlkIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iY2hlY2stY2lyY2xlLWYiIGZpbGw9IiMzQ0FBRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMCwxOS45OTg4ODg5IEM0LjUwMDU1NTU2LDE5Ljk5ODg4ODkgMC4wMDExMTExMTExMSwxNS40OTg4ODg5IDAuMDAxMTExMTExMTEsOS45OTk0NDQ0NCBDMC4wMDExMTExMTExMSw0LjUwMTExMTExIDQuNTAwNTU1NTYsMC4wMDExMTExMTExMSAxMCwwLjAwMTExMTExMTExIEMxNS40OTk0NDQ0LDAuMDAxMTExMTExMTEgMTkuOTk4ODg4OSw0LjUwMTExMTExIDE5Ljk5ODg4ODksOS45OTk0NDQ0NCBDMTkuOTk4ODg4OSwxNS40OTg4ODg5IDE1LjQ5OTQ0NDQsMTkuOTk4ODg4OSAxMCwxOS45OTg4ODg5IEwxMCwxOS45OTg4ODg5IFogTTEzLjM5Nzc3NzgsNi4xMTA1NTU1NiBMOC4xMTk0NDQ0NCwxMS4yOTYxMTExIEw2LjA0NjY2NjY3LDkuMjYgTDQuNDQzODg4ODksMTAuODM0NDQ0NCBMOC4xMTk0NDQ0NCwxNC40NDUgTDkuNzIyMjIyMjIsMTIuODcwNTU1NiBMMTUuMDAwNTU1Niw3LjY4NTU1NTU2IEwxMy4zOTc3Nzc4LDYuMTEwNTU1NTYgTDEzLjM5Nzc3NzgsNi4xMTA1NTU1NiBaIE04LjExOTQ0NDQ0LDExLjI5NjExMTEgTDguMTE5NDQ0NDQsMTEuMjk2MTExMSBMOS43MjIyMjIyMiwxMi44NzA1NTU2IEw4LjExOTQ0NDQ0LDExLjI5NjExMTEgTDguMTE5NDQ0NDQsMTEuMjk2MTExMSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==)
    no-repeat;
  width: 20px;
  height: 20px;
  margin-top: -10px;
`;
