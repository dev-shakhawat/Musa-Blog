import { createSlice } from '@reduxjs/toolkit'

export const navSlice = createSlice({
  name: 'nav',
  initialState: {
    drawer: false,
    setting: false
  },
  reducers: { 
    drawerStatus: (state) => {
      state.drawer = !state.drawer
    },
    settingStatus: (state , action) => {
      state.setting = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { drawerStatus , settingStatus } = navSlice.actions

export default navSlice.reducer