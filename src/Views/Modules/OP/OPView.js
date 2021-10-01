import { React, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import { Grid, TextField, Paper } from "@material-ui/core";
import PortraitIcon from "@material-ui/icons/Portrait";
import CancelIcon from "@material-ui/icons/Cancel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from "@material-ui/core/TableContainer";
import { withStyles } from "@material-ui/core/styles";
import noimage from "./../../../Assets/STETHO.jpg";

const defaultTheme = createTheme();

const useStyles = makeStyles(
  (theme) => ({
    root: {
      padding: theme.spacing(0.5, 0.5, 0),
      justifyContent: "space-between",
      display: "flex",
      alignItems: "flex-start",
      flexWrap: "wrap",
    },
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
    dialogTitle: {
      fontSize: "25px",
      padding: "15px 15px 0px",
      flex: "1 1 100%",
      fontWeight: "bolder",
      fontFamily: "serif",
      color: "black",
    },
    patientDialog: {
      maxWidth: "1300px",
      width: "1410px",
      marginLeft: "265px",
      marginTop: "100px",
      marginBottom: "75px",
      height: "600px",
      borderRadius: "15px",
      marginRight: "25px",
    },
  }),
  { defaultTheme }
);

function PatientInfo(patientDialogDetails) {
  patientDialogDetails = patientDialogDetails.details;
  return (
    <Grid container spacing={1} style={{ padding: "25px" }}>
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
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={3}>
          <label>First Name</label>
        </Grid>
        <Grid item xs={3}>
          <label>{patientDialogDetails.firstName}</label>
        </Grid>
        <Grid item xs={3}>
          <label>Last Name</label>
        </Grid>
        <Grid item xs={3}>
          <label>{patientDialogDetails.lastName}</label>
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={1}>
        <div style={{ width: "100%", color: "#fff" }}>.</div>
      </Grid>
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={3}>
          <label>Age</label>
        </Grid>
        <Grid item xs={3}>
          <label>{patientDialogDetails.age}</label>
        </Grid>
        <Grid item xs={3}>
          <label>Mobile Number</label>
        </Grid>
        <Grid item xs={3}>
          <label>{patientDialogDetails.mobile}</label>
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={1}>
        <div style={{ width: "100%", color: "#fff" }}>.</div>
      </Grid>
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={3}>
          <label>Alt. Contact Number</label>
        </Grid>
        <Grid item xs={3}>
          <label>{patientDialogDetails.altContactNumber}</label>
        </Grid>
        <Grid item xs={3}>
          <label>Marital Status</label>
        </Grid>
        <Grid item xs={3}>
          <label>{patientDialogDetails.maritalStatus}</label>
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={1}>
        <div style={{ width: "100%", color: "#fff" }}>.</div>
      </Grid>
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={3}>
          <label>Gender</label>
        </Grid>
        <Grid item xs={3}>
          <label>{patientDialogDetails.gender}</label>
        </Grid>
        <Grid item xs={3}>
          <label>Address</label>
        </Grid>
        <Grid item xs={3}>
          <label>{patientDialogDetails.address}</label>
        </Grid>
      </Grid>
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
        Medic & Complication Details
      </label>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={3}>
          <label>Complication</label>
        </Grid>
        <Grid item xs={3}>
          <label>{patientDialogDetails.complication}</label>
        </Grid>
        <Grid item xs={3}>
          <label>Blood Group</label>
        </Grid>
        <Grid item xs={3}>
          <label>{patientDialogDetails.bloodGroup}</label>
        </Grid>
      </Grid>
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
        Registration Details
      </label>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={3}>
          <label>Registered Date</label>
        </Grid>
        <Grid item xs={3}>
          <label>{patientDialogDetails.registeredDate}</label>
        </Grid>
        <Grid item xs={3}>
          <label>Registered By</label>
        </Grid>
        <Grid item xs={3}>
          <label>{patientDialogDetails.registeredBy}</label>
        </Grid>
      </Grid>
    </Grid>
  );
}

function PatientPrescription(patientDialogDetails) {
  const dialogClasses = useStyles();

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
  ];
  return (
    <Grid container spacing={1} style={{ padding: "25px" }}>
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
        Prescription Details
      </label>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={3}>
          <label>Enter prescription details: </label>
        </Grid>
        <Grid item xs={3}>
          <TextField
            variant="outlined"
            label="Precription"
            id="standard-start-adornment"
            multiline
            style={{ width: "350px" }}
            rows={4}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={3} style={{ textAlign: "right" }}>
          <Button style={{ background: "#3f51b5", color: "white" }}>
            Book
          </Button>
        </Grid>
        <Grid item xs={3} style={{ textAlign: "left" }}>
          <Button style={{ background: "brown", color: "white" }}>
            Cancel
          </Button>
        </Grid>
      </Grid>
      <Table className={dialogClasses.table} aria-label="caption table">
        {/* <caption>A basic table example with a caption</caption> */}
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
    </Grid>
  );
}
function EPODfileDelete(e, uploadid, Lrid, Id) {
  try {
  } catch (error) {
    console.log(error);
  }
}
function onFileChangeEPOD(event, uploadid, lrid, id, podfilepath) {
  try {
    if (event.target.files.length > 0) {
    }
  } catch (err) {
    console.log("onFileChangeEPOD", err);
  }
}
function PatientReports(patientDialogDetails) {
  const StyledTableCellUpload = withStyles((theme) => ({
    head: {
      backgroundColor: "#190F4C",
      color: theme.palette.common.white,
      borderStyle: "solid",
      fontSize: 13,
      textAlign: "center",
    },
    body: {
      fontSize: 12,
      borderBottomStyle: "hidden",
      textAlign: "center",
      padding: "10px",
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.white,
      },
    },
  }))(TableRow);
  const classes = useStyles();
  const [imageviewcomment, setimageviewcomment] = useState(false);
  const [imageurl, setimageurl] = useState("");
  const [epodUploadNewRowAlert, setEpodUploadNewRowAlert] = useState("");
  const [EpodUploadCount, setEpodUploadCount] = useState([
    {
      podfilepath: "",
      Id: 0,
      Lrid: 0,
      uploadid: 0,
    },
  ]);

  function viewfile(urlpath) {
    if (urlpath === "") {
      setimageurl(noimage);
      setimageviewcomment(true);
    } else {
      setimageurl(urlpath);
      setimageviewcomment(true);
    }
  }

  return (
    <Grid container spacing={1} style={{ padding: "25px" }}>
      <TableContainer
        component={Paper}
        style={{ marginLeft: "0px", marginRight: "2px" }}
      >
        <Table aria-label="customized table" size="medium">
          <TableHead></TableHead>
          <TableBody>
            {EpodUploadCount && EpodUploadCount.length > 0
              ? EpodUploadCount.map((ls, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCellUpload align="left">
                      {ls.podfilepath != "" ? (
                        <img
                          style={{
                            width: "80px",
                            height: "80px",
                            borderStyle: "outset",
                            borderWidth: "thin",
                          }}
                          id={"epodImg"}
                          src={ls.podfilepath}
                          onClick={(e) => viewfile(ls.podfilepath)}
                          alt=""
                          key={ls.id}
                        />
                      ) : (
                        <img
                          style={{
                            width: "80px",
                            height: "80px",
                            borderStyle: "outset",
                            borderWidth: "thin",
                          }}
                          id={"epodImg"}
                          src={noimage}
                          onClick={(e) => viewfile(noimage)}
                          alt=""
                          key={ls.uploadid}
                        />
                      )}
                    </StyledTableCellUpload>
                    <StyledTableCellUpload align="left">
                      {ls.podfilepath != "" && ls.Id != 0 ? (
                        <div>
                          <Button
                            id={"epodImgDelete"}
                            onClick={(e) =>
                              EPODfileDelete(e, ls.uploadid, ls.Lrid, ls.Id)
                            }
                            variant="contained"
                            color="primary"
                            style={{
                              fontSize: "10px",
                              outline: "none",
                              color: "#FFFFFF",
                              background: "#190F4C",
                              borderRadius: "25px",
                              height: "25px",
                            }}
                            component="span"
                          >
                            Delete
                          </Button>
                        </div>
                      ) : (
                        <div>
                          <input
                            type="file"
                            accept="image/png, image/jpeg, image/jpg"
                            id={"epodupload" + index}
                            key={index}
                            onChange={(e) =>
                              onFileChangeEPOD(
                                e,
                                ls.uploadid,
                                ls.Lrid,
                                ls.Id,
                                ls.podfilepath
                              )
                            }
                          />
                        </div>
                      )}
                    </StyledTableCellUpload>
                  </StyledTableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

function PatientAppointmentHistory(patientDialogDetails) {
  const classes = useStyles();
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
  ];

  return (
    <Grid container spacing={1} style={{ padding: "25px" }}>
      <Table className={classes.table} aria-label="caption table">
        {/* <caption>A basic table example with a caption</caption> */}
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
    </Grid>
  );
}

export default function PatientDetails(props) {
  const [open] = useState(props.openAction);
  const [patientDialogDetails] = useState(props.patientDialogDetails);
  const dialogClasses = useStyles();
  const patientDetailsTheme = useTheme();
  const fullScreen = useMediaQuery(patientDetailsTheme.breakpoints.down("20"));
  const [scroll] = useState("paper");
  const handleCloseDialog = (e) => {
    props.handleCloseDialog();
  };
  const dialogActionClass = {
    backgroundColor: "#12824C",
    color: "White",
    fontWeight: "inherit",
    fontFamily: "emoji",
    fontSize: "small",
  };
  const dialogActionClassClicked = {
    backgroundColor: "rgb(177 114 50)",
    color: "White",
    fontWeight: "inherit",
    fontFamily: "emoji",
    fontSize: "small",
  };
  const [loadData, setLoadData] = useState(1);
  return (
    <div>
      <Dialog
        PaperProps={{ classes: { root: dialogClasses.patientDialog } }}
        fullScreen={fullScreen}
        open={open}
        onClose={handleCloseDialog}
        scroll={scroll}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <div className={dialogClasses.dialogTitle}>
            <span style={{ float: "left", color: "ThreeDDarkShadow" }}>
              Patient Details -{" "}
              {patientDialogDetails.firstName
                .concat(" ")
                .concat(patientDialogDetails.lastName)}
              <PortraitIcon />
            </span>
            <span style={{ float: "right" }}>
              <CancelIcon onClick={handleCloseDialog} />
            </span>
          </div>
        </DialogTitle>
        <Divider
          style={{
            marginLeft: "40px",
            marginRight: "40px",
            marginTop: "-15px",
          }}
        />
        <DialogContent>
          {loadData === 1 ? (
            <PatientInfo details={patientDialogDetails} />
          ) : loadData === 2 ? (
            <PatientPrescription details={patientDialogDetails} />
          ) : loadData === 3 ? (
            <PatientReports details={patientDialogDetails} />
          ) : loadData === 4 ? (
            <PatientAppointmentHistory details={patientDialogDetails} />
          ) : (
            <PatientInfo details={patientDialogDetails} />
          )}
        </DialogContent>
        <Divider
          style={{
            marginLeft: "40px",
            marginRight: "40px",
            marginTop: "-15px",
          }}
        />
        <DialogActions
          style={{
            marginRight: "25px",
            marginTop: "5px",
            marginBottom: "5px",
          }}
        >
          <div className={dialogClasses.dialogTitle}>
            <span style={{ float: "left" }}>
              <Button
                style={
                  loadData === 1 ? dialogActionClassClicked : dialogActionClass
                }
                onClick={() => setLoadData(1)}
              >
                Info
              </Button>
              &nbsp;
              <Button
                style={
                  loadData === 2 ? dialogActionClassClicked : dialogActionClass
                }
                onClick={() => setLoadData(2)}
              >
                Prescription
              </Button>
              &nbsp;
              <Button
                style={
                  loadData === 3 ? dialogActionClassClicked : dialogActionClass
                }
                onClick={() => setLoadData(3)}
              >
                Reports
              </Button>
              &nbsp;
              <Button
                style={
                  loadData === 4 ? dialogActionClassClicked : dialogActionClass
                }
                onClick={() => setLoadData(4)}
              >
                Appointments History
              </Button>
            </span>
            <span style={{ float: "right", color: "ThreeDDarkShadow" }}>
              <Button
                style={{
                  color: "White",
                  fontWeight: "inherit",
                  fontFamily: "emoji",
                  fontSize: "small",
                  backgroundColor: "dodgerblue",
                }}
              >
                Physician: {patientDialogDetails.physician}
              </Button>
            </span>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
