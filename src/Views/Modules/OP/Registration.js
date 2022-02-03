import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Grid } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import { Redirect } from "react-router";
import ConfirmationDialog from "../../CommonDialogs/ConfirmationDialog";

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
  const [maritalStatus, setmaritalStatus] = React.useState("0");
  const [gender, setGender] = React.useState("0");
  const [bloodGroup, setbloodGroup] = React.useState("0");
  const [physician, setPhysicians] = React.useState("0");
  const [redirectAppointment, setRedirectAppointment] = React.useState(false);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [mobileNo, setMobileNo] = React.useState("");
  const [altMobileNo, setAltMobileNo] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [complication, setComplication] = React.useState("");

  const handleChange = (event, id) => {
    id === 1
      ? setmaritalStatus(event.target.value)
      : id === 2
        ? setGender(event.target.value)
        : id === 3
          ? setbloodGroup(event.target.value)
          : id === 4
            ? setPhysicians(event.target.value)
            : id === 5
              ? setFirstName(event.target.value)
              : id === 6
                ? setLastName(event.target.value)
                : id === 7
                  ? setAge(event.target.value)
                  : id === 8
                    ? setMobileNo(event.target.value)
                    : id === 9
                      ? setAltMobileNo(event.target.value)
                      : id === 10
                        ? setAddress(event.target.value)
                        : setComplication(event.target.value);
  };

  const clearRegistrationDetails = (event) => {
    setmaritalStatus("0");
    setGender("0");
    setbloodGroup("0");
    setPhysicians("0");
    setFirstName("");
    setLastName("");
    setAge("");
    setMobileNo("");
    setAltMobileNo("");
    setAddress("");
    setComplication("");
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
                InputLabelProps={{
                  shrink: true,
                }}
                value={firstName}
                onChange={(e) => handleChange(e, 5)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                label="Last Name"
                id="standard-start-adornment"
                InputLabelProps={{
                  shrink: true,
                }}
                value={lastName}
                onChange={(e) => handleChange(e, 6)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                label="Age"
                id="standard-start-adornment"
                InputLabelProps={{
                  shrink: true,
                }}
                value={age}
                onChange={(e) => handleChange(e, 7)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                label="Mobile Number"
                id="standard-start-adornment"
                InputLabelProps={{
                  shrink: true,
                }}
                value={mobileNo}
                onChange={(e) => handleChange(e, 8)}
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
                InputLabelProps={{
                  shrink: true,
                }}
                value={altMobileNo}
                onChange={(e) => handleChange(e, 9)}
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
                InputLabelProps={{
                  shrink: true,
                }}
                value={address}
                onChange={(e) => handleChange(e, 10)}
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
                InputLabelProps={{
                  shrink: true,
                }}
                value={complication}
                onChange={(e) => handleChange(e, 11)}
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
            <Grid item xs={3}>
              <Button
                onClick={() => setRedirectAppointment(true)}
                style={{
                  background: "mediumseagreen",
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "emoji",
                }}
                startIcon={<ArrowLeftIcon />}
              >
                To OP Grid
              </Button>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button
                style={{
                  background: "brown",
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "emoji",
                }}
                endIcon={<HighlightOffIcon />}
                onClick={clearRegistrationDetails}
              >
                Clear
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button
                style={{
                  background: "#3f51b5",
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "emoji",
                }}
                endIcon={<CheckCircleIcon />}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {redirectAppointment ? (
          <Redirect from="/Appointment" to="/OPGrid" />
        ) : null}
        {showConfirationPopUp ? (
          <ConfirmationDialog/>
        ) : null}
      </form>
    </div>
  );
}
