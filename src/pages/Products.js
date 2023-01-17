import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../Images/img1.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Products() {
  return (
    <>
      <h1>Top Collections</h1>
      <Box sx={{ flexGrow: 1 }} className="pro">
        <FontAwesomeIcon icon="fa-brands fa-instagram" />
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          className="pro-grid"
        >
          {Array.from(Array(1)).map((_, index) => (
            <Grid item key={index} className="pro-box">
              <Item className="pro-sizing">
                <img src={img1} className="pro-img" />
                <h1>Hello</h1>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
