import {Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container} from '@mui/material/';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import React, { useState } from 'react';


import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              color= "secondary"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              color= "secondary"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: 'secondary.main' }}
            >
              Sign Up
            </Button>
            <Grid container sx={{display: "flex", justifyContent: "center"}}>
            
              <Grid item>
                <Link href="/login" variant="body2" color="secondary">
                  {"Already have an account? Log In!"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
    

</Box>
  );
}

export default Signup;