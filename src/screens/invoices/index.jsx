/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import { useEffect } from "react";

const Invoices = ({ setSelected }) => {
  useEffect(() => {
    setSelected("Invoices Balances");
  }, []);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "Name",
      headerName: "Name",
      flex: 1,
      renderCell: (params) => {
        const { name, lastName } = params.row.clientInfo;
        return (
          <Box>
            {name} {lastName}
          </Box>
        );
      },
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
      renderCell: (params) => {
        const { phone } = params.row.clientInfo;
        return <Box>{phone}</Box>;
      },
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      renderCell: (params) => {
        const { email } = params.row.clientInfo;
        return <Box>{email}</Box>;
      },
    },
    {
      field: "product",
      headerName: "Product",
      flex: 1,
      renderCell: (params) => {
        const { name } = params.row.productInfo;
        return <Box>{name}</Box>;
      },
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      flex: 1,
      renderCell: (params) => {
        const { price } = params.row.productInfo;
        return <Box>{price}</Box>;
      },
    },
    {
      field: "quantity",
      headerName: "# Sold",
      flex: 1,
      type: "number",
    },
    {
      field: "total",
      headerName: "Total",
      flex: 1,
      type: "number",
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]} mt={"11px"}>
          {params.row.total.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <Box m="20px" position={"relative"}>
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
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
          checkboxSelection
          rows={mockDataInvoices}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Invoices;
