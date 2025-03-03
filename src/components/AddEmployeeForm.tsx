import { useRef, useState, Dispatch, SetStateAction } from 'react'
import { Button, FormLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { Form } from 'react-router-dom'
import Employee from '../Interface/EmployeeInterface.ts'
import { states } from '../data/states.ts'
import { departments } from '../data/departments.ts'
import { useDispatch } from 'react-redux'
import { create } from '../features/employee/createEmployeeSlice.ts'

export default function AddEmployeeForm({ setIsOpen }: { setIsOpen:  Dispatch<SetStateAction<boolean>>}) {
  const firstNameRef = useRef<HTMLInputElement>(null)
  const lastNameRef = useRef<HTMLInputElement>(null)
  const dateOfBirthRef = useRef<HTMLInputElement>(null)
  const startedAtRef = useRef<HTMLInputElement>(null)
  const streetRef = useRef<HTMLInputElement>(null)
  const cityRef = useRef<HTMLInputElement>(null)
  const [state, setState] = useState(states[0].abbreviation)
  const zipRef = useRef<HTMLInputElement>(null)
  const [department, setDepartment] = useState(departments[0].name)
  const dispatch = useDispatch()

  function saveEmployee(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const employee: Employee = {
      firstName: firstNameRef.current?.querySelector('input')?.value ?? '',
      lastName: lastNameRef.current?.querySelector('input')?.value ?? '',
      dateOfBirth: dateOfBirthRef.current?.querySelector('input')?.value ?? '',
      startedAt: startedAtRef.current?.querySelector('input')?.value ?? '',
      street: streetRef.current?.querySelector('input')?.value ?? '',
      city: cityRef.current?.querySelector('input')?.value ?? '',
      state: state ?? '',
      zip: zipRef.current?.querySelector('input')?.value ?? '',
      department: department ?? '',
    }

    dispatch(create(employee))

    const inputs = [
      firstNameRef,
      lastNameRef,
      dateOfBirthRef,
      startedAtRef,
      streetRef,
      cityRef,
      zipRef,
    ]

    reset({ inputs: inputs })
    setIsOpen(true)
  }

  function reset({ inputs }: { inputs: React.RefObject<HTMLInputElement>[] | React.RefObject<HTMLSelectElement>[] }) {
    inputs?.forEach((input) => {
      if (input.current && input.current.querySelector('input')) {
        const inputElement = input.current.querySelector('input')

        if (inputElement) {
          inputElement.value = ''
        }
      }
    })
    setState(states[0].abbreviation)
    setDepartment(departments[0].name)
  }

  return (
    <Form
      action="#"
      id="create-employee"
      onSubmit={ saveEmployee }
    >
      <FormLabel htmlFor="first-name">First Name</FormLabel>
      <TextField
        type="text"
        id="first-name"
        ref={ firstNameRef }
        fullWidth={ true }
      />
      <FormLabel htmlFor="last-name">Last Name</FormLabel>
      <TextField
        type="text"
        id="last-name"
        ref={ lastNameRef }
        fullWidth={ true }
      />
      <FormLabel htmlFor="date-of-birth">Date of Birth</FormLabel>
      <DatePicker ref={ dateOfBirthRef } />
      <FormLabel htmlFor="start-date">Start Date</FormLabel>
      <DatePicker ref={ startedAtRef } />
      <Typography variant="h5" component="h3" sx={{
        marginTop: "20px"
      }}>Address:</Typography>
      <FormLabel htmlFor="street">Street</FormLabel>
      <TextField
        id="street"
        type="text"
        ref={ streetRef }
        fullWidth={ true }
      />
      <FormLabel htmlFor="city">City</FormLabel>
      <TextField
        id="city"
        type="text"
        ref={ cityRef }
        fullWidth={ true }
      />
      <FormLabel htmlFor="state">State</FormLabel>
      <Select
        name="state"
        id="state"
        value={ state }
        onChange={ (event: SelectChangeEvent<string>) => setState(event.target.value) }
        fullWidth={ true }
      >
        { states.map(state => (
          <MenuItem key={ state.abbreviation }
                    value={ state.abbreviation }>
            { state.name }
          </MenuItem>
        )) }
      </Select>
      <FormLabel htmlFor="zip-code">Zip Code</FormLabel>
      <TextField
        id="zip-code"
        type="text"
        ref={ zipRef }
        fullWidth={ true }
      />
      <FormLabel htmlFor="department">Department</FormLabel>
      <Select
        name="department"
        id="department"
        value={ department }
        onChange={ (event: SelectChangeEvent<string>) => setDepartment(event.target.value) }
        fullWidth={ true }
      >
        { departments.map(department => (
          <MenuItem key={ department.name }
                    value={ department.name }>
            { department.name }
          </MenuItem>
        )) }
      </Select>
      <div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={ { margin: '16px 0' } }
          aria-label="Save Employee">
          Save
        </Button>
      </div>
    </Form>
  )
}