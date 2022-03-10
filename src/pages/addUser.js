import React, { useState } from 'react';
import MapsModel from './components/mapsModel'
import { 
  AppBar,
  Box,
  Button,
  createTheme,
  Container,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography
 } from '@mui/material';
 import { useDispatch } from 'react-redux'
 import { useFormik } from 'formik';
 import { useNavigate } from "react-router-dom";


const theme = createTheme();

export default function AddUser() {
    const [show, setshow] = useState(false);
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleHide = () => setshow(false);
    const handleShow = () => setshow(true);
    

    const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        country: '',
        location: []
      },
      onSubmit: (values) => {
        dispatch({type:'ADDUSER',payload:values})
      },
    });

    const setLocation = (location) => formik.setFieldValue("location",location);


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
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper elevation={6} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Add User
          </Typography>
          <Box sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <form onSubmit={formik.handleSubmit}> 
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="firstName"
                    name="firstName"
                    label="First name"
                    fullWidth
                    size="small"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    fullWidth
                    size="small"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    size="small"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="phone"
                    name="phone"
                    label="Phone Number"
                    fullWidth
                    size="small"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    size="small"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="country"
                    name="country"
                    label="Country"
                    fullWidth
                    size="small"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="outlined" fullWidth onClick={()=>handleShow()}>
                      Add location in Maps
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button type='submit' variant="contained" fullWidth >
                      Add User
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Paper>
            <Box>
              <Button variant="contained" fullWidth onClick={()=>navigate("/userList")}>
                  View All Users
              </Button>
            </Box>
      </Container>
    <MapsModel
        show={show}
        hide={handleHide}
        setLocation={setLocation}
      />
    </ThemeProvider>
    </>
  );
}