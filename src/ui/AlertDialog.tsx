import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
} from '@mui/material';

export type AlertDialogProps = Omit<DialogProps, 'onClose'> & {
  onConfirm: () => void;
  onDismiss: () => void;
};

export default function AlertDialog(props: AlertDialogProps) {
  const { title, onConfirm, onDismiss, children, ...others } = props;

  return (
    <Dialog
      {...others}
      onClose={onDismiss}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onDismiss}>Dismiss</Button>
        <Button
          color="error"
          onClick={onConfirm}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
