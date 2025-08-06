import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: { 
    selectedTheme: "light"
  },
  reducers: {  
    themeSet: (state, action) => {
      state.selectedTheme = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { themeSet } = themeSlice.actions

export default themeSlice.reducer