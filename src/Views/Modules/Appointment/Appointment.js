import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Redirect } from "react-router";
import { Grid } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import InputAdornment from "@material-ui/core/InputAdornment";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  table: {
    minWidth: 650,
  },
}));

const patientIds = [
  {
    value: 0,
    label: "Please Select",
  },
  {
    value: 1,
    label: "AAAA",
  },
  {
    value: 2,
    label: "BBBB",
  },
];

export default function DialogSelect() {
  const classes = useStyles();
  const [redirectAppointment, setRedirectAppointment] = React.useState(false);
  const [patientId, setPatientId] = React.useState("");
  const dialogActionClass = { fontWeight: "bold", fontFamily: "initial" };
  const handleChange = (event) => {
    setPatientId(event.target.value);
  };

  function createData(
    patientID,
    patientName,
    appointmentDate,
    remarks,
    physician
  ) {
    return { patientID, patientName, appointmentDate, remarks, physician };
  }

  const rows = [
    createData("SOC01", "Eclair", "2021-01-04", "Follow Up", "Dr.Anand"),
    createData("SOC02", "KitKat", "2021-01-03", "Follow Up", "Dr.Anand"),
    createData("SOC03", "Munch", "2021-01-02", "Follow Up", "Dr.Anand"),
  ];

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
            Appointment Form
          </label>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Grid
            container
            item
            xs={13}
            spacing={1}
            style={{ padding: "15px", background: "#d7f4ff" }}
          >
            <Grid item xs={3}>
              <TextField
                id="datetime-local"
                label="Next appointment"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                id="standard-patient-id"
                select
                label="Patient Id"
                value={patientId}
                onChange={(e) => handleChange(e, 1)}
                SelectProps={{
                  native: true,
                }}
                style={{ width: "230px" }}
                helperText=""
              >
                {patientIds.map((option) => (
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
                label="Remarks"
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
                id="standard-patient-id"
                select
                label="Physician"
                value={patientId}
                onChange={(e) => handleChange(e, 1)}
                SelectProps={{
                  native: true,
                }}
                style={{ width: "230px" }}
                helperText=""
              >
                {patientIds.map((option) => (
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
            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button
                onClick={() => setRedirectAppointment(true)}
                style={{ background: "brown", color: "white" }}
                endIcon={<HighlightOffIcon />}
              >
                Cancel
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button
                onClick={() => setRedirectAppointment(true)}
                style={{ background: "#3f51b5", color: "white" }}
                endIcon={<CheckCircleIcon />}
              >
                Book
              </Button>
            </Grid>
          </Grid>
          <Grid container item xs={13} spacing={1}>
            <div style={{ width: "100%", color: "#fff" }}>.</div>
          </Grid>
          <Grid container item xs={13} spacing={1}>
            <label
              style={{
                fontSize: "20px",
                padding: "4px 4px 0px",
                flex: "1 1 100%",
                fontWeight: "bold",
                fontFamily: "serif",
              }}
            >
              Future Appointment Details
            </label>
          </Grid>
        </Grid>
      </form>
      <Table className={classes.table} aria-label="caption table">
        {/* <caption>A basic table example with a caption</caption> */}
        <TableHead>
          <TableRow>
            <TableCell style={dialogActionClass}>PatientID</TableCell>
            <TableCell align="right" style={dialogActionClass}>
              PatientName
            </TableCell>
            <TableCell align="right" style={dialogActionClass}>
              AppointmentDate
            </TableCell>
            <TableCell align="right" style={dialogActionClass}>
              Remarks
            </TableCell>
            <TableCell align="right" style={dialogActionClass}>
              Physician
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.patientID}>
              <TableCell component="th" scope="row">
                {row.patientID}
              </TableCell>
              <TableCell align="right">{row.patientName}</TableCell>
              <TableCell align="right">{row.appointmentDate}</TableCell>
              <TableCell align="right">{row.remarks}</TableCell>
              <TableCell align="right">{row.physician}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {redirectAppointment ? (
        <Redirect from="/Appointment" to="/OPGrid" />
      ) : null}
    </div>
  );
}
