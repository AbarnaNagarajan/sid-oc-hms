import React from "react";
import { Grid } from "@material-ui/core";

var infoStyle = {
  fontSize: "15px",
  padding: "4px 4px 0px",
  flex: "1 1 100%",
  fontWeight: "bold",
  fontFamily: "serif",
};

export default function PatientInfo(patientDialogDetails) {
  patientDialogDetails = patientDialogDetails.details;
  return (
    <Grid container spacing={1} style={{ padding: "25px" }}>
      <br />
      <label style={infoStyle}>Patient Details</label>
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
      <label style={infoStyle}>Medic & Complication Details</label>
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
      <label style={infoStyle}>Registration Details</label>
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
