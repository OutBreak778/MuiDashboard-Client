import React from "react";
import { Typography, Box, useTheme } from "@mui/material";

const Header = ({ title, subTitle }) => {
  const theme = useTheme();
  return (
    <div>
      <Box>
        <Typography
          variant="h2"
          color={theme.palette.secondary[100]}
          fontWeight="bold"
          sx={{ md: "10px" }}
        >
          {title}
        </Typography>
        <Typography
          variant="h4"
          color={theme.palette.secondary[200]}
          fontWeight="semiBold"
          sx={{ md: "10px" }}
        >
          {subTitle}
        </Typography>
      </Box>
    </div>
  );
};

export default Header;
