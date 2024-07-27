// src/components/Layout.js
import { Container, AppBar, Toolbar, Typography } from '@mui/material';

const Layout = ({ children }) => (
  <Container>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">AI Task Manager</Typography>
      </Toolbar>
    </AppBar>
    {children}
  </Container>
);

export default Layout;
