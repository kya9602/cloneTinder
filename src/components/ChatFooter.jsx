import { useState, use } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const ChatFooter = ({inputMessage, onEnter, message, sendMessage}) => {
    const [chat, setChat] = useState("");
    const navigate = useNavigate();
    

    return (
        <>
        <ChatContainer>
            <Input 
            type="text"
            value={message}
            placeholder="메세지를 입력하세요"            
            onChange={inputMessage}
            onKeyDown={onEnter}
            />
            <InputButton onClick={sendMessage}>전송</InputButton>
      </ChatContainer>
        {/* <ChatFoot style={{position:"fixed", width:"100%", bottom:"0"}}>
            <div style={{width:"5%",cursor:"pointer", margin:"10px"}}>
                추가
            </div>
            <div style={{width:"85%", height:"100%", textAlign:"center", alignItems:"center", display:"flex"}}>
            <input
            type="text"
            value={message}
            placeholder="메세지를 입력하세요"
            style={{width:"100%",height:"100%", borderRadius:"30px", height:"30px"}}
            onChange={inputMessage}
            onKeyDown={onEnter}
            />
            </div>
            <div style={{width:"5%", cursor:"pointer", margin:"10px"}} onClick={sendMessage}>
                보내기
            </div>
        </ChatFoot> */}
        </>
    )
}

export default ChatFooter;

const ChatFoot = styled.div`
border-top: 1.5px solid grey;
display:flex;
position:absolute; 
bottom:0;
width: 100%;
height: 50px;
justify-content:center;
align-items:center;
text-align: center;
background-color:#eeeeee
`

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: none;
`

const InputButton = styled.button`    
    width: 60px;
    border: none;
    margin-right: 32px;
    background-color: white;
    font-weight: bolder;
    color: #fe3d71;
`

const ChatContainer = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid lightgray;
`