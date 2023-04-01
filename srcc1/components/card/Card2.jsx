import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import softwareDesign from "../../assets/Automate-Software-Testing-1280x800.jpg";
import { BsArrowRightCircle } from "react-icons/bs";
import Styles from "../section5/_section5.module.css";

const Card2 = () => {
  return (
    <div style={{ boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
      <Card sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={softwareDesign}
            alt="green iguana"
            className={Styles.cardImg}
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
              Software Design and Development
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We deliver IT solutions in a wide variety of verticals and elevate
              businesses to the next level.
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

export default Card2;
