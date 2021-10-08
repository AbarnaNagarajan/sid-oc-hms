import { React, useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import { Grid, TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const defaultTheme = createTheme();

const useStyles = makeStyles(
  (theme) => ({
    textField: {
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
      margin: theme.spacing(1, 0.5, 1.5),
      "& .MuiSvgIcon-root": {
        marginRight: theme.spacing(0.5),
      },
      "& .MuiInput-underline:before": {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
    },
    patientPrescriptionGrid: { padding: "25px" },
    labelDesign: {
      fontSize: "15px",
      padding: "4px 4px 0px",
      flex: "1 1 100%",
      fontWeight: "bold",
      fontFamily: "serif",
    },
    bookBtn: { background: "#3f51b5", color: "white", textAlign: "right" },
    cancelBtn: { background: "brown", color: "white", textAlign: "left" },
    tableHeadCell: { fontWeight: "bold", fontFamily: "initial" },
    gridStyleL: { textAlign: "left" },
    gridStyleR: { textAlign: "right" },
  }),
  { defaultTheme }
);

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

export default function PatientPrescription(patientDialogDetails) {
  const classes = useStyles();
  const [physician, setPhysicians] = useState("0");

  const handleChange = (event) => {
    setPhysicians(event.target.value);
  };

  function createData(id, prescription, prescribedBy, prescribedDate) {
    return { id, prescription, prescribedBy, prescribedDate };
  }

  const rows = [
    createData(1, "Prescribe", "Dr.Anand", "2021-01-01"),
    createData(2, "Prescribe", "Dr.Anand", "2021-01-02"),
    createData(3, "Prescribe", "Dr.Anand", "2021-01-03"),
  ];

  return (
    <Grid container spacing={1} className={classes.patientPrescriptionGrid}>
      <br />
      <label className={classes.labelDesign}>Prescription Details</label>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={3}>
          <label className={classes.tableHeadCell}>
            Enter prescription details:{" "}
          </label>
        </Grid>
        <Grid item xs={3} className={classes.gridStyleL}>
          <TextField
            variant="outlined"
            label="Precription"
            id="standard-start-adornment"
            multiline
            style={{ width: "270px" }}
            rows={3}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={3} className={classes.gridStyleR}>
          <TextField
            variant="outlined"
            id="standard-physician"
            select
            label="Physician"
            value={physician}
            onChange={(e) => handleChange(e)}
            SelectProps={{
              native: true,
            }}
            style={{ width: "270px" }}
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
        <Grid item xs={3} className={classes.gridStyleL}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button
            style={{
              background: "brown",
              color: "white",
              textAlign: "left",
              fontWeight: "bold",
              fontFamily: "emoji",
            }}
            endIcon={<HighlightOffIcon />}
          >
            Clear
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button
            style={{
              background: "#3f51b5",
              color: "white",
              textAlign: "right",
              fontWeight: "bold",
              fontFamily: "emoji",
            }}
            endIcon={<CheckCircleIcon />}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
      <label className={classes.labelDesign}>Prescription History</label>
      <Table aria-label="caption table">
        {/* <caption>A basic table example with a caption</caption> */}
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeadCell}>S.No</TableCell>
            <TableCell className={classes.tableHeadCell} align="right">
              Prescription
            </TableCell>
            <TableCell className={classes.tableHeadCell} align="right">
              Prescribed By
            </TableCell>
            <TableCell className={classes.tableHeadCell} align="right">
              Prescribed Date
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.prescription}</TableCell>
              <TableCell align="right">{row.prescribedBy}</TableCell>
              <TableCell align="right">{row.prescribedDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Grid>
  );
}
