import React from "react";
import Grid from "@material-ui/core/Grid";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { arrow } from "../img";
import Form from "../Components/Form";
import { bg_contact } from "../img";

const ContactUs = () => {
  const useStyles = makeStyles((theme) => ({
    img: {
      backgroundImage: `url(${bg_contact})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "100%",
      height: "calc( 100vh - 165px)",
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "column",
      [theme.breakpoints.up("md")]: {
        flexDirection: "row",
      },
    },
    leftContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      "& img": {
        marginRight: "1rem",
      },
      [theme.breakpoints.up("md")]: {
        justifyContent: "flex-end",
        marginLeft: "auto",
        width: "unset",
      },
    },
    headerContainer: {
      width: "100vw",
    },
    titleContainer: {
      position: "relative",
      display: "flex",
      textTransform: "uppercase",
      "& img": {
        margin: "0 2rem",
      },
    },
    title: {
      position: "absolute",
      transform: "translateX(38%)",
      marginTop: "3.3rem",
      color: "#FFF",
      textTransform: "uppercase",
    },
    opacity: {
      width: "227px",
      height: "136px",
      background: "#576066",
      mixBlendMode: "multiply",
    },
    rightContainer: {
      width: "100%",
      position: "relative",
      [theme.breakpoints.up("md")]: {
        width: "calc(100vw - 625px)",
      },
    },
  }));

  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Grid className={classes.img}>
      <Grid item className={classes.leftContainer}>
        <img src={arrow} />
        <div className={classes.titleContainer}>
          <div className={classes.opacity}> </div>
          <Typography variant="h6" className={classes.title}>
            {t("contact.title")}
          </Typography>
        </div>
      </Grid>
      <Grid item className={classes.rightContainer}>
        <Form />
      </Grid>
    </Grid>
  );
};

export default ContactUs;
