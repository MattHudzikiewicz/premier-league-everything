import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, TextField, Typography } from '@mui/material';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import { makeStyles } from "@mui/styles";
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid" 
import ThemeSwitchInput from './UniversalInputs/ThemeSwitch';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box'

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center" >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
}));


function FORMLOGIN() {
  return(    
    <FormControl >
      <TextField
        margin="normal"
        fullWidth
        id="emailText" 
        label="Email: " 
        variant='outlined' 
        required 
        autoFocus
        
      />
      <TextField 
        id="passwordText" 
        label="Password:"  
        type='Password' 
        variant='outlined' 
        required
        fullWidth
        margin="normal"
        autoFocus
        sx={{marginTop: 0}}
      />
      <Button variant='Contained' type='Submit' autoFocus fullWidth margin="nomral" sx={{marginTop: 0, backgroundColor: 'blue'}}>
        Submit
      </Button>
      <Link to="/sign-up" variant="body2" color="inherit">
        Don't Have an Account? Sign up.
      </Link>
    </FormControl>
  );
}

export default function Login() {
  return (
    
      <Grid container sx={{height:"100vh", justifyContent: "center", alignItems: "center"}}>
        <CssBaseline />
        <Grid item >
          <ThemeSwitchInput/>  
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={3}
          square={false}
          sx={{
            display: 'flex', 
            justifyContent: 'center ', 
            width: '100%',
            alignItems: 'center',
            height: "50vh"
        }}
        >
          <div >
            <Avatar sx={{marginLeft: 12.5}}>
              <LockRoundedIcon />
            </Avatar>
            <Typography align="center" h="h1" variant="h5">
              Sign in
            </Typography>
            <FORMLOGIN />
            <Box mt={5} mb={0}>
              <Copyright />
            </Box>
          </div>
        </Grid>
      </Grid>
  );
}
