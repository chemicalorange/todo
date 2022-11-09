import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TodosState {
  entities: {}
  ids: [string]
}

const initialState: TodosState = {
  entities: {
    '0001': {
      id: '0001',
      title: 'Read a book',
      checked: true
    },
    '0002': {
      id: '0002',
      title: 'Doing dinner',
      checked: false
    },
    '0003': {
      id: '0003',
      title: 'Learn programming',
      checked: false
    },
    '0004': {
      id: '0003',
      title: 'Coding',
      checked: false
    }
  },
  ids: ['0001', '0002', '0003']
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const index = Date.now().toString()
      let newTodo = {}
      newTodo[index] = {id: index, title: action.payload, checked: false}
      state.ids.push(index)
      state.entities = {...newTodo, ...state.entities}
      console.log({...newTodo, ...state.entities})
      
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      delete state.entities[action.payload]
      state.ids = state.ids.map(id => id !== action.payload)
    },
    toggleCheck: (state, action: PayloadAction<string>) => {
      const checked = state.entities[action.payload].checked 
      state.entities[action.payload].checked = !checked
    },
    removeCompleted: (state) => {
      Object.entries(state.entities).map(([index, item]) => {
         if(item.checked) {
          delete state.entities[index]
         } 
      })
    },
    reorderTodos: (state, action: PayloadAction<string>) => {
      const newState = {}
      action.payload.map(item => {
        newState[item.id] = item
      })
      state.entities = newState
    }
  },
})

export const { addTodo, removeTodo, toggleCheck, removeCompleted, reorderTodos } = todosSlice.actions

export default todosSlice.reducer