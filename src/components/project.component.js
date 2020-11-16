import React from "react";
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
  Tabs,
  Tab,
  Box,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Folder as FolderIcon,
  LibraryBooks as LibraryBooksIcon,
  Equalizer as EqualizerIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import {
  makeStyles,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import { deepOrange, indigo } from "@material-ui/core/colors";
import DashboardComponent from "./dashboard.component";
import FoldersComponent from "./folders.component";
import FormsComponent from "./forms.component";
import APIComponent from "./api.component";

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
  menuIconButton: {
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
  indicator: {
    backgroundColor: deepOrange["A400"],
  },
  active_tabStyle: {
    color: deepOrange["A400"],
    backgroundColor: "#121858",
  },
  default_tabStyle: {},
}));

function TabPanel(props) {
  const { children, tabIndex, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={tabIndex !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {tabIndex === index && (
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
    } else if (tabIndex === 1) {
      return <h1>Folders</h1>;
    } else if (tabIndex === 2) {
      return <h1>Forms</h1>;
    } else if (tabIndex === 3) {
      return <h1>API</h1>;
    }
  }

  const drawer = (
    <ThemeProvider theme={theme}>
      <div className={classes.toolbar} />
      <Divider />
      <Tabs
        orientation="vertical"
        variant="scrollable"
        classes={{
          indicator: classes.indicator,
        }}
        value={tabIndex}
        onChange={handleChange}
        aria-label="Vertical tabs example"
      >
        <Tab
          className={
            tabIndex === 0 ? classes.active_tabStyle : classes.default_tabStyle
          }
          icon={<DashboardIcon />}
          label="Dashboard"
          {...a11yProps(0)}
        />
        <Tab
          className={
            tabIndex === 1 ? classes.active_tabStyle : classes.default_tabStyle
          }
          icon={<FolderIcon />}
          label="Folders"
          {...a11yProps(1)}
        />
        <Tab
          className={
            tabIndex === 2 ? classes.active_tabStyle : classes.default_tabStyle
          }
          icon={<LibraryBooksIcon />}
          label="Forms"
          {...a11yProps(2)}
        />
        <Tab
          className={
            tabIndex === 3 ? classes.active_tabStyle : classes.default_tabStyle
          }
          icon={<EqualizerIcon />}
          label="API"
          {...a11yProps(3)}
        />
      </Tabs>
      <Divider />
      <List>
        <ListItem button key="Back To Projects">
          <ListItemIcon>
            <ArrowBackIcon />
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
              className={classes.menuIconButton}
            >
              <MenuIcon />
            </IconButton>
            {currentTitle()}
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
          <TabPanel tabIndex={tabIndex} index={0}>
            <DashboardComponent />
          </TabPanel>
          <TabPanel tabIndex={tabIndex} index={1}>
            <FoldersComponent />
          </TabPanel>
          <TabPanel tabIndex={tabIndex} index={2}>
            <FormsComponent />
          </TabPanel>
          <TabPanel tabIndex={tabIndex} index={3}>
            <APIComponent />
          </TabPanel>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default Project;
