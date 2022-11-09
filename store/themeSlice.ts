import { createSlice } from '@reduxjs/toolkit'

export interface TodosState {
  mood: string
}

const initialState: TodosState = {
  mood: 'light'
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if(state.mood === 'light') {
        state.mood = 'dark'
      }else {
        state.mood = 'light'
      }
    } 
    }
  }
)

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer