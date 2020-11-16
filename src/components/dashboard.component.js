import React from "react";
import {
  Paper,
  Grid,
  responsiveFontSizes,
  Container,
  Box,
  Typography,
  Tab,
  Tabs,
  TextField,
  GridList,
  Button,
  ThemeProvider,
} from "@material-ui/core";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
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

const useStyles = makeStyles((theme) => ({
  summaryContainer: {
    padding: "20px",
  },
  summaryBody: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dividerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "3px",
  },
  divider: {
    width: "200px",
    height: "3px",
    borderRadius: "5px",
    backgroundColor: theme.palette.primary.main,
  },
  formsContainer: {
    padding: "20px",
  },
  tablesContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  tabPane: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  formGrid: {
    width: "100%",
  },

  tabs: {
    width: "200px",
  },
}));

function Summary() {
  const classes = useStyles();
  return (
    <Grid
      className={classes.summaryContainer}
      container
      justify="center"
      spacing={1}
    >
      <Grid item xs={12}>
        <Typography style={{ textAlign: "center" }} variant="h5">
          Summary
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.dividerContainer}>
        <Box className={classes.divider} />
      </Grid>
      <Grid item xs={12} className={classes.summaryBody}>
        No. of Tables : 2
      </Grid>
      <Grid item xs={12} className={classes.summaryBody}>
        No. of Users : 1
      </Grid>
    </Grid>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Dashboard() {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = React.useState(0);
  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const tables = ["Books", "Members"];
  return (
    <ThemeProvider theme={theme}>
      <Grid container justify="center" spacing={4}>
        <Grid item xs={12}>
          <Paper elevation={3}>
            <Summary />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3}>
            <Grid container className={classes.tablesContainer} spacing={1}>
              <Grid item xs={12}>
                <Typography style={{ textAlign: "center" }} variant="h5">
                  Tables
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.dividerContainer}>
                <Box className={classes.divider} />
              </Grid>
              <Grid item xs={12} className={classes.tablesContainer}>
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={tabIndex}
                  onChange={handleChange}
                  aria-label="Vertical tabs"
                  className={classes.tabs}
                >
                  {tables.map((text, index) => (
                    <Tab
                      className={classes.tabs}
                      label={text}
                      {...a11yProps(index)}
                    />
                  ))}
                </Tabs>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3}>
            {" "}
            <Grid
              container
              className={classes.formsContainer}
              justify="center"
              spacing={1}
            >
              <Grid item xs={12}>
                <Typography style={{ textAlign: "center" }} variant="h5">
                  Forms
                </Typography>
              </Grid>{" "}
              <Grid item xs={12} className={classes.dividerContainer}>
                <Box className={classes.divider} />
              </Grid>
              <Grid item xs={12} className={classes.tabPane}>
                <TabPanel value={tabIndex} index={0} style={{ width: "100%" }}>
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
                <TabPanel value={tabIndex} index={1} style={{ width: "100%" }}>
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
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
