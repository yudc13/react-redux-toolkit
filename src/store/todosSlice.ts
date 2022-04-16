import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../type'
import { RootState } from './index'

interface TodosState {
  todos: Todo[]
}

const initialState: TodosState = {
  todos: [{
    id: 1,
    desc: 'study Redux',
    isCompleted: false
  }, {
    id: 2,
    desc: 'study React',
    isCompleted: true
  }, {
    id: 3,
    desc: 'study Redux Toolkit',
    isCompleted: false
  }]
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<Todo>) => {
      state.todos.push(payload)
    },
    edit: (state, { payload }: PayloadAction<Todo>) => {
      const todoEdit = state.todos.find(todo => todo.id === payload.id)
      if (todoEdit) {
        todoEdit.desc = payload.desc
      }
    },
    toggle: (state, { payload }: PayloadAction<Todo>) => {
      const todoEdit = state.todos.find(todo => todo.id === payload.id)
      if (todoEdit) {
        todoEdit.isCompleted = payload.isCompleted
      }
    },
    remove: (state, { payload }: PayloadAction<{ id: number }>) => {
      const index = state.todos.findIndex(todo => todo.id === payload.id)
      if (index !== -1) {
        state.todos.splice(index, 1)
      }
    }
  }
})

export const { addTodo, edit, toggle, remove } = todosSlice.actions

export const selectTodos = (state: RootState) => state.todo.todos

export default todosSlice.reducer
