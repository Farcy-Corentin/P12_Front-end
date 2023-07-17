import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './libs/router.tsx'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { PropsWithChildren } from 'react'

function App({ children }: PropsWithChildren) {
  return (
    <>
      <LocalizationProvider dateAdapter={ AdapterMoment }>
        <RouterProvider router={ router } />
        { children }
      </LocalizationProvider>
    </>
  )
}

export default App
