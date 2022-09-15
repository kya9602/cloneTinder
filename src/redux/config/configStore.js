import { configureStore } from "@reduxjs/toolkit";
import member from "../modules/member";

const store = configureStore({
    reducer:{
        member:member.reducer,
    }
})

export default store;
