import React from 'react'
import { Box } from "@mui/material"
import Header from 'components/Header'
import BreakdownChart from "components/BreakdownChart"

const Breakdown = () => {
  return (
    <Box m="1rem 2rem">
        <Header title="Category Breakdown" subTitle="Division of Sales by the Category" />
        <Box height="75vh" mt="25px">
            <BreakdownChart />
        </Box>

    </Box>
  )
}

export default Breakdown
