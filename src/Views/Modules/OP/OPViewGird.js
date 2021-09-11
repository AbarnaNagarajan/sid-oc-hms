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
      fontWeight: "bold"
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
  appointment
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
    "Book"
  ),
  createData(
    2,
    "Kitkat",
    "Cold",
    "8989898989",
    "SLM",
    "2021-02-01",
    "Old",
    "Book"
  ),
  createData(
    3,
    "Munch",
    "Head Ache",
    "4545454545",
    "RMS",
    "2021-03-01",
    "In Process",
    "Book"
  ),
  createData(
    4,
    "Dairy Milk",
    "Fever",
    "5656565656",
    "CHE",
    "2021-04-01",
    "New",
    "Book"
  ),
  createData(
    5,
    "Five Star",
    "Cold",
    "1212121212",
    "CBE",
    "2021-05-01",
    "Old",
    "Book"
  ),
  createData(
    6,
    "Milky Bar",
    "Head Ache",
    "2323232323",
    "TNL",
    "2021-06-01",
    "In Process",
    "Book"
  ),
  createData(
    7,
    "Perk",
    "Fever",
    "2121212121",
    "THJ",
    "2021-07-01",
    "New",
    "Book"
  ),
  createData(
    8,
    "Doughnut",
    "Cold",
    "5454545454",
    "NML",
    "2021-08-01",
    "Old",
    "Book"
  ),
  createData(
    9,
    "Ice Cream",
    "Head Ache",
    "8787878787",
    "ERD",
    "2021-09-01",
    "In Process",
    "Book"
  ),
  createData(
    10,
    "Honey Cake",
    "Fever",
    "3232323232",
    "MDU",
    "2021-10-01",
    "New",
    "Book"
  ),
];

export default function QuickFilteringGrid() {
  const [searchText, setSearchText] = React.useState("");
  const [rows, setRows] = React.useState(dataRows);
  const [openPatientDetails, setOpenPatientDetails] = React.useState(false);
  const [redirectAppointment, setRedirectAppointment] = React.useState(false);
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
      field: "patientdetails",
      headerName: "Patient Details",
      width: 170,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const details = params.value;
        const idDetails = params.id;

        return (
          <Button
            id={idDetails}
            variant="outlined"
            color="secondary"
            onClick={() => openPatientDetailsDialog(idDetails)}
          >
            {details}
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
        const details = params.value;
        const idDetails = params.id;

        return (
          <Button
            id={idDetails}
            variant="outlined"
            color="primary"
            onClick={() => openRedirectAppointment(idDetails)}
          >
            {details}
          </Button>
        );
      },
    },
  ];

  const openPatientDetailsDialog = () => {
    setOpenPatientDetails(true);
  };

  const openRedirectAppointment = () => {
    setRedirectAppointment(true);
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
        <PatientDetails openAction={openPatientDetails} patientName={""} />
      ) : null}
      {redirectAppointment ? (
        <Redirect from="/OPGrid" to="/Appointment" />
      ) : null}
    </div>
  );
}
