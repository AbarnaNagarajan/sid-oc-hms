import { React } from "react";
import { Grid } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";

const defaultTheme = createTheme();

const useStyles = makeStyles(
  (theme) => ({
    mainLabelDesign: {
      fontSize: "15px",
      padding: "4px 4px 0px",
      flex: "1 1 100%",
      fontWeight: "bold",
      fontFamily: "serif",
    },
    dialogActionClass: { fontWeight: "bold", fontFamily: "initial" },
  }),
  { defaultTheme }
);

export default function PatientAppointmentHistory(patientDialogDetails) {
  const classes = useStyles();
  function createData(bookedDate, bookedBy, date, checkUpBy, remarks) {
    return { bookedDate, bookedBy, date, checkUpBy, remarks };
  }

  const rows = [
    createData("2021-01-01", "admin", "2021-01-02", "Dr.Anand", "Follow Up"),
    createData("2021-01-02", "admin", "2021-01-03", "Dr.Anand", "Follow Up"),
    createData("2021-01-03", "admin", "2021-01-04", "Dr.Anand", "Follow Up"),
  ];

  return (
    <Grid container spacing={1} style={{ padding: "25px" }}>
      <label className={classes.mainLabelDesign}>Appointments History</label>
      <Table className={classes.table} aria-label="caption table">
        {/* <caption>A basic table example with a caption</caption> */}
        <TableHead>
          <TableRow>
            <TableCell className={classes.dialogActionClass}>
              Appointment Booked Date
            </TableCell>
            <TableCell align="right" className={classes.dialogActionClass}>
              Appointment Booked By
            </TableCell>
            <TableCell align="right" className={classes.dialogActionClass}>
              Appointment Date
            </TableCell>
            <TableCell align="right" className={classes.dialogActionClass}>
              Check Up Done By
            </TableCell>
            <TableCell align="right" className={classes.dialogActionClass}>
              Remarks
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.bookedDate}>
              <TableCell component="th" scope="row">
                {row.bookedDate}
              </TableCell>
              <TableCell align="right">{row.bookedBy}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.checkUpBy}</TableCell>
              <TableCell align="right">{row.remarks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Grid>
  );
}
