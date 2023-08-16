import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout.tsx'
import Home from '../pages/Home.tsx'
import { Employees } from '../pages/Employees.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/employees',
        element: <Employees />,
      }
    ],
  },
])