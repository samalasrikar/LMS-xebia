import { Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import Button from "./Button";

function ConfirmDialog({ open, title, message, confirmLabel = "Confirm", cancelLabel = "Cancel", onConfirm, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent><Typography color="text.secondary">{message}</Typography></DialogContent>
      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button tone="outline" onClick={onClose}>{cancelLabel}</Button>
        <Button tone="cta" onClick={onConfirm}>{confirmLabel}</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDialog;
