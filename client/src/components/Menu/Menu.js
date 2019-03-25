import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";
import MenuHeader from "./MenuHeader";
import MenuItems from "./MenuItems";
import MenuSubItems from "./MenuSubItems";

class Menu extends React.Component {
  state = {
    value: 2
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item container className={classes.menu}>
          <MenuHeader classes={classes} />
          <MenuItems classes={classes} />
        </Grid>
        <MenuSubItems classes={classes} />
      </Grid>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default withStyles(styles)(Menu);
