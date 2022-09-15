import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __getMembers = createAsyncThunk(
    "member/members",
    async (payload, thunkAPI) => {
        try {
            const data = await axios.get(`http://localhost:3001/list`);
            //console.log(data.data)
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.code);
        }
    }
);



export const members = createSlice({
    name:"members",
    initialState: {
        data:[],
        success: false,
        isLoading: false,
        error: null,
      },

    reducers:{       
    },

    extraReducers: {
        [__getMembers.pending]: (state) => {
          state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
        },
        [__getMembers.fulfilled]: (state, action) => {
          state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
          state.data = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
        },
        [__getMembers.rejected]: (state, action) => {
          state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
          state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
        },
        
      },
})

export default members;