import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Main from "../pages/Main";
import Mypage from "../pages/Mypage";
import MyProfile from "../components/mypage/MyProfile";
import Choice from "../components/category/Choice";


const Router = () => {
    return(
        <Routes>
           <Route path="/" exact element={<Login />} />
           <Route path="/signup" exact element={<Signup />} />
           <Route path="/main" exact element={<Main />} />
           <Route path="/mypage" exact element={<Mypage />} />
           <Route path="/img" exact element={<MyProfile />} />
           <Route path="/choice" exact element={<Choice/>} />
            {/* <Route path="/message" exact element={<Message />} />*/}
           <Route path="*" element={<div>404 error 없는페이지입니다</div>} />
        </Routes>

    )
}

export default Router;
