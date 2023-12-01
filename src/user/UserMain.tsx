import { useState } from 'react';
import { Box, Button, Toolbar, Typography } from '@mui/material';

import AlertDialog from '../ui/AlertDialog';
import UserForm from './UserForm';
import UserTable from './UserTable';

export default function UserMain() {
  const [userToSave, setUserToSave] = useState<any>();
  const [userToEdit, setUserToEdit] = useState<any>();
  const [userToDelete, setUserToDelete] = useState<any>();

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
          rows={[]}
          onRowEdit={setUserToEdit}
          onRowDelete={setUserToDelete}
        />
      </Box>
      {(userToSave || userToEdit) && (
        <UserForm
          formValues={userToEdit}
          onSubmit={(data) => {}}
          onDismiss={() => {
            setUserToSave(false);
            setUserToEdit(undefined);
          }}
        />
      )}
      <AlertDialog
        open={Boolean(userToDelete)}
        title="Delete?"
        onConfirm={() => {}}
        onDismiss={() => setUserToDelete(undefined)}
      >
        <Typography>This will delete "{userToDelete?.name}" record.</Typography>
      </AlertDialog>
    </>
  );
}
