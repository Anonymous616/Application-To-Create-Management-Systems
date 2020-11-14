import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  CssBaseline,
  Divider,
  Hidden,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  ListItemIcon,
  ListItemText,
  Drawer,
  ThemeProvider,
  Button,
  Tabs,
  Tab,
  Box,
} from "@material-ui/core";
import {
  Menu,
  Dashboard,
  Folder,
  LibraryBooks,
  Equalizer,
  ArrowBack,
} from "@material-ui/icons";
import {
  makeStyles,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import { indigo } from "@material-ui/core/colors";

const drawerWidth = 200;

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
        light: "#ff6333",
        main: "#ff3d00",
        dark: "#b22a00",
        contrastText: "#000",
      },
    },
  })
);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: "#fbfbfb",
    color: indigo[900],
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function TabPanel(props) {
  const { children, TabIndex, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={TabIndex !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {TabIndex === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Project(props) {
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  function currentTitle() {
    if (tabIndex === 0) {
      return <h1>Dashboard</h1>;
    }
  }

  const drawer = (
    <ThemeProvider theme={theme}>
      <div className={classes.toolbar} />
      <Divider />
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={tabIndex}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab icon={<Dashboard />} label="Dashboard" {...a11yProps(0)} />
        <Tab icon={<Folder />} label="Folders" {...a11yProps(1)} />
        <Tab icon={<LibraryBooks />} label="Forms" {...a11yProps(2)} />
        <Tab icon={<Equalizer />} label="API" {...a11yProps(3)} />
      </Tabs>
      <Divider />
      <List>
        <ListItem button key="Back To Projects">
          <ListItemIcon>
            <ArrowBack />
          </ListItemIcon>
          <ListItemText primary="Back To Projects" />
        </ListItem>
      </List>
    </ThemeProvider>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar elevation={0} position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
            {currentTitle}
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <TabPanel TabIndex={tabIndex} index={0}>
            Item One
          </TabPanel>
          <TabPanel TabIndex={tabIndex} index={1}>
            Item Two
          </TabPanel>
          <TabPanel TabIndex={tabIndex} index={2}>
            Item Three
          </TabPanel>
          <TabPanel TabIndex={tabIndex} index={3}>
            Item Four
          </TabPanel>
        </main>
      </div>
    </ThemeProvider>
  );
}

Project.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Project;
