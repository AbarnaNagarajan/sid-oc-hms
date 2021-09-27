import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import PortraitIcon from "@material-ui/icons/Portrait";
import CancelIcon from "@material-ui/icons/Cancel";

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

export default function PatientDetails(props) {
  const [open] = React.useState(props.openAction);
  const [patientDialogDetails] = React.useState(props.patientDialogDetails);
  const dialogClasses = useStyles();
  const patientDetailsTheme = useTheme();
  const fullScreen = useMediaQuery(patientDetailsTheme.breakpoints.down("20"));
  const [scroll] = React.useState("paper");
  const handleCloseDialog = (e) => {
    props.handleCloseDialog();
  };
  const label = { inputProps: { "aria-label": "Switch demo" } };
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
              Patient Details - {patientDialogDetails.patientname}
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
                <label>labelPlacement</label>
              </Grid>
              <Grid item xs={3}>
                <label>labelPlacement</label>
              </Grid>
              <Grid item xs={3}>
                <label>labelPlacement</label>
              </Grid>
              <Grid item xs={3}>
                <label>labelPlacement</label>
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={1}>
              <div style={{ width: "100%", color: "#fff" }}>.</div>
            </Grid>
            <Grid container item xs={12} spacing={1}>
              <Grid item xs={3}>
                <label>labelPlacement</label>
              </Grid>
              <Grid item xs={3}>
                <label>labelPlacement</label>
              </Grid>
              <Grid item xs={3}>
                <label>labelPlacement</label>
              </Grid>
              <Grid item xs={3}>
                <label>labelPlacement</label>
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
                <label>labelPlacement</label>
              </Grid>
              <Grid item xs={3}>
                <label>labelPlacement</label>
              </Grid>
              <Grid item xs={3}>
                <label>labelPlacement</label>
              </Grid>
              <Grid item xs={3}></Grid>
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
                <label>labelPlacement</label>
              </Grid>
              <Grid item xs={3}>
                <label>labelPlacement</label>
              </Grid>
              <Grid item xs={3}>
                <label>labelPlacement</label>
              </Grid>
              <Grid item xs={3}></Grid>
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
                <label>labelPlacement</label>
              </Grid>
              <Grid item xs={3}>
                <label>labelPlacement</label>
              </Grid>
              <Grid item xs={3}>
                <label>labelPlacement</label>
              </Grid>
              <Grid item xs={3}></Grid>
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
              <div style={{ width: "100%", color: "#fff" }}>.</div>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}
