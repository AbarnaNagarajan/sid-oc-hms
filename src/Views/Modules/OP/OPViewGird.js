import * as React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import {
  DataGrid,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
  GridToolbarContainer,
  GridToolbarExport,
} from "@material-ui/data-grid";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";
import { createTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PatientDetails from "./OPView";
import { Redirect } from "react-router";
import DescriptionIcon from "@material-ui/icons/Description";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";

function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

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
    title: {
      flex: "1 1 100%",
      padding: "8px 8px 0px",
      fontFamily: "serif",
      fontSize: "25px",
      fontWeight: "bold",
    },
  }),
  { defaultTheme }
);

function QuickSearchToolbar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Patient Management
        </Typography>
      </div>
      <div>
        <GridToolbarContainer>
          <TextField
            variant="standard"
            value={props.value}
            onChange={props.onChange}
            placeholder="Search…"
            className={classes.textField}
            InputProps={{
              startAdornment: <SearchIcon fontSize="small" />,
              endAdornment: (
                <IconButton
                  title="Clear"
                  aria-label="Clear"
                  size="small"
                  style={{ visibility: props.value ? "visible" : "hidden" }}
                  onClick={props.clearSearch}
                >
                  <ClearIcon fontSize="small" />
                </IconButton>
              ),
            }}
          />
          <GridToolbarExport />
          <GridToolbarFilterButton />
          <GridToolbarDensitySelector />
          <Button size="small" color="primary" startIcon={<PersonAddIcon />}>
            Add
          </Button>
        </GridToolbarContainer>
      </div>
    </div>
  );
}

function createData(
  id,
  patientname,
  complication,
  mobile,
  address,
  lastCheckUp,
  patientdetails,
  appointment,
  firstName,
  lastName,
  age,
  altContactNumber,
  maritalStatus,
  gender,
  bloodGroup,
  physician,
  registeredDate,
  registeredBy
) {
  return {
    id,
    patientname,
    complication,
    mobile,
    address,
    lastCheckUp,
    patientdetails,
    appointment,
    firstName,
    lastName,
    age,
    altContactNumber,
    maritalStatus,
    gender,
    bloodGroup,
    physician,
    registeredDate,
    registeredBy,
  };
}

