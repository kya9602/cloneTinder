import styled from "styled-components";

const LoginHeader = () => {
  return (
    <div>
      <Logo src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F2K43r%2FbtrLQybFiMT%2F7CHKGeWAoneU8CgqATMeKK%2Fimg.png" />
    </div>
  );
};



const Logo = styled.img`
  display: flex;
  width: 100%;
  align-items: center;
  `

export default LoginHeader;