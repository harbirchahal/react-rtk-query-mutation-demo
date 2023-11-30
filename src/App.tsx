import { AppBar, Toolbar, Typography } from '@mui/material';

export default function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography sx={{ fontWeight: 500, fontSize: '1.25rem' }}>
            React RTK Query and Mutation Demo
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
