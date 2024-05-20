import React, { ReactComponentElement, ReactNode, useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Box } from '@mui/material';

interface ModalProps {
  isOpen: boolean;
  handleClose: (event: React.FormEvent) => void;
  title: string;
  description: string;
  content: ReactNode;
}

const CustomDialog = ({isOpen, handleClose, title, description, content}: ModalProps) => {

  const [isDialogOpen, setIsDialogOpen] = useState(isOpen)

  useEffect(() => {
    setIsDialogOpen(isOpen)
  }, [isOpen])

  return (
    <Dialog
      fullWidth={false}
      open={isDialogOpen}
      onClose={handleClose}
      maxWidth="md"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Box minWidth={500} display="flex" flexDirection="column" gap={2}>
          <DialogContentText>
              {description}
          </DialogContentText>
          <Box display="flex" flexDirection="column" gap={1}>
            {content}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;