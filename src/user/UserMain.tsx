import { useState } from 'react';
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  CircularProgress,
  Toolbar,
  Typography,
} from '@mui/material';

import {
  useGetUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} from '../api/userApi';
import AlertDialog from '../ui/AlertDialog';
import UserForm from './UserForm';
import UserTable from './UserTable';

export default function UserMain() {
  const { data = [], error, isLoading } = useGetUsersQuery();
  const [doAddUser] = useAddUserMutation();
  const [doUpdateUser] = useUpdateUserMutation();
  const [doDeleteUser] = useDeleteUserMutation();

  const [userToSave, setUserToSave] = useState<any>();
  const [userToEdit, setUserToEdit] = useState<any>();
  const [userToDelete, setUserToDelete] = useState<any>();

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        p={3}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {JSON.stringify(error)}
      </Alert>
    );
  }

  return (
    <>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5">Users</Typography>
        <Button
          variant="contained"
          onClick={() => setUserToSave(true)}
        >
          Add User
        </Button>
      </Toolbar>
      <Box px={3}>
        <UserTable
          rows={data}
          onRowEdit={setUserToEdit}
          onRowDelete={setUserToDelete}
        />
      </Box>
      {(userToSave || userToEdit) && (
        <UserForm
          formValues={userToEdit}
          onSubmit={(data) => {
            if (userToSave) {
              doAddUser(data);
              setUserToSave(false);
            } else if (userToEdit) {
              doUpdateUser(data);
              setUserToEdit(undefined);
            }
          }}
          onDismiss={() => {
            if (userToSave) {
              setUserToSave(false);
            } else if (userToEdit) {
              setUserToEdit(undefined);
            }
          }}
        />
      )}
      <AlertDialog
        open={Boolean(userToDelete)}
        title="Delete?"
        onConfirm={() => {
          doDeleteUser(userToDelete);
          setUserToDelete(undefined);
        }}
        onDismiss={() => setUserToDelete(undefined)}
      >
        <Typography>This will delete "{userToDelete?.name}" record.</Typography>
      </AlertDialog>
    </>
  );
}
