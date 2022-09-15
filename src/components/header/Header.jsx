import styled from "styled-components";
import { Navigate,useNavigate } from "react-router-dom";
import bg from "../../img/header.png"






const Header = () => {
    const Navigate = useNavigate();
  return (
    <div>
            <div>
            <HeaderBox>
             <Title_Logo src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcRD0Ve%2FbtrLKJNfGyg%2FwCSdqThFHdkEAkK92htiGk%2Fimg.png" onClick={() => { Navigate("/") }}></Title_Logo>
                <div>
                <StHeadbtn onClick={() => { Navigate("/mypage") }}>동무정보는 털지않갓어</StHeadbtn>
                <StHeadbtn onClick={() => { Navigate("/") }}>여기서 나가라우</StHeadbtn>
                </div>
            </HeaderBox>
            </div>
            <Title_bg className="main-bg" />
        </div>
  );
};





export default Header;

const Title_bg = styled.div`
height:280px;
background-image: url(${bg});
background-size: contain;
background-position: center;
background-repeat: no-repeat;

`

const HeaderBox = styled.form`
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-between;
    margin: 15px 15px 15px;

`;


const StHeadbtn = styled.button `
outline: none;
    border-width: 1px;
    border-radius: 12px;
    border-style: solid;
    padding: 7px 17px;
    margin: 15px 15px 15px;
    border: none;
    background: #C30D23;
    font-size: 20px;
    font-family: 'Yeon Sung', cursive;
    color: rgb(255, 255, 255);
    &:hover {
    border: 3px solid #C30D23  ;
    background-color: #fff;
    color: #C30D23;
    }
    
`;

const Title_Logo = styled.img`
margin-top:2rem;
height:80px;

`