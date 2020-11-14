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
        light: "#ff6333",
        main: "#ff3d00",
        dark: "#b22a00",
        contrastText: "#000",
      },
    },
  })
);

const useStyles = makeStyles((theme) => ({
  signUpContainer: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#FBFBFB",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  signUpForm: {
    width: "500px",
    height: "400px",
  },
  signUpGrid: {
    paddingTop: "20px",
  },
  signUpHeader: {
    color: indigo[900],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "30px",
  },
  signUpTextField: {
    marginBottom: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  signUpButton: {
    textTransform: "none",
    width: "225px",
    hieght: "100%",
    fontWeight: "bold",
  },
}));

export default function SignUp() {
  const classes = useStyles();
  return (
    <Container className={classes.signUpContainer}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3} className={classes.signUpForm}>
          <Grid container className={classes.signUpGrid}>
            <Grid className={classes.signUpHeader} item xs={12}>
              <h1>Sign Up</h1>
            </Grid>
            <Grid item xs={12} className={classes.signUpTextField}>
              <TextField id="username" label="Username" variant="outlined" />
            </Grid>
            <Grid item xs={12} className={classes.signUpTextField}>
              <TextField
                id="password"
                type="password"
                label="Password"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} className={classes.signUpTextField}>
              <Button
                className={classes.signUpButton}
                variant="contained"
                color="secondary"
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    </Container>
  );
}
