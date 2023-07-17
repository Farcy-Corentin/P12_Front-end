import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import AddEmployeeForm from '../components/AddEmployeeForm.tsx'

export default function Home(): JSX.Element {

  return (
    <>
      <Box sx={ {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '24px 0',
      } }>
        <Typography variant="h2"
                    component="h1">HRnet</Typography>
      </Box>
      <Box sx={ {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      } }>
        <Link to="/employes">View Current Employees</Link>
        <Typography variant="h5"
                    component="h2"
                    sx={ { margin: '22px 0' } }>Create Employee</Typography>
        <AddEmployeeForm />
      </Box>
    </>
  )
}