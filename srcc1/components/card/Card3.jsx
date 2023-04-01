import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import softwareTesting from "../../assets/post_07-1280x960.jpg";
import { BsArrowRightCircle } from "react-icons/bs";
import Styles from "../section5/_section5.module.css";

const Card3 = () => {
  return (
    <div style={{ boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
      <Card sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={softwareTesting}
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
              Software Testing
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We offer cost-effective, reliable and scalable software testing
              services.
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

export default Card3;
