import { DataGrid, GridColDef } from '@mui/x-data-grid'
import Employee from '../Interface/EmployeeInterface.ts'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store.ts'
import { Box } from '@mui/material'

export default function EmployeesTable() {
  const columns: GridColDef[] = [
    {
      field: 'firstName',
      headerName: 'First Name',
      width: 70
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      width: 130
    },
    {
      field: 'startedAt',
      headerName: 'Start Date',
      width: 130,
      type: 'date',
      valueGetter: (params) => {
        return new Date(params.row.startedAt)
      },
    },
    {
      field: 'department',
      headerName: 'Department',
      width: 90,
    },
    {
      field: 'dateOfBirth',
      headerName: 'Date of Birth',
      type: 'date',
      valueGetter: (params) => {
        return new Date(params.row.dateOfBirth)
      },
      width: 160,
    },
    {
      field: 'street',
      headerName: 'Street',
      width: 130,
    },
    {
      field: 'city',
      headerName: 'City',
      width: 130,
    },
    {
      field: 'state',
      headerName: 'State',
      width: 130,
    },
    {
      field: 'zip',
      headerName: 'Zip Code',
      width: 130,
    },
  ]

  const employees: Employee[] = useSelector((state: RootState) => state.createEmployee)

  return (
    <Box sx={{
      height: '50vh',
      width: '100%',
      marginBottom: '24px'
    }}>
      <DataGrid
        rows={employees}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 25, 50, 100]}
        disableColumnMenu={true}
        getRowId={() => Math.random().toString(36)}
      />
    </Box>
  )
}