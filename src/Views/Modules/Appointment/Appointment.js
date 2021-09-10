import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { Redirect } from "react-router";
import { Grid, Container } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
  const [open, setOpen] = React.useState(false);
  const [redirectAppointment, setRedirectAppointment] = React.useState(false);
  const [age, setAge] = React.useState("");
  const [patientId, setPatientId] = React.useState("");
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const handleChange = (event) => {
    setAge(Number(event.target.value) || "");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
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
            <Grid
              item
              xs={3}
              style={{
                textAlign: "center",
              }}
            >
              <label
                style={{
                  fontSize: "20px",
                  padding: "4px 4px 0px",
                  flex: "1 1 100%",
                  fontWeight: "bold",
                  fontFamily: "serif",
                }}
              >
                Patient Details
              </label>
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
              &nbsp;&nbsp;&nbsp;
              <Button
                onClick={handleClickOpen}
                style={{ background: "#3f51b5", color: "white" }}
              >
                Book
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button
                onClick={handleClickOpen}
                style={{ background: "brown", color: "white" }}
              >
                Cancel
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button
                onClick={() => setRedirectAppointment(true)}
                style={{ background: "#3f51b5", color: "white" }}
              >
                Return
              </Button>
            </Grid>
            <Grid item xs={3}></Grid>
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
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Age</InputLabel>
              <Select
                native
                value={age}
                onChange={handleChange}
                input={<Input id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-dialog-select-label">Age</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={age}
                onChange={handleChange}
                input={<Input />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      {redirectAppointment ? (
        <Redirect from="/Appointment" to="/OPGrid" />
      ) : null}
    </div>
  );
}
