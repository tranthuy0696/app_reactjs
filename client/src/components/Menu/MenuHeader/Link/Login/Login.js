import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import GEInput from "../../../../GEInput";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import GECheckbox from "../../../../GECheckbox";
import Link from "react-router-dom/Link";

const styles = {
  label: {
    fontSize: 14,
    color: "#4c4c4c"
  },
  button: {
    background: "#2586da",
    color: "#fff",
    width: "100%"
  },
  title: {
    color: "#217bd5",
    padding: "16px 24px 20px",
    fontWeight: "bold",
    fontSize: 24
  }
};

class Login extends React.Component {
  handleClose = () => {
    const { close } = this.props;
    close();
  };

  handleLogin = () => {
    const { login } = this.props;
    login({ username: "admin", password: "admin" });
    this.handleClose();
  };

  render() {
    const { classes, open } = this.props;
    return (
      <Dialog
        open={open}
        onClose={this.handleClose}
        aria-labelledby="login-dialog-title"
        maxWidth="xs"
      >
        <DialogTitle
          disableTypography
          className={classes.title}
          id="login-dialog-title"
        >
          Login
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={16}>
            <Grid item container>
              <Grid item xs={12} className={classes.label}>
                Your name or email address
              </Grid>
              <Grid item xs={12}>
                <GEInput
                  autoComplete="off"
                  autoFocus
                  id="name"
                  placeholder="Password"
                />
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={12} className={classes.label}>
                Your name or email address
              </Grid>
              <Grid item xs={12}>
                <GEInput
                  autoComplete="off"
                  id="password"
                  placeholder="Password"
                />
              </Grid>
            </Grid>
            <Grid item container alignItems="center">
              <Grid item xs={6}>
                <GECheckbox />
              </Grid>
              <Grid item xs={6} style={{ fontSize: 13 }}>
                <Link to="/password">Forgot your password?</Link>
              </Grid>
            </Grid>
            <Grid item container>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.handleLogin}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};

export default withStyles(styles)(Login);
