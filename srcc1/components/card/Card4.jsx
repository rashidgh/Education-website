import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ITConsulting from "../../assets/consulting-1280x960.jpg";
import { BsArrowRightCircle } from "react-icons/bs";
import Styles from "../section5/_section5.module.css";

const Card4 = () => {
  return (
    <div style={{ boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
      <Card sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={ITConsulting}
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
              IT Consulting & Managed Services
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our team of experts help you craft a winning IT strategy for your
              organization
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

export default Card4;
