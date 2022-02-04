import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '@/feature/counter/counterSlice'
import todoReducer from '@/feature/todos/todoSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
