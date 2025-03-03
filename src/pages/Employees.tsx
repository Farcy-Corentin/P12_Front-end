import EmployeesTable from '../components/EmployeesTable.tsx'
import {
  Box, Container,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  Typography,
} from '@mui/material'
import { Search } from '@mui/icons-material'
import { Link } from 'react-router-dom'


export function Employees() {
  return (
    <Container sx={{ my: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Typography variant="h3"
                  component="h1">
        Current Employees
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
        <FormControl sx={{ my: 4, width: '25ch' }}
                     variant="standard">
          <Input
            id="search"
            placeholder="Search"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="search icon"
                >
                  <Search/>
                </IconButton>
              </InputAdornment>}
          />
        </FormControl>
      </Box>
      <EmployeesTable/>
      <Link to={'/'} className="link">Home</Link>
    </Container>
  )
}