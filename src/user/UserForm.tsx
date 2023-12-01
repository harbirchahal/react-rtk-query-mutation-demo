import { Stack, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

import FormDialog from '../ui/FormDialog';

export type UserFormProps = {
  formValues?: any;
  onSubmit: (data: any) => void;
  onDismiss: () => void;
};

export default function UserForm(props: UserFormProps) {
  const { formValues, onSubmit, onDismiss } = props;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formValues,
  });

  return (
    <FormDialog
      open
      fullWidth
      title="User Form"
      onSubmit={handleSubmit(onSubmit)}
      onDismiss={onDismiss}
    >
      <Stack spacing={1}>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              placeholder="Name"
              error={Boolean(errors.name)}
              {...field}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              placeholder="Email"
              error={Boolean(errors.name)}
              {...field}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              placeholder="Phone"
              error={Boolean(errors.name)}
              {...field}
            />
          )}
        />
      </Stack>
    </FormDialog>
  );
}
