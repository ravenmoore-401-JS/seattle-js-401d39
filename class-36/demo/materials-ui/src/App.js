import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { CardContent } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth='md'>
        <Typography variant="h1">
          Page Header
        </Typography>
        <Typography variant="h5">
          Here are some really cool things that you can do
        </Typography>
      </Container>

      <Container maxWidth='md'>
        <Grid spacing={5} alignItems="stretch">
          <Grid xs={12}>
            <Card>
              <CardHeader />
              <CardContent>
                Unicorns

              </CardContent>
            </Card>
           </Grid> 
        </Grid>
      </Container>

    </div>
  );
}

export default App;
