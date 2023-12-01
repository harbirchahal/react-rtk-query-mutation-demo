import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
} from '@mui/material';

export type FormDialogProps = Omit<DialogProps, 'onClose'> & {
  onSubmit: (data: any) => void;
  onDismiss: () => void;
};

export default function FormDialog(props: FormDialogProps) {
  const { title, onSubmit, onDismiss, children, ...others } = props;

  return (
    <Dialog
      {...others}
      onClose={onDismiss}
    >
      <form onSubmit={onSubmit}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button onClick={onDismiss}>Dismiss</Button>
          <Button
            type="submit"
            color="success"
          >
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
