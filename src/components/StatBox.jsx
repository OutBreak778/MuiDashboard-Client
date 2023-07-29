import React from "react";
import { Box, Typography, useTheme } from "@mui/material"
import FlexBetween from "./FlexBetween";

const StatBox = ({ title, value, increase, icon, description}) => {

    const theme = useTheme();

    return(
        <Box 
            gridColumn="span 3"
            gridRow="span 1"
            display= "Flex"
            flexDirection="column"
            justifyContent="space-between"
            p="1rem 0.75rem"
            // flex="1 1 100%"
            backgroundColor={theme.palette.background.alt}
            borderRadius="7px"
        >
            <FlexBetween>
                <Typography variant="h5" sx={{color: theme.palette.secondary[100]}}>
                    {title}
                </Typography>
                {icon}
            </FlexBetween>
            <Typography 
                variant="h2" fontWeight="500" sx={{color: theme.palette.secondary[200]}}
            >
                {value}
            </Typography>
            <FlexBetween gap="1rem">
                <Typography variant="h5" fontStyle="italic" sx={{color: theme.palette.secondary.light}}>
                    {increase}
                </Typography>
                <Typography>{description}</Typography>
            </FlexBetween>
        </Box>
    )
}

export default StatBox