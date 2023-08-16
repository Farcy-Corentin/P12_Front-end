import { Box, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import AddEmployeeForm from '../components/AddEmployeeForm.tsx'
import { useState } from 'react'
// @ts-ignore
import { Modal, ModalCloseButton, ModalHeader, ModalContent } from 'p12-modal'
import 'p12-modal/style.css'

export default function Home(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  function onClose() {
    setIsOpen(false)
  }

  return (
    <>
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
          <AddEmployeeForm setIsOpen={setIsOpen}/>
        </Box>
      </Container>
      <Modal
        isOpen={isOpen}
        ariaLabel="Successfull modal when employee is created."
        onClose={onClose}
        zIndexOverlay="z-40"
        zIndexModal="z-50"
      >
        <ModalHeader>
          <Box sx={{
            marginBottom: "32px"
          }}>
            <button
              onClick={onClose}
              className="absolute top-1 right-1 py-2 px-4 pointer text-xl transition ease-in-out delay-100 duration-200  text-gray-400 hover:text-black transparent border-none border-black rounded-md"
            >
              X
            </button>
          </Box>
        </ModalHeader>
        <Box sx={{
          display: "flex",
          padding: "16px 16px 32px 16px"
        }}>
          <p>
            Employee Created!
          </p>
        </Box>
      </Modal>
    </>
  )
}