QuickSearchToolbar.propTypes = {
  clearSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

const dataRows = [
  createData(
    1,
    "Cupcake",
    "Fever",
    "7878787878",
    "RMD",
    "2021-01-01",
    "New",
    "Book",
    "CHO",
    "Cupcake",
    15,
    "1564654545",
    "single",
    "Male",
    "A+",
    "Dr.Anand.R",
    "2021-01-01",
    "admin"
  ),
  createData(
    2,
    "Kitkat",
    "Cold",
    "8989898989",
    "SLM",
    "2021-02-01",
    "Old",
    "Book",
    "CHO",
    "Kitkat",
    15,
    "1564654545",
    "single",
    "Male",
    "A+",
    "Dr.Anand.R",
    "2021-01-01",
    "admin"
  ),
  createData(
    3,
    "Munch",
    "Head Ache",
    "4545454545",
    "RMS",
    "2021-03-01",
    "In Process",
    "Book",
    "CHO",
    "Munch",
    15,
    "1564654545",
    "single",
    "Male",
    "A+",
    "Dr.Anand.R",
    "2021-01-01",
    "admin"
  ),
  createData(
    4,
    "Dairy Milk",
    "Fever",
    "5656565656",
    "CHE",
    "2021-04-01",
    "New",
    "Book",
    "CHO",
    "Dairy Milk",
    15,
    "1564654545",
    "single",
    "Male",
    "A+",
    "Dr.Anand.R",
    "2021-01-01",
    "admin"
  ),
  createData(
    5,
    "Five Star",
    "Cold",
    "1212121212",
    "CBE",
    "2021-05-01",
    "Old",
    "Book",
    "CHO",
    "Five Star",
    15,
    "1564654545",
    "single",
    "Male",
    "A+",
    "Dr.Anand.R",
    "2021-01-01",
    "admin"
  ),
  createData(
    6,
    "Milky Bar",
    "Head Ache",
    "2323232323",
    "TNL",
    "2021-06-01",
    "In Process",
    "Book",
    "CHO",
    "Milky Bar",
    15,
    "1564654545",
    "single",
    "Male",
    "A+",
    "Dr.Anand.R",
    "2021-01-01",
    "admin"
  ),
  createData(
    7,
    "Perk",
    "Fever",
    "2121212121",
    "THJ",
    "2021-07-01",
    "New",
    "Book",
    "CHO",
    "Perk",
    15,
    "1564654545",
    "single",
    "Male",
    "A+",
    "Dr.Anand.R",
    "2021-01-01",
    "admin"
  ),
  createData(
    8,
    "Doughnut",
    "Cold",
    "5454545454",
    "NML",
    "2021-08-01",
    "Old",
    "Book",
    "CHO",
    "Doughnut",
    15,
    "1564654545",
    "single",
    "Male",
    "A+",
    "Dr.Anand.R",
    "2021-01-01",
    "admin"
  ),
  createData(
    9,
    "Ice Cream",
    "Head Ache",
    "8787878787",
    "ERD",
    "2021-09-01",
    "In Process",
    "Book",
    "CHO",
    "Ice Cream",
    15,
    "1564654545",
    "single",
    "Male",
    "A+",
    "Dr.Anand.R",
    "2021-01-01",
    "admin"
  ),
  createData(
    10,
    "Honey Cake",
    "Fever",
    "3232323232",
    "MDU",
    "2021-10-01",
    "New",
    "Book",
    "CHO",
    "Honey Cake",
    15,
    "1564654545",
    "single",
    "Male",
    "A+",
    "Dr.Anand.R",
    "2021-01-01",
    "admin"
  ),
];

export default function QuickFilteringGrid() {
  const [searchText, setSearchText] = React.useState("");
  const [rows, setRows] = React.useState(dataRows);
  const [openPatientDetails, setOpenPatientDetails] = React.useState(false);
  const [redirectAppointment, setRedirectAppointment] = React.useState(false);
  const [patientDialogDetails, setPatientDialogDetails] = React.useState();
  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filteredRows = dataRows.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setRows(filteredRows);
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
    },
    {
      field: "patientname",
      headerName: "Name",
      width: 150,
    },
    {
      field: "complication",
      headerName: "Complication",
      width: 170,
    },
    {
      field: "mobile",
      headerName: "Mobile Number",
      width: 200,
    },
    { field: "address", headerName: "Place", width: 150 },
    {
      field: "lastCheckUp",
      headerName: "Last Check Up",
      width: 200,
    },
    {
      field: "",
      headerName: "Patient Details",
      width: 170,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const idDetails = params.id;
        const rowDetails = params.api;
        return (
          <Button
            id={idDetails + "_detailsDialog"}
            variant="outlined"
            color="secondary"
            onClick={() => openPatientDetailsDialog(rowDetails, params)}
            startIcon={<DescriptionIcon />}
          >
            Details
          </Button>
        );
      },
    },
    {
      field: "appointment",
      headerName: "Appointment",
      width: 170,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const idDetails = params.id;
        const rowDetails = params.api;
        return (
          <Button
            id={idDetails + "_appointment"}
            variant="outlined"
            color="primary"
            onClick={() => openRedirectAppointment(rowDetails, params)}
            startIcon={<EventAvailableIcon />}
          >
            Book
          </Button>
        );
      },
    },
    {
      field: "firstName",
      headerName: "firstName",
      width: 100,
      hide: true,
    },
    {
      field: "lastName",
      headerName: "lastName",
      width: 100,
      hide: true,
    },
    {
      field: "age",
      headerName: "age",
      width: 100,
      hide: true,
    },
    {
      field: "altContactNumber",
      headerName: "altContactNumber",
      width: 100,
      hide: true,
    },
    {
      field: "maritalStatus",
      headerName: "maritalStatus",
      width: 100,
      hide: true,
    },
    {
      field: "gender",
      headerName: "gender",
      width: 100,
      hide: true,
    },
    {
      field: "bloodGroup",
      headerName: "bloodGroup",
      width: 100,
      hide: true,
    },
    {
      field: "physician",
      headerName: "physician",
      width: 100,
      hide: true,
    },
    {
      field: "registeredDate",
      headerName: "registeredDate",
      width: 100,
      hide: true,
    },
    {
      field: "registeredBy",
      headerName: "registeredBy",
      width: 100,
      hide: true,
    },
  ];

  const openPatientDetailsDialog = (event, params) => {
    setPatientDialogDetails(params.row);
    console.log("Row Data : " + JSON.stringify(params.row));
    setOpenPatientDetails(true);
  };

  const openRedirectAppointment = (e, params) => {
    setRedirectAppointment(true);
  };

  const handleCloseDialog = (e) => {
    setOpenPatientDetails(false);
  };

  React.useEffect(() => {
    setRows(dataRows);
  }, [dataRows]);

  return (
    <div style={{ height: 550, width: "100%", background: "#fafafa" }}>
      <DataGrid
        components={{ Toolbar: QuickSearchToolbar }}
        rows={rows}
        columns={columns}
        onRowSelected={(e) => console.log("selected rowData:", e.data)}
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event) => requestSearch(event.target.value),
            clearSearch: () => requestSearch(""),
          },
        }}
      />
      {openPatientDetails ? (
        <PatientDetails
          openAction={openPatientDetails}
          patientDialogDetails={patientDialogDetails}
          handleCloseDialog={handleCloseDialog}
        />
      ) : null}
      {redirectAppointment ? (
        <Redirect from="/OPGrid" to="/Appointment" />
      ) : null}
    </div>
  );
}
