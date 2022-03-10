import React, { useState } from 'react';
import { 
  AppBar,
  Box,
  Button,
  createTheme,
  Container,
  CssBaseline,
  Grid,
  Paper,
  ThemeProvider,
  Toolbar,
  Typography
 } from '@mui/material';
 import { useNavigate, useLocation } from "react-router-dom";
 import { AiOutlineArrowLeft } from "react-icons/ai";
 import MapsModel from './components/mapsModel'


const theme = createTheme();
const styles = {
  typo: { display: 'inline-block' }
};

export default function AddUser() {
  let navigate = useNavigate();
  let {state} = useLocation();
  const [show, setshow] = useState(false);

  const handleHide = () => setshow(false);
  const handleShow = () => setshow(true);


  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={3}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Demo App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="xl" sx={{ mb: 4 }}>
        <Paper elevation={6} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <div className="btn-group mt-3 mb-3">
            <button
              type="button"
              className="btn btn-outline-info w-10 d-flex justify-content-center align-items-center"
              onClick={() => navigate(-1)}>
              <AiOutlineArrowLeft title="back" size={18} className="mr-2" />
              Back
            </button>
           </div>
          <Typography component="h1" variant="h4" align="center">
            User Details
          </Typography>
          <Box sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                <Typography style={styles.typo} component="h6" variant="h6" align="left">
                  First Name :  
                </Typography>
                <Typography style={styles.typo} component="h6" variant="h6" align="left">
                  {state.firstName} 
                </Typography>
                </Grid>
                <Grid item xs={12}>
                <Typography style={styles.typo} component="h6" variant="h6" align="left">
                  Last Name : 
                </Typography>
                <Typography style={styles.typo} component="h6" variant="h6" align="left">
                  {state.lastName} 
                </Typography>
                </Grid>
                <Grid item xs={12}>
                <Typography style={styles.typo} component="h6" variant="h6" align="left">
                  Email : 
                </Typography>
                <Typography style={styles.typo} component="h6" variant="h6" align="left">
                 {state.email} 
                </Typography>
                </Grid>
                <Grid item xs={12}>
                <Typography style={styles.typo} component="h6" variant="h6" align="left">
                  Phone : 
                </Typography>
                <Typography style={styles.typo} component="h6" variant="h6" align="left">
                 {state.phone} 
                </Typography>
                </Grid>
                <Grid item xs={12}>
                <Typography style={styles.typo} component="h6" variant="h6" align="left">
                  City : 
                </Typography>
                <Typography style={styles.typo} component="h6" variant="h6" align="left">
                  {state.city}  
                </Typography>
                </Grid>
                <Grid item xs={12}>
                <Typography style={styles.typo} component="h6" variant="h6" align="left">
                  Country : 
                </Typography>
                <Typography style={styles.typo} component="h6" variant="h6" align="left">
                  {state.country} 
                </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button type='submit' variant="contained" fullWidth onClick={()=>handleShow()}>
                      View Location on Map
                  </Button>
                </Grid>
              </Grid>
          </Box>
        </Paper>
      </Container>
      <MapsModel
        show={show}
        hide={handleHide}
        location={state.location}
      />
    </ThemeProvider>
    </>
  );
}