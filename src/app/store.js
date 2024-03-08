import { configureStore } from "@reduxjs/toolkit";
import countersReducer from '../features/counters/countersSlice'
import postsReducer from "../features/posts/postSlice";

const store = configureStore({
   reducer: {
      counters: countersReducer,
      posts: postsReducer,
   },
})

export default store;