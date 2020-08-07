import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import _ from "lodash";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    top: 0,
    flexDirection: "column",
    boxShadow: " 0px 3px 6px #00000029",
    padding: "1rem 5rem",
    [theme.breakpoints.up("md")]: {},
  },
  textField: {
    "& label": {
      color: "white",
    },
  },
  button: {
    borderRadius: "0px",
    width: "113px",
    backgroundColor: "#9BA4AA",
  },
  submitContainer: {
    margin: "2rem auto 0rem auto",
    [theme.breakpoints.up("md")]: {
      margin: "3rem 0 1rem 0",
    },
  },
  p: {
    color: "#FFF",
  },
  success: {
    margin: "2rem 1rem 0rem 1rem",
    color: "#00ffc4",
  },
  errorMsg: {
    margin: "2rem 1rem 0rem 1rem",
    color: "#a00000 ",
  },
}));

const formConfig = {
  contacto: {
    translation: "contact.name",
    errorMessage: "contact.nameError",
    register: { required: true },
  },
  email: {
    translation: "contact.mail",
    errorMessage: "contact.mailError",
    register: {
      required: true,
      pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    },
  },
  telefono: {
    translation: "contact.tel",
    errorMessage: "contact.telError",
    register: { pattern: /^[0-9]*$/ },
  },
  motivo: {
    translation: "contact.motive",
    errorMessage: "contact.motiveError",
    register: { required: true },
  },
};

const Form = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [success, setSuccess] = useState(null);
  const { register, handleSubmit, errors } = useForm();

  const triggerSuccess = (success) => {
    setSuccess(success);
    setTimeout(() => {
      setSuccess(null);
    }, 3000);
  };

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://52.14.23.178/api/sendMail ", data)
      .then((r) => triggerSuccess(true))
      .catch((e) => triggerSuccess(false));
  };

  return (
    <Container>
      <form
        autoComplete={"off"}
        className={classes.root}
        id="contactForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        {Object.keys(formConfig).map((key) => (
          <StyledTextField
            key={key}
            className={classes.textField}
            name={key}
            label={t(formConfig[key].translation)}
            style={{ margin: 8 }}
            margin="normal"
            error={errors[key]}
            helperText={errors[key] && t(formConfig[key].errorMessage)}
            inputRef={register(formConfig[key].register)}
            multiline={key === "motivo"}
            rowsMax={4}
          />
        ))}
        <div className={classes.submitContainer}>
          <Button
            className={classes.button}
            variant="contained"
            type="submit"
            disabled={!_.isEmpty(errors)}
          >
            <Typography variant="subtitle2" className={classes.p}>
              {t("contact.send")}
            </Typography>
          </Button>
          <span className={success ? classes.success : classes.errorMsg}>
            {success
              ? "Your message was sent"
              : success === false
              ? "There was a problem, try again later"
              : null}
          </span>
        </div>
      </form>
    </Container>
  );
};

const StyledTextField = styled(TextField)`
  .MuiInput-underline.Mui-error:after {
    border-bottom-color: #7a110a;
  }
  .Mui-focused {
    color: white;
  }
  .Mui-error {
    color: #7a110a;
  }
`;

const Container = styled.div(() => ({
  overFlow: "auto",
  background: "rgb(0 0 0 / 45%)",
}));

export default Form;
