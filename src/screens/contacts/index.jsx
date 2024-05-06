/* eslint-disable react/prop-types */
import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const Contacts = ({ setSelected }) => {
  setSelected("Contacts Information");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Register ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column-cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      HeaderAling: "left",
      aling: "left",
    },
    {
      field: "phone",
      headerName: "Phone number",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address ",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code ",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email address",
      flex: 1,
    },
  ];
  return (
    <Box m="20px" position={"relative"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header
          title={"CONTACTS"}
          subtitle={"The list of contact for futures references"}
        ></Header>
        <Button
          variant="contained"
          color="secondary"
          sx={{ height: "50px" }}
          onClick={() => {
            navigate("/form", { state: { provider: "PROVIDER" } });
          }}
        >
          <Typography>Create New Provider</Typography>
        </Button>
      </Box>
      <Box
        m="0px 0 0 0"
        height="75vh"
        position={"absolute"}
        width={"100%"}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .css-1essi2g-MuiDataGrid-columnHeaderRow": {
            background: `${colors.blueAccent[700]} !important`,
            borderBottom: "none",
          },
          "& .css-190e77d": {
            background: `${colors.blueAccent[700]} !important`,
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
        ></DataGrid>
      </Box>
    </Box>
  );
};

export default Contacts;
