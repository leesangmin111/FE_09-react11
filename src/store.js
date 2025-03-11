import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // reducers 파일 경로 확인

const store = configureStore({
    reducer: rootReducer,
});

export default store;
