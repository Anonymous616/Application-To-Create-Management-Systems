import React from "react";
import PropTypes from "prop-types";
import {
  createMuiTheme,
  makeStyles,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Button, Grid, TextField } from "@material-ui/core";

const theme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
    palette: {
      primary: {
        light: "#474f97",
        main: "#1a237e",
        dark: "#121858",
        contrastText: "#fff",
      },
      secondary: {
        light: "#b22a00",
        main: "#ff3d00",
        dark: "#ff6333",
        contrastText: "#fff",
      },
    },
  })
);
function TabPanel(props) {
  const { children, tabIndex, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={tabIndex !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {tabIndex === index && <Box p={3}>{children} </Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  tabIndex: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "80vw",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Forms() {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleChange = (event, newtabIndex) => {
    setTabIndex(newtabIndex);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Books" {...a11yProps(0)} />
          <Tab label="Members" {...a11yProps(1)} />
          <Tab label="Returns" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <Grid item xs={12} className={classes.tabPane}>
        <TabPanel tabIndex={tabIndex} index={0} style={{ width: "100%" }}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs="12">
              <TextField variant="outlined" label="Name" />
            </Grid>
            <Grid item xs="12">
              <TextField variant="outlined" label="Author" />
            </Grid>{" "}
            <Grid item xs="12">
              <Button variant="contained" color="secondary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel tabIndex={tabIndex} index={1} style={{ width: "100%" }}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs="12">
              <TextField variant="outlined" label="Name" />
            </Grid>
            <Grid item xs="12">
              <TextField variant="outlined" label="Type" />
            </Grid>
            <Grid item xs="12">
              <Button variant="contained" color="secondary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel tabIndex={tabIndex} index={2} style={{ width: "100%" }}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs="12">
              <TextField variant="outlined" label="Name" />
            </Grid>
            <Grid item xs="12">
              <TextField variant="outlined" label="Book" />
            </Grid>
            <Grid item xs="12">
              <Button variant="contained" color="secondary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </TabPanel>
      </Grid>
    </div>
  );
}
