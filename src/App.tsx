import { Provider as StoreProvider } from 'react-redux';
import {
  AppBar,
  Button,
  Link,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';

import store from './api/store';
import UserMain from './user/UserMain';

const externalLinks = [
  {
    label: 'View on GitHub',
    href: 'https://github.com/harbirchahal/react-rtk-query-mutation-demo',
  },
  {
    label: 'Edit on StackBlitz',
    href: 'https://stackblitz.com/edit/react-rtk-query-mutation-demo',
  },
];

export default function App() {
  return (
    <StoreProvider store={store}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ fontWeight: 500, fontSize: '1.25rem' }}>
            React RTK Query and Mutation Demo
          </Typography>
          <Stack
            direction="row"
            spacing={1}
          >
            {externalLinks.map((link, index) => (
              <Button
                key={index}
                variant="contained"
                size="small"
              >
                <Link
                  href={link.href}
                  color="inherit"
                  underline="none"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </Link>
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>
      <UserMain />
    </StoreProvider>
  );
}
