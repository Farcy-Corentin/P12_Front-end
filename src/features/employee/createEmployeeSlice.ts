import Employee from '../../Interface/EmployeeInterface.ts'
import { createSlice } from '@reduxjs/toolkit'

const initialState: Employee[] = []

export const createEmployeeSlice = createSlice({
  name: 'createEmployee',
  initialState,
  reducers: {
    create: (state, action) => {
      state.push(action.payload)
    }
  },
})

export const { create } = createEmployeeSlice.actions
export const createEmployeeReducer = createEmployeeSlice.reducer