import { configureStore } from '@reduxjs/toolkit'
import navSlice from './navSlice'
import themeSlice from './themeSlice'

export default configureStore({
  reducer: {
    nav: navSlice,
    theme: themeSlice
  }
})