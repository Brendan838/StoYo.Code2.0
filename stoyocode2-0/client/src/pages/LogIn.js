import * as React from 'react';
import {Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container} from '@mui/material/';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (

<Box sx={{   gridColumnStart: 1, 
              gridColumnEnd: 13, 
              gridRowStart: 3,
              gridRowEnd: 12}}>
    
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{

            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
	   
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
           
             <Grid container sx={{display: "flex", justifyContent: "center"}}>
            
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign up!"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
    

</Box>
  );
}