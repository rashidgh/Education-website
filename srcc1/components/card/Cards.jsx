import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ITimage from "../../assets/training_01-1280x960.jpg";
import { BsArrowRightCircle } from "react-icons/bs";
import Styles from "../section5/_section5.module.css";

const Cards = () => {
  return (
    <div style={{ boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
      <Card sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={ITimage}
            className={Styles.cardImg}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Elevate IT - IT Skills Development
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our customized and curated training models help organizations
              elevate their IT quotient.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            style={{ textTransform: "uppercase", color: "orangered" }}
          >
            <span>
              Read more <BsArrowRightCircle />
            </span>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Cards;
