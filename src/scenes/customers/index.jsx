import React from 'react'
import { Box, useTheme } from "@mui/material";
import { useGetCustomersQuery } from 'state/api';
import Header from 'components/Header';
import { DataGrid } from '@mui/x-data-grid';
import "../../App.css"

const Customers = () => {
    const theme = useTheme();
    const { data, isLoading } = useGetCustomersQuery()

    const columns = [
        {
            field: "_id",
            headerName: "ID",
            flex: 0.6,
        },
        {
            field: "name",
            headerName: "Name",
            flex: 0.3,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 0.7,
        },
        {
            field: "phoneNumber",
            headerName: "Phone Number",
            flex: 0.5,
            renderCell: (params) => {
                return params.value.replace(/^(\d{3})(\d{3})(\d{4})/,"$1-$2-$3") // There is then number for a Phone Number so there is first three and then three and then four number given in the column by \d and have the length of size {3} and so on then in the paranthesis it left first three word untouched and then it put the slashes before the second and third length of string
            }
        },
        {
            field: "country",
            headerName: "Country",
            flex: 0.3,
        },
        {
            field: "occupation",
            headerName: "Occupations",
            flex: 0.4,
        },
        {
            field: "role",
            headerName: "Role",
            flex: 0.4,
        }
    ]

  return (
    <Box m="1rem 2rem">
        <Header title="Customers"  subTitle="Customers Online order Page" />
        <Box
            mt="20px"
            height="75vh"
            className="BoxContainer"
            sx={{
                "&. MuiDataGrid-root": {
                    border: "none"
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none"
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: theme.palette.background.alt,
                    color: theme.palette.secondary[100],
                    borderBottom: "none"
                },
                // "& .MuiDataGrid-virtualScroller": {
                //     backgroundColor: theme.palette.background.alt
                // },
                "& .MuiDataGrid-footerContainer": {
                    backgroundColor: theme.palette.background.alt,
                    color: theme.palette.secondary[500],
                    borderTop: "none"
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${theme.palette.secondary[200]} !important`
                }
            }}
        >
            <DataGrid  
                loading={isLoading || !data}
                getRowId={(row) => row._id}
                rows={data || []}
                columns={columns}
            />
        </Box>
    </Box>
  )
}

export default Customers
