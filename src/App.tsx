import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './libs/router.tsx'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

function App({ children }: PropsWithChildren) {
  return (
    <>
      <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <RouterProvider router={router}/>
          {children}
        </LocalizationProvider>
      </Provider>
    </>
  )
}

export default App
