import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout.tsx'
import Home from '../pages/Home.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
])