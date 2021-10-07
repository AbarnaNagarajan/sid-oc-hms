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
import PortraitIcon from "@material-ui/icons/Portrait";
import CancelIcon from "@material-ui/icons/Cancel";
import PatientInfo from "./OPViewDetails/PatientInfo";
import PatientPrescription from "./OPViewDetails/PatientPrescription";
import PatientReports from "./OPViewDetails/PatientReports";
import PatientAppointmentHistory from "./OPViewDetails/PatientAppointmentHistory";

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
