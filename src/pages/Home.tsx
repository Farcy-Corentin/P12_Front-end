import { Box, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import AddEmployeeForm from '../components/AddEmployeeForm.tsx'

export default function Home(): JSX.Element {

  return (
    <Container>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        margin: '24px 0',
      }}>
        <Typography variant="h2"
                    component="h1">
          HRnet
        </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
      }}>
        <Link to="/employees">View Current Employees</Link>
        <Typography variant="h5"
                    component="h2"
                    sx={{ margin: '22px 0' }}>Create Employee</Typography>
        <AddEmployeeForm/>
      </Box>
    </Container>
  )
}