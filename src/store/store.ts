import { configureStore } from '@reduxjs/toolkit'
import { createEmployeeReducer } from '../features/employee/createEmployeeSlice.ts'

export const store = configureStore(
  {
    reducer: {
      createEmployee: createEmployeeReducer,
    },
  },
)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch