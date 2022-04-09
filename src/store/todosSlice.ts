import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../type'
import { RootState } from './index'

interface TodosState {
  todos: Todo[]
}

const initialState: TodosState = {
  todos: []
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<Todo>) => {
      state.todos.push(payload)
    }
  }
})

export const { addTodo } = todosSlice.actions

export const selectTodos = (state: RootState) => state.todos

export default todosSlice.reducer
