/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";

const Contacts = ({ setSelected }) => {
  setSelected("Contacts Information");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
    },

    {
      field: "phone",
      headerName: "Phone number",
      flex: 1,
    },
    {
      field: "country",
      headerName: "Country",
      flex: 1,
    },
    {
      field: "adress",
      headerName: "Adress ",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zip",
      headerName: "Zip Code ",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email address",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (row) => {
        return (
          <Stack direction="row" spacing={3} mt={"10px"}>
            <IconButton
              onClick={() => {
                console.log(row.id);
              }}
            >
              <EditOutlined />
            </IconButton>

            <IconButton
              title="Delete"
              color="error"
              onClick={() => {
                console.log("Delete");
              }}
            >
              <DeleteOutline />
            </IconButton>
          </Stack>
        );
      },
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
