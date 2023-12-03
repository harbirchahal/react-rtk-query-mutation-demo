import { Provider as StoreProvider } from 'react-redux';
import { AppBar, Toolbar, Typography } from '@mui/material';

import store from './api/store';
import UserMain from './user/UserMain';

export default function App() {
  return (
    <StoreProvider store={store}>
      <AppBar position="static">
        <Toolbar>
          <Typography sx={{ fontWeight: 500, fontSize: '1.25rem' }}>
            React RTK Query and Mutation Demo
          </Typography>
        </Toolbar>
      </AppBar>
      <UserMain />
    </StoreProvider>
  );
}
