// configureStore : 슬라이스들을 store로 내보낸다

import { configureStore } from "@reduxjs/toolkit";

// ./slices/userSlices.js 에 있는 export default를 userSlice 라는 이름으로 포함
import userSlice from './slices/userSlices.js'

const store = configureStore({
    reducer:{
        userlist : userSlice,
    }
})

export default store;