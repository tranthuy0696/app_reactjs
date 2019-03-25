import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Login from "./Login";

class Link extends React.Component {
  state = { open: false };

  handleToggle = () => {
    const { open } = this.state;
    this.setState({
      open: !open
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <React.Fragment>
        <Grid item container className={classes.labelWrapper}>
          <Button className={classes.label} onClick={this.handleToggle}>
            Log in or Sign up
          </Button>
        </Grid>
        {open && <Login open={open} close={this.handleToggle}/>}
      </React.Fragment>
    );
  }
}

Link.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default Link;
