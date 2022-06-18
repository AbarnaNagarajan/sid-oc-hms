import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import { Alert } from "@material-ui/lab";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Redirect } from "react-router-dom";

const loginStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
  },
  logo: {
    textAlign: "right",
    top: "-6px",
    left: "1612px",
    width: "286px",
    height: "189px",
    background: "transparent 0% 0% no-repeat padding-box",
    opacity: 1,
  },
  loginContent: {
    marginTop: "-43px",
    marginLeft: "170px",
    width: "420px",
    height: "420px",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "15px 30px 65px #00000052",
    borderRadius: "15px",
    opacity: 1,
  },
  hname: {
    marginTop: "40px",
    marginBottom: "-15px",
    marginLeft: "50px",
    marginRight: "50px",
    width: "320px",
    height: "15px",
    textAlign: "left",
    font: "normal normal 300 30px Open Sans",
    letterSpacing: "0px",
    color: "#07060B",
    opacity: 1,
    fontWeight: "bold",
  },
  loginBtn: {
    marginTop: "-20px",
    marginLeft: "50px" /*210px*/,
    float: "right",
    marginRight: "12%",
    marginBottom: "10%",
    font: "normal normal 17px Open Sans",
    letterSpacing: "0px",
    background: "#190F4C",
    color: "#FFFFFF",
    opacity: 1,
    width: "140px",
    height: "35px",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  div: {
    marginLeft: "5%",
    marginRight: "5%",
  },
  empty: {
    width: "100%",
    color: "#fff",
  },
  alertBackground: {
    background: "#FFFFFF",
    marginLeft: "35px",
    marginTop: "-30px",
    color: "#f44336",
  },
  forgetPassword: {
    marginLeft: "50px",
  },
  TenantSelection: {
    marginTop: "35px",
    marginLeft: "50px",
    marginRight: "50px",
    fontSize: "smaller",
  },
}));

function Login() {
  /*For redirection purpose on login*/
  //const history = useHistory();

  /*Redirection purpose on login*/
  const [redirection, setRedirection] = useState(false);

  /*Loads the style for the form*/
  const classes = loginStyles();

  /*For showing the loading icon*/
  const [load, setLoad] = useState(false);

  /*For checking whether to show the error messages*/
  const [onFormSubmit, setonFormSubmit] = useState(false);

  /*Error message to be shown*/
  const [validationMessage, setValidationMessage] = useState("");

  /*For maintaining the user credentials*/
  const [loginData, setLoginData] = useState({ UserName: "", Password: "" });

  /*On changing the credentials*/
  const onLoginCredentialsChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const [disableCredentials, setDisableCredentials] = useState(false);

  /*User form submit*/
  const onUserLogin = (event) => {
    setValidationMessage("");
    event.preventDefault();
    if (
      loginData.UserName === undefined ||
      loginData.UserName === null ||
      loginData.UserName === "" ||
      loginData.Password === undefined ||
      loginData.Password === null ||
      loginData.Password === ""
    ) {
      setonFormSubmit(true);
    } else {
      setonFormSubmit(true);
      setRedirection(true);
      localStorage.setItem("UserID", 1);
    }
  };

  return (
    <div>
      <Container className={classes.container} maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.logo}>
            <Typography></Typography>
          </Grid>
        </Grid>
        <form onSubmit={onUserLogin}>
          <Paper className={classes.loginContent}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography className={classes.hname}>
                  Siddharth Ortho Care
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  className={classes.hname}
                  fullWidth
                  label="Username"
                  placeholder="UserName"
                  error={loginData.UserName === "" && onFormSubmit}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon fontSize="inherit" />
                      </InputAdornment>
                    ),
                  }}
                  disabled={disableCredentials}
                  type="text"
                  id="standard-basic"
                  name="UserName"
                  value={loginData.UserName}
                  onChange={onLoginCredentialsChange}
                  // helperText={
                  //   loginData.UserName === "" && onFormSubmit
                  //     ? "Username is required!"
                  //     : " "
                  // }
                />
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  className={classes.hname}
                  fullWidth
                  label="Password"
                  placeholder="Password"
                  error={loginData.Password === "" && onFormSubmit}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon fontSize="inherit" />
                      </InputAdornment>
                    ),
                  }}
                  disabled={disableCredentials}
                  type="password"
                  id="standard-basic"
                  name="Password"
                  value={loginData.Password}
                  onChange={onLoginCredentialsChange}
                  // helperText={
                  //   loginData.Password === "" && onFormSubmit
                  //     ? "Password is required!"
                  //     : " "
                  // }
                />
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.TenantSelection}></Typography>
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}>
                <Alert
                  icon={false}
                  className={classes.alertBackground}
                  severity="error"
                >
                  <strong>{validationMessage}</strong>
                </Alert>
              </Grid>
              <Grid item xs={12}>
                <Button
                  style={{
                    marginTop: "-20px",
                    marginLeft: "50px" /*210px*/,
                    float: "right",
                    marginRight: "12%",
                    marginBottom: "10%",
                    font: "normal normal 17px Open Sans",
                    letterSpacing: "0px",
                    background: "#190F4C",
                    color: "#FFFFFF",
                    opacity: 1,
                    width: "140px",
                    height: "35px",
                    fontWeight: "bold",
                  }}
                  type="submit"
                  variant="contained"
                  disabled={load}
                >
                  LOGIN {load ? <CircularProgress size={13} /> : null}
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </form>
        {/*------------------- Popup COMPONENT ----------------------------*/}
        {/* { openDialog ? <CommonDialog openCommonDialogStatus={openDialog} setCommonDialogTitle={errorDialogDetails.errorDialogTitle} setDialogContent={errorDialogDetails.errorDialogContent} setDialogButtonContent={errorDialogDetails.errorDialogButtonContent} setRedirectionPagePath={""} /> : null} */}
        {redirection && localStorage.getItem("UserID") !== null ? (
          <Redirect from="/Login" to="/Dashboard" />
        ) : null}
      </Container>
    </div>
  );
}

/*we can use the required param in the TextField and it will automatically shows the please fill out this field pop up*/

/*
Invalid = 1,
Expired = 2,
Success = 3,
Exception = 4
*/

export default Login;
