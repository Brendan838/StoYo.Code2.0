import React, { useState } from 'react';
import {Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container} from '@mui/material/';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Auth from '../utils/auth';
//TODO: set up ADD_USER reference from mutation.js file
import {ADD_USER} from '../utils/mutations';
//TODO: set up useMutation 
import {useMutation} from '@apollo/react-hooks';
export default function SignIn() {

const [addUser] = useMutation(ADD_USER);

  
const handleSubmit = async (event) => {

  event.preventDefault();
  const newData = new FormData(event.currentTarget);
  // eslint-disable-next-line no-console
  const submitData = {
    email: newData.get('email'),
    password: newData.get('password'),
  }

  

  try {
      //const response = await createUser(userFormData);
      //set up useMutation hook
      const {data} = await addUser({ variables: submitData  });
      console.log(data);

      if (!data) {
        throw new Error("something went wrong!");
      }

      //pass in token recevied from mutation response
      Auth.login(data.addUser.token);
      //part of mutation use
      window.location.redirect("/");
    } catch (err) {
      console.error(err);
     
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