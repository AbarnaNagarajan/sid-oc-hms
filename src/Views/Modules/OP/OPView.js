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
      marginLeft: "25px",
      marginTop: "75px",
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

  function createData(id, prescription, prescribedBy, prescribedDate) {
    return { id, prescription, prescribedBy, prescribedDate };
  }

  const rows = [
    createData(1, "Prescribe", "Dr.Ananad", "2021-01-01"),
    createData(2, "Prescribe", "Dr.Ananad", "2021-01-02"),
    createData(3, "Prescribe", "Dr.Ananad", "2021-01-03"),
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
            <TableCell>ID</TableCell>
            <TableCell align="right">Prescription</TableCell>
            <TableCell align="right">Prescribed By</TableCell>
            <TableCell align="right">Prescribed Date</TableCell>
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
  const handleChange = (event, id) => {
    id === 1
      ? setGender(event.target.value)
      : id === 2
      ? setGender(event.target.value)
      : id === 3
      ? setGender(event.target.value)
      : setGender(event.target.value);
  };
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
  const [gender, setGender] = useState("0");
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
        Upload New Report
      </label>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Grid container item xs={12} spacing={1}>
        <TableContainer
          component={Paper}
          style={{ marginLeft: "0px", marginRight: "2px" }}
        >
          <Table aria-label="customized table" size="medium">
            <TableHead>
              {/* <StyledTableRow>
                <StyledTableCellUpload align="left">
                  <label>View Reports</label>
                </StyledTableCellUpload>
                <StyledTableCellUpload align="left">
                  <label>Upload Reports</label>
                </StyledTableCellUpload>
              </StyledTableRow> */}
            </TableHead>
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
                        {ls.podfilepath != "" ? (
                          <label
                            style={{
                              fontSize: "15px",
                              padding: "4px 4px 0px",
                              flex: "1 1 100%",
                              fontWeight: "bold",
                              fontFamily: "serif",
                            }}
                          >
                            X-ray Report
                          </label>
                        ) : (
                          <label
                            style={{
                              fontSize: "15px",
                              padding: "4px 4px 0px",
                              flex: "1 1 100%",
                              fontWeight: "bold",
                              fontFamily: "serif",
                            }}
                          >
                            X-ray Report
                          </label>
                        )}
                      </StyledTableCellUpload>
                      <StyledTableCellUpload
                        align="left"
                        style={{ width: "105px" }}
                      >
                        {ls.podfilepath != "" ? (
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
                        ) : (
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
                        )}
                      </StyledTableCellUpload>
                    </StyledTableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <label
        style={{
          fontSize: "15px",
          padding: "4px 4px 0px",
          flex: "1 1 100%",
          fontWeight: "bold",
          fontFamily: "serif",
        }}
      >
        Reports History
      </label>
      <Grid container item xs={12} spacing={1}>
        <TableContainer
          component={Paper}
          style={{ marginLeft: "0px", marginRight: "2px" }}
        >
          <Table aria-label="customized table" size="medium">
            <TableHead>
              {/* <StyledTableRow>
                <StyledTableCellUpload align="left">
                  <label>View Reports</label>
                </StyledTableCellUpload>
                <StyledTableCellUpload align="left">
                  <label>Upload Reports</label>
                </StyledTableCellUpload>
              </StyledTableRow> */}
            </TableHead>
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
                        {ls.podfilepath != "" ? (
                          <label
                            style={{
                              fontSize: "15px",
                              padding: "4px 4px 0px",
                              flex: "1 1 100%",
                              fontWeight: "bold",
                              fontFamily: "serif",
                            }}
                          >
                            X-ray Report
                          </label>
                        ) : (
                          <label
                            style={{
                              fontSize: "15px",
                              padding: "4px 4px 0px",
                              flex: "1 1 100%",
                              fontWeight: "bold",
                              fontFamily: "serif",
                            }}
                          >
                            X-ray Report
                          </label>
                        )}
                      </StyledTableCellUpload>
                      <StyledTableCellUpload
                        align="left"
                        style={{ width: "275px" }}
                      >
                        {ls.podfilepath != "" ? (
                          <Button
                            style={{
                              color: "White",
                              fontWeight: "inherit",
                              fontFamily: "emoji",
                              fontSize: "small",
                              backgroundColor: "red",
                            }}
                          >
                            Delete
                          </Button>
                        ) : (
                          <Button
                            style={{
                              color: "White",
                              fontWeight: "inherit",
                              fontFamily: "emoji",
                              fontSize: "small",
                              backgroundColor: "red",
                            }}
                          >
                            Delete
                          </Button>
                        )}
                      </StyledTableCellUpload>
                    </StyledTableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

function PatientAppointmentHistory(patientDialogDetails) {
  const classes = useStyles();
  const dialogActionClass = { fontWeight: "bold", fontFamily: "initial" };
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
      <label
        style={{
          fontSize: "15px",
          padding: "4px 4px 0px",
          flex: "1 1 100%",
          fontWeight: "bold",
          fontFamily: "serif",
        }}
      >
        Appointments History
      </label>
      <Table className={classes.table} aria-label="caption table">
        {/* <caption>A basic table example with a caption</caption> */}
        <TableHead>
          <TableRow>
            <TableCell style={dialogActionClass}>
              Appointment Booked Date
            </TableCell>
            <TableCell align="right" style={dialogActionClass}>
              Appointment Booked By
            </TableCell>
            <TableCell align="right" style={dialogActionClass}>
              Appointment Date
            </TableCell>
            <TableCell align="right" style={dialogActionClass}>
              Check Up Done By
            </TableCell>
            <TableCell align="right" style={dialogActionClass}>
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
