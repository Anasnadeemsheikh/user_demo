import React from 'react';
import { 
  AppBar,
  Box,
  createTheme,
  Container,
  CssBaseline,
  Paper,
  ThemeProvider,
  Toolbar,
  Typography
 } from '@mui/material';
 import { useSelector} from 'react-redux'
 import { DataGrid } from "@mui/x-data-grid";
 import { useNavigate } from "react-router-dom";
 import { AiOutlineArrowLeft } from "react-icons/ai";



const theme = createTheme();

export default function AddUser() {
    let navigate = useNavigate();
    const gstates = useSelector(state=>state.states)
    const columns = [
      { field: "id", headerName: "ID", flex: 0.2, headerAlign: "left" },
      {
        field: "firstName",
        headerName: "First Name",
        flex: 1,
        headerAlign: "left"
      },
      {
        field: "lastName",
        headerName: "Last Name",
        flex: 1,
        headerAlign: "left"
      },
      {
        field: "email",
        headerName: "Email",
        flex: 1,
        headerAlign: "left"
      },
      {
        field: "phone",
        headerName: "Phone",
        flex: 0.6,
        headerAlign: "left"
      },
      {
        field: "city",
        headerName: "City",
        flex: 0.4,
        headerAlign: "left"
      },
      {
        field: "country",
        headerName: "Country",
        flex: 0.8,
        headerAlign: "left",
      },
      {
        field: "location",
        headerName: "Location",
        flex: 0.8,
        headerAlign: "left",
      }
    ];

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
            All Users
          </Typography>
          <Box sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
               <DataGrid
                rows={gstates}
                getRowId={row => row.email}
                columns={columns}
                pageSize={10}
                autoHeight
                onRowClick={(params)=>navigate("/viewUser", { state: params.row } )}
              />
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
    </>
  );
}