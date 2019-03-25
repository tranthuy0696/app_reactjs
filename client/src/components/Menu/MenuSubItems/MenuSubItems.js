import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

class MenuSubItems extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid item container className={classes.subMenu}>
        <Grid item container style={{ width: "70%", alignItems: "center" }}>
          Recent Games
        </Grid>
      </Grid>
    );
  }
}

MenuSubItems.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default MenuSubItems;
