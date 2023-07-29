import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useGetProductsQuery } from "state/api";
import Header from "components/Header";

const Product = ({ name, description, price, rating, category }) => {
const Product = ({ name, description, price, rating, category }) => {
const Product = ({
  _id,
  name,
  description,
  price,
  rating,
  category,
  supply,
  stat,
}) => {
const Product = ({ name, description, price, rating, category }) => {
const Product = ({ name, description, price, rating, category }) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={{
        background: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 15 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {category}
        </Typography>
        <Typography variant="h4" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: "1rem" }} color={theme.palette.secondary[400]}>
          ${Number(price).toFixed(2)}
        </Typography>
        <Rating value={rating} readOnly />
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{ color: theme.palette.neutral[400] }}
      >
        <CardContent>
          <Typography>id: {_id}</Typography>
          <Typography>Supply: {supply}</Typography>
          <Typography>Stats: {stat}</Typography>
          <Typography>
            Yearly Sales this year: {stat.yearlySalesTotal}
          </Typography>
          <Typography>
            Yearly Units Sold this year: {stat.yearlyTotalSoldUnits}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const Products = () => {
  const { data, isLoading } = useGetProductsQuery();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  // console.log(data)
  return (
    <Box m="1.5rem 2.5em">
    <Box m="1.5rem 2.5em">
    <Box m="1.5rem 2.5em" >
    <Box m="1.5rem 2.5em">
    <Box m="1.5rem 2.5em">
      <Header title="Products" subTitle="See the List of Products Available" />
      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="25px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {data.map(
            ({
              _id,
              name,
              description,
              price,
              rating,
              category,
              supply,
              stat,
            }) => (
              <Product
                key={_id}
                _id={_id}
                name={name}
                description={description}
                price={price}
                rating={rating}
                category={category}
                supply={supply}
                stat={stat}
              />
            )
          )}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default Products;
