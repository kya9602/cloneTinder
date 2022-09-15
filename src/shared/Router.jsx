import React from "react";
import { Routes, Route } from "react-router-dom";
import ChatScreen from "../components/ChatScreen";
import MemberList from "../components/Memberlist";
import ChatDetail from "../components/TestChat";
import Chats from "../pages/Chats";
import Like from "../pages/Like";
import Main from "../pages/Main";
import Tour from "../pages/Tour";

const Router = () => {
    return(
        <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/chat" exact element={<Chats />} />
            <Route path="/chat/:person" exact element={<ChatScreen />} />
            <Route path="/chattest" exact element={<ChatDetail />} />
            <Route path="/member" exact element={<MemberList />} />
            <Route path="/tour" exact element={<Tour />} />
            <Route path="/like" exact element={<Like />} />
        </Routes>

    )

}

export default Router;