import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Grid } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const maritalStatuses = [
  {
    value: 0,
    label: "Please Select",
  },
  {
    value: 1,
    label: "Married",
  },
  {
    value: 2,
    label: "Un-Married",
  },
];

const genders = [
  {
    value: 0,
    label: "Please Select",
  },
  {
    value: 1,
    label: "Male",
  },
  {
    value: 2,
    label: "Female",
  },
  {
    value: 3,
    label: "Third Gender",
  },
];

const bloodGroups = [
  {
    value: 0,
    label: "Please Select",
  },
  {
    value: 1,
    label: "A+",
  },
  {
    value: 2,
    label: "A-",
  },
  {
    value: 3,
    label: "B+",
  },
  {
    value: 4,
    label: "B-",
  },
  {
    value: 5,
    label: "O+",
  },
  {
    value: 6,
    label: "O-",
  },
  {
    value: 7,
    label: "AB+",
  },
  {
    value: 8,
    label: "AB-",
  },
];

const physicians = [
  {
    value: 0,
    label: "Please Select",
  },
  {
    value: 1,
    label: "Dr. Anand R",
  },
  {
    value: 2,
    label: "Dr. Shyamala A",
  },
];

export default function BasicTextFields() {
  const classes = useStyles();
  const [maritalStatus, setmaritalStatus] = React.useState("0");
  const [gender, setGender] = React.useState("0");
  const [bloodGroup, setbloodGroup] = React.useState("0");
  const [physician, setPhysicians] = React.useState("0");

  const handleChange = (event, id) => {
    id === 1
      ? setmaritalStatus(event.target.value)
      : id === 2
      ? setGender(event.target.value)
      : id === 3
      ? setbloodGroup(event.target.value)
      : setPhysicians(event.target.value);
  };

  return (
    <div style={{ height: 550, width: "100%", background: "#fafafa" }}>
      <form noValidate autoComplete="off">
        <Grid container spacing={1} style={{ padding: "25px" }}>
          <br />
          <label
            style={{
              fontSize: "25px",
              padding: "4px 4px 0px",
              flex: "1 1 100%",
              fontWeight: "bolder",
              fontFamily: "serif",
            }}
          >
            Patient Registration Form
          </label>
          <br />
          <br />
          <label
            style={{
              fontSize: "15px",
              padding: "4px 4px 0px",
              flex: "1 1 100%",
              fontWeight: "bold",
              fontFamily: "serif",
            }}
          >
            Patient Details
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Grid container item xs={13} spacing={1}>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                label="First Name"
                id="standard-start-adornment"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                label="Last Name"
                id="standard-start-adornment"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                label="Age"
                id="standard-start-adornment"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                label="Mobile Number"
                id="standard-start-adornment"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Grid container item xs={13} spacing={1}>
            <div style={{ width: "100%", color: "#fff" }}>.</div>
          </Grid>
          <Grid container item xs={13} spacing={1}>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                label="Alt. Contact Number"
                id="standard-start-adornment"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                id="standard-marital-status"
                select
                label="Marital Status"
                value={maritalStatus}
                onChange={(e) => handleChange(e, 1)}
                SelectProps={{
                  native: true,
                }}
                style={{ width: "230px" }}
                helperText=""
              >
                {maritalStatuses.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    style={{ width: "230px", fontSize: "small" }}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                id="standard-gender-status"
                select
                label="Gender"
                value={gender}
                onChange={(e) => handleChange(e, 2)}
                SelectProps={{
                  native: true,
                }}
                style={{ width: "230px" }}
                helperText=""
              >
                {genders.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    style={{ width: "230px", fontSize: "small" }}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                label="Address"
                id="standard-start-adornment"
                multiline
                style={{ width: "230px" }}
                rows={4}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <label
            style={{
              fontSize: "15px",
              padding: "4px 4px 0px",
              flex: "1 1 100%",
              fontWeight: "bold",
              fontFamily: "serif",
            }}
          >
            Medic & Complication Details
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Grid container item xs={13} spacing={1}>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                label="Complication"
                id="standard-start-adornment"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                id="standard-blood-group"
                select
                label="Blood Group"
                value={bloodGroup}
                onChange={(e) => handleChange(e, 3)}
                SelectProps={{
                  native: true,
                }}
                style={{ width: "230px" }}
                helperText=""
              >
                {bloodGroups.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    style={{ width: "230px", fontSize: "small" }}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                id="standard-physician"
                select
                label="Physician"
                value={physician}
                onChange={(e) => handleChange(e, 4)}
                SelectProps={{
                  native: true,
                }}
                style={{ width: "230px" }}
                helperText=""
              >
                {physicians.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    style={{ width: "230px", fontSize: "small" }}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
          <Grid container item xs={13} spacing={1}>
            <div style={{ width: "100%", color: "#fff" }}>.</div>
          </Grid>
          <Grid container item xs={13} spacing={1}>
            <div style={{ width: "100%", color: "#fff" }}>.</div>
          </Grid>
          <Grid container item xs={13} spacing={1}>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button
                style={{ background: "brown", color: "white" }}
                endIcon={<HighlightOffIcon />}
              >
                Clear
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button
                style={{ background: "#3f51b5", color: "white" }}
                endIcon={<CheckCircleIcon />}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
