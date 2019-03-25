import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Link from "react-router-dom/Link";

class Logo extends React.Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <Grid item container xs={12} lg={9} md={8} alignItems="center">
        <Link to="/" className={classes.logo}>
          <img
            alt=""
            className={classes.image}
            src="https://www.playerup.com/styles/playerup/playerup/logo1.png"
          />
        </Link>
      </Grid>
    );
  }
}

Logo.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default Logo;
