/* eslint-disable react-hooks/exhaustive-deps */
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
import { mockDataTeam } from "../../data/mockData";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
  EditOutlined,
  DeleteOutline,
} from "@mui/icons-material";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Team = ({ setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  useEffect(() => {
    setSelected("Manage Team");
  }, []);

  const columns = [
    { field: "id", headerName: "ID" },
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
      field: "email",
      headerName: "Email address",
      flex: 1,
    },
    {
      field: "country",
      headerName: "Country",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Rol Level",
      flex: 1,
      renderCell: ({ row: { role } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            mt={"10px"}
            p="5px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            backgroundColor={
              role === "Admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {role === "Admin" && <AdminPanelSettingsOutlined />}
            {role === "Manager" && <SecurityOutlined />}
            {role === "Seller" && <LockOpenOutlined />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {role}
            </Typography>
          </Box>
        );
      },
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
        <Header title={"TEAM"} subtitle={"Manage the Team members"}></Header>
        <Button
          variant="contained"
          color="secondary"
          sx={{ height: "50px" }}
          onClick={() => {
            navigate("/form");
          }}
        >
          <Typography>Create Team Member</Typography>
        </Button>
      </Box>
      <Box
        m="10px 0 0 0"
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
          rows={mockDataTeam}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10, page: 0 },
            },
          }}
        ></DataGrid>
      </Box>
    </Box>
  );
};

export default Team;
