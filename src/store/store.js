import { configureStore } from '@reduxjs/toolkit' //! In Redux-Toolkit we Create Our Store by importing " { configureStore } " from redux-toolkit
import homeSlice from './homeslice'
export const store = configureStore({  //! configureStore Accepts only 1 Object
    reducer: { home: homeSlice },
})