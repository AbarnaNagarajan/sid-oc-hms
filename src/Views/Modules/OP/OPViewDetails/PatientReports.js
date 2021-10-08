import { React, useState } from "react";
import Button from "@material-ui/core/Button";
import { Grid, Paper, TextField } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from "@material-ui/core/TableContainer";
import { withStyles } from "@material-ui/core/styles";
import noimage from "./../../../../Assets/STETHO.jpg";
import { makeStyles } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const defaultTheme = createTheme();

const useStyles = makeStyles(
  (theme) => ({
    divStyle: { padding: "25px" },
    labelDesign: {
      fontSize: "15px",
      padding: "4px 4px 0px",
      flex: "1 1 100%",
      fontWeight: "bold",
      fontFamily: "serif",
    },
    tableContainerDesign: { marginLeft: "0px", marginRight: "2px" },
    imgStyle: {
      width: "80px",
      height: "80px",
      borderStyle: "outset",
      borderWidth: "thin",
    },
    imgLabel: {
      fontSize: "15px",
      padding: "4px 4px 0px",
      flex: "1 1 100%",
      fontWeight: "bold",
      fontFamily: "serif",
    },
  }),
  { defaultTheme }
);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.white,
    },
  },
}))(TableRow);

const StyledTableCellUpload = withStyles((theme) => ({
  head: {
    backgroundColor: "#190F4C",
    color: theme.palette.common.white,
    borderStyle: "solid",
    fontSize: 13,
    textAlign: "center",
    align: "left",
  },
  body: {
    fontSize: 12,
    borderBottomStyle: "hidden",
    textAlign: "center",
    padding: "10px",
    align: "left",
  },
}))(TableCell);

export default function PatientReports(patientDialogDetails) {
  const classes = useStyles();
  const [imageviewcomment, setimageviewcomment] = useState(false);
  const [imageurl, setimageurl] = useState("");
  const [epodUploadNewRowAlert, setEpodUploadNewRowAlert] = useState("");
  const [report, setReports] = useState("0");
  const [EpodUploadCount, setEpodUploadCount] = useState([
    {
      podfilepath: "",
      Id: 0,
      Lrid: 0,
      uploadid: 0,
    },
  ]);
  const reports = [
    {
      value: 0,
      label: "Select...",
    },
    {
      value: 1,
      label: "Blood Report",
    },
    {
      value: 2,
      label: "X-Ray Report",
    },
    {
      value: 3,
      label: "Scan Report",
    },
  ];

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

  function viewfile(urlpath) {
    if (urlpath === "") {
      setimageurl(noimage);
      setimageviewcomment(true);
    } else {
      setimageurl(urlpath);
      setimageviewcomment(true);
    }
  }

  const handleChange = (event) => {
    setReports(event.target.value);
  };

  return (
    <Grid container spacing={1} className={classes.divStyle}>
      <br />
      <label className={classes.labelDesign}>Upload New Report</label>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Grid container item xs={12} spacing={1}>
        <TableContainer
          component={Paper}
          className={classes.tableContainerDesign}
        >
          <Table aria-label="customized table" size="medium">
            <TableHead></TableHead>
            <TableBody>
              {EpodUploadCount && EpodUploadCount.length > 0
                ? EpodUploadCount.map((ls, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCellUpload align="left">
                        <label></label>
                      </StyledTableCellUpload>
                      <StyledTableCellUpload align="left">
                        <img
                          className={classes.imgStyle}
                          id={"epodImg"}
                          src={noimage}
                          onClick={(e) => viewfile(noimage)}
                          alt=""
                          key={ls.uploadid}
                        />
                      </StyledTableCellUpload>
                      <StyledTableCellUpload align="left">
                        <TextField
                          variant="outlined"
                          id="standard-report"
                          select
                          label="Reports"
                          value={report}
                          onChange={(e) => handleChange(e)}
                          SelectProps={{
                            native: true,
                          }}
                          style={{ width: "100px" }}
                          helperText=""
                        >
                          {reports.map((option) => (
                            <option
                              key={option.value}
                              value={option.value}
                              style={{ width: "230px", fontSize: "small" }}
                            >
                              {option.label}
                            </option>
                          ))}
                        </TextField>
                      </StyledTableCellUpload>
                      <StyledTableCellUpload
                        align="left"
                        style={{ width: "105px" }}
                      >
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
                      </StyledTableCellUpload>
                      <StyledTableCellUpload align="left">
                        <label></label>
                      </StyledTableCellUpload>
                      <StyledTableCellUpload
                        align="left"
                        style={{ width: "290px" }}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button
                          style={{
                            background: "brown",
                            color: "white",
                            textAlign: "right",
                            fontWeight: "bold",
                            fontFamily: "emoji",
                            fontSize: "small",
                          }}
                          onClick={(e) =>
                            EPODfileDelete(
                              e,
                              ls.uploadid,
                              ls.Lrid,
                              ls.Id,
                              ls.podfilepath
                            )
                          }
                          endIcon={<HighlightOffIcon />}
                        >
                          Cancel
                        </Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button
                          style={{
                            background: "#3f51b5",
                            color: "white",
                            textAlign: "right",
                            fontWeight: "bold",
                            fontFamily: "emoji",
                            fontSize: "small",
                          }}
                          onClick={(e) =>
                            EPODfileDelete(
                              e,
                              ls.uploadid,
                              ls.Lrid,
                              ls.Id,
                              ls.podfilepath
                            )
                          }
                          endIcon={<CloudUploadIcon/>}
                        >
                          Upload
                        </Button>
                      </StyledTableCellUpload>
                      <StyledTableCellUpload align="left"></StyledTableCellUpload>
                    </StyledTableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <label className={classes.imgLabel}>Reports History</label>
      <Grid container item xs={12} spacing={1}>
        <TableContainer
          component={Paper}
          className={classes.tableContainerDesign}
        >
          <Table aria-label="customized table" size="medium">
            <TableHead></TableHead>
            <TableBody>
              {EpodUploadCount && EpodUploadCount.length > 0
                ? EpodUploadCount.map((ls, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCellUpload align="left">
                        <label className={classes.imgLabel}>1</label>
                      </StyledTableCellUpload>
                      <StyledTableCellUpload align="left">
                        <img
                          className={classes.imgStyle}
                          id={"epodImg"}
                          src={noimage}
                          onClick={(e) => viewfile(noimage)}
                          alt=""
                          key={ls.uploadid}
                        />
                      </StyledTableCellUpload>
                      <StyledTableCellUpload align="left">
                        <label className={classes.imgLabel}>X-ray Report</label>
                      </StyledTableCellUpload>
                      <StyledTableCellUpload align="left">
                        <label className={classes.imgLabel}>Uploaded By</label>
                      </StyledTableCellUpload>
                      <StyledTableCellUpload align="left">
                        <label className={classes.imgLabel}>
                          Uploaded Date Time
                        </label>
                      </StyledTableCellUpload>
                      <StyledTableCellUpload
                        align="left"
                        style={{ width: "250px" }}
                      >
                        <Button
                          style={{
                            background: "brown",
                            color: "white",
                            textAlign: "right",
                            fontWeight: "bold",
                            fontFamily: "emoji",
                            fontSize: "small",
                          }}
                          onClick={(e) =>
                            EPODfileDelete(
                              e,
                              ls.uploadid,
                              ls.Lrid,
                              ls.Id,
                              ls.podfilepath
                            )
                          }
                          endIcon = {<DeleteForeverIcon/>}
                        >
                          Delete
                        </Button>
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
