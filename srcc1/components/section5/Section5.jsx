import React from "react";
import Styles from "./_section5.module.css";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import softwareDesign from "../../assets/Automate-Software-Testing-1280x800.jpg";
import { BsArrowRightCircle } from "react-icons/bs";
import SalesForceImg from "../../assets/4_salesforce-720x800.jpg";
import DevOpsImg from "../../assets/3_devops-1280x800.jpg";

const Section5 = () => {
  return (
    <section className={Styles.sectionBlock5}>
      <article className={Styles.articleBlock5}>
        <div className={Styles.heading5}>
          <h1>Articles</h1>
        </div>

        <div className={Styles.card5}>
          <Card
            sx={{ maxWidth: 377 }}
            style={{ boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="236"
                image={softwareDesign}
                alt="green iguana"
                className={Styles.cardImg}
              />
              <CardContent>
                <p
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    padding: "15px 0 15px 10px",
                  }}
                >
                  February 21, 2023
                </p>
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
                  Automated Software Testing <br />
                  -101
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                  We deliver IT solutions in a wide variety of verticals and
                  elevate businesses to the next level.
                </Typography> */}
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

          <Grid
            className={Styles.CardImg2}
            sx={{ maxWidth: 377 }}
            // style={{ boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="419"
                image={SalesForceImg}
                alt="green iguana"
                style={{ borderRadius: "0 0 10px 10px" }}
                className={Styles.cardImg}
              />
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
              <div>
                {/* <p
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    padding: "15px 0 15px 10px",
                  }}
                >
                  February 21, 2023
                </p>
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
                  Automated Software Testing <br />
                  -101
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We deliver IT solutions in a wide variety of verticals and
                  elevate businesses to the next level.
                </Typography> */}
              </div>
            </CardActionArea>
            {/* <CardActions>
              <Button
                size="small"
                color="primary"
                style={{ textTransform: "uppercase", color: "orangered" }}
              >
                <span>
                  Read more <BsArrowRightCircle />
                </span>
              </Button>
            </CardActions> */}
          </Grid>

          <Card
            sx={{ maxWidth: 377 }}
            style={{ boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="236"
                image={DevOpsImg}
                alt="green iguana"
                className={Styles.cardImg}
              />
              <CardContent>
                <p
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    padding: "15px 0 15px 10px",
                  }}
                >
                  March 25, 2022
                </p>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}
                >
                  Test Automation and
                  <br />
                  Performance Testing for
                  <br />
                  DevOps Platform
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                  We deliver IT solutions in a wide variety of verticals and
                  elevate businesses to the next level.
                </Typography> */}
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
        <div className={Styles.ReadDiv}>
          <button className={Styles.ReadBtn}>Read more Articles</button>
        </div>
        <div className={Styles.head}>
          <h1>
            We enable you to digitally transform your business to help you
            create the company of your dreams.
          </h1>
        </div>
      </article>
    </section>
  );
};

export default Section5;
