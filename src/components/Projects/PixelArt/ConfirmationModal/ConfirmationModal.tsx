import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'

interface ConfirmationModalProps {
  open: boolean
  handleClose: () => void
  handleConfirm: () => void
}

const ConfirmationModal = ({ open, handleClose, handleConfirm }: ConfirmationModalProps) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Save Changes</DialogTitle>
      <DialogContent>Do you want to save the file?</DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleConfirm} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmationModal
