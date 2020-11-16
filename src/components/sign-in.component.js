import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import {
  Container,
  Paper,
  Grid,
  TextField,
  Button,
  responsiveFontSizes,
} from "@material-ui/core";
import { indigo } from "@material-ui/core/colors";

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
        contrastText: "#000",
      },
    },
  })
);

const useStyles = makeStyles((theme) => ({
  signInContainer: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#FBFBFB",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  signInForm: {
    width: "500px",
    height: "400px",
  },
  signInGrid: {
    paddingTop: "20px",
  },
  signInHeader: {
    color: indigo[900],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "30px",
  },
  signInTextField: {
    marginBottom: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  signInButton: {
    textTransform: "none",
    width: "225px",
    hieght: "100%",
    fontWeight: "bold",
  },
}));

export default function SignIn() {
  const classes = useStyles();
  return (
    <Container className={classes.signInContainer}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3} className={classes.signInForm}>
          <Grid container className={classes.signInGrid}>
            <Grid className={classes.signInHeader} item xs={12}>
              <h1>Sign In</h1>
            </Grid>
            <Grid item xs={12} className={classes.signInTextField}>
              <TextField id="username" label="Username" variant="outlined" />
            </Grid>
            <Grid item xs={12} className={classes.signInTextField}>
              <TextField
                id="password"
                type="password"
                label="Password"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} className={classes.signInTextField}>
              <Button
                className={classes.signInButton}
                variant="contained"
                color="secondary"
              >
                Sign In
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    </Container>
  );
}
