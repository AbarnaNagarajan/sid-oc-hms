import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router";
import { Grid } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import TextField from '@mui/material/TextField';

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

export default function DialogSelect() {
  const classes = useStyles();
  const [redirectAppointment, setRedirectAppointment] = React.useState(false);
  const [patientId, setPatientId] = React.useState("0");
  const [physician, setPhysician] = React.useState("0");
  const [remarks, setRemarks] = React.useState("");
  const dialogActionClass = { fontWeight: "bold", fontFamily: "initial" };
  const [appointmentDate, setAppointmentDate] = React.useState();

  const handleChangePatientId = (event) => {
    setPatientId(event.target.value);
  };
  const handleChangePhysician = (event) => {
    setPhysician(event.target.value);
  };
  const handleChangeRemarks = (event) => {
    setRemarks(event.target.value);
  };
  const handleChangeAppointmentDate = (event) => {
    setAppointmentDate(event);
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

  const clearAppointmentDetails = (event) => {
    setPatientId("0");
    setPhysician("0");
    setRemarks("");
    setAppointmentDate();
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
            Appointment Form
          </label>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Grid
            container
            item
            xs={12}
            spacing={1}
            style={{ padding: "15px", background: "#d7f4ff" }}
          >
            <Grid item xs={3}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  label="Appointment Date Time"
                  value={appointmentDate}
                  onChange={handleChangeAppointmentDate}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                id="standard-patient-id"
                select
                label="Patient Id"
                value={patientId}
                onChange={(e) => handleChangePatientId(e, 1)}
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
                value={remarks}
                onChange={(e) => handleChangeRemarks(e)}
                label="Remarks"
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
                label="Physician"
                value={physician}
                onChange={(e) => handleChangePhysician(e, 1)}
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
              &nbsp;&nbsp;&nbsp;
              <Button
                style={{
                  background: "brown",
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "emoji",
                }}
                endIcon={<HighlightOffIcon />}
                onClick={clearAppointmentDetails}
              >
                Cancel
              </Button>
              &nbsp;&nbsp;&nbsp;
              <Button
                style={{
                  background: "#3f51b5",
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "emoji",
                }}
                endIcon={<CheckCircleIcon />}
              >
                Book
              </Button>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={1}>
            <div style={{ width: "100%", color: "#fff" }}>.</div>
          </Grid>
          <Grid container item xs={12} spacing={1}>
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
