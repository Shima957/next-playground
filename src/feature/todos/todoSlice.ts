import { RootState } from "@/store/store";
import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoState {
  id: number;
  todo: string;
  completed: boolean;
}

const todoAdapter = createEntityAdapter<TodoState>({
  selectId: (todo) => todo.id,
})

const todosInitialState = todoAdapter.getInitialState()

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todosInitialState
  },
  reducers: {
    add: (state, action: PayloadAction<TodoState>) => {
      const { id, todo } = action.payload
      todoAdapter.addOne(state.todosInitialState, { id, todo, completed: false })
    },
    remove: (state, action: PayloadAction<{ id: number }>) => {
      todoAdapter.removeOne(state.todosInitialState, action.payload.id)
    },
  }
})

// 全件取得
export const selectTodos = todoAdapter.getSelectors<RootState>(state => state.todo.todosInitialState)
export const { add, remove } = todoSlice.actions
export default todoSlice.reducer
