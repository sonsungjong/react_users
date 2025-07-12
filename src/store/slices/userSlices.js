// createSlice

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    // name, initialState, reducers
    name:'userSlice',                // slice끼리 중복만 안되게 이름
    initialState:{
        items:[],
    },        // 전체적으로 제공할 state변수의 처음값
    reducers:{
        // 전체적으로 제공할 함수 (state, action)
        setUsers(state, action){
            // fetch로 받아온 객체배열을 items에 담는다
            state.items = action.payload;
        },
        a(state, action){

        }
    }
})


// reducers에서 제공하는 함수들을 export
export const {setUsers, a} = userSlice.actions;
// store.js에서 사용할 수 있게 export default
export default userSlice.reducer;