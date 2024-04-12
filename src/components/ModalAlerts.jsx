/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const ModalAlerts = ({
  open,
  setOpen,
  title,
  text,
  confirmAction,
  denyAction,
  onConfirm,
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => setOpen(false)}
            color="secondary"
            autoFocus
          >
            {denyAction}
          </Button>
          <Button
            variant="contained"
            onClick={() => onConfirm()}
            color="error"
            autoFocus
          >
            {confirmAction}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ModalAlerts;
