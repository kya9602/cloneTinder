import React, { useEffect, useState } from "react";

// import './Chatting.css'
import * as SockJS from 'sockjs-client';
import styled from "styled-components";
import ChatFooter from "./ChatFooter";


// 실시간 채팅 페이지
const ChatDetail = () => {
    const initialState={
        /* type:"ENTER", */
        roomId: 10  ,
        sender: "테스트",
        message:"안녕하세요 사용자 1입니다. 반가워요!"
    }
    // chatting 토클 상태
    const [live, setLive] = useState(false);
    // 메세지 유저 및 내용
    const [message, setMessage] = useState('');
    //서버 url
    const [serverUrl, setServerUrl] = useState('');

    // 서버로 부터 받아온 내용
    const [chat, setChat] = useState([]);
    //console.log('chat: '+chat)

    const [sockjs, setSockjs] = useState();
    const [receivedData, setReceivedData] = useState('');

    const [mal, setMal] = useState(initialState);
    //console.log(mal)

    useEffect(() => { console.log(chat) }, [chat])

    useEffect(() => {
        if (receivedData === '') return;
        setChat([...chat, { sender: "Server", message: receivedData }])
    }, [receivedData])

    //생성 api = 'ws://3.34.2.239/ws-stomp')< roomid 받아오기; ws://3.34.5.30:8080/ws/chat
    const onClickConnectBtn = () => {
        const sock = new WebSocket('ws://3.34.5.30:8080/ws/chat');
        sock.onmessage = function (e) {
            setReceivedData(e.data)
            //console.log('e.data: '+ e.data)
        }
        setSockjs(sock);
        setChat([...chat, { sender: "testUser", message:   "Jin 님이 입장하셨습니다." }])
        setLive(true);
    }
    const onClickDisconnectBtn = () => {
        setLive(false);
    }
    const inputMessage = (e) => {
        setMessage(e.target.value);
        setMal({...mal, message:e.target.value});
    }
    const onEnter = (e) => {
        if (e.keyCode === 13) {
            sendMessage();
        }
    }
    const sendMessage = () => {
        if (message === '') return;
        setChat([...chat, { sender: "testUser", message: message }])
        //console.log(message)
        //console.log(sockjs)
        //console.log('json '+JSON.stringify(mal))
        sockjs.send(JSON.stringify(mal));
        // sockjs.send(message);
        setMessage('');
    }
    /* const setChatServerURL = (e) => {
        setServerUrl(e.target.value);
    } */


    /* const renderChat = () => {
        // console.log(chat)
        return chat.map(({ sender, message }, index) => (
            <div key={index}>
                <>{sender}: <>{message}</></>
            </div>
        ));
    } */
    const renderChat = () => {
        //console.log(chat)
        return chat.map(({ sender, message }, index) => (
            {sender}===null?(
            <Screenbox key={index}>
                <div>                                
                <YouMessage>{message}</YouMessage>
                </div>
            </Screenbox>
        ):(
            <Screenbox key={index}>
                <MyMessage>{message}</MyMessage>
            </Screenbox>
        )
            
        ));
    }


    return (
        <>
            
            <div className="chatting_container">
                {!live &&
                    <div>
                        <>매칭된 상대와 대화하기</>
                        {/* <input className="chatting_urlInput" type='text' placeholder="URL을 입력해주세요" onChange={setChatServerURL} value={serverUrl} /> */}
                        <button className="chatting_connectBtn" onClick={onClickConnectBtn}>연결</button>
                    </div>
                }
                {
                    live &&
                    <div>
                        <div className="chatting_Room">
                            <div>{renderChat()}</div>
                        </div>
                        <br />
                    </div>
                }
                <ChatFooter inputMessage={inputMessage} onEnter={onEnter} message={message} sendMessage={sendMessage} />
                
            </div>
        </>)
};

export default ChatDetail; 

const Screenbox = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
`

const MyMessage = styled.p`
    margin-left: auto;
    background-color: #29b3cd;
    padding: 15px;
    border-radius: 20px;
    color: white;
`

const YouMessage = styled.p`
    margin-left: 10px;
    background-color: lightgray;
    padding: 15px;
    border-radius: 20px;
`