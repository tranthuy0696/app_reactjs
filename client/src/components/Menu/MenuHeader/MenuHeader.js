import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Logo from "./Logo";
import Search from "./Search";
import Link from "./Link";

class MenuHeader extends React.Component {
  render() {
    const { classes, isLogin } = this.props;
    return (
      <Grid container className={classes.header}>
        {!isLogin && <Link classes={classes} />}
        <Logo classes={classes} />
        <Search classes={classes} />
      </Grid>
    );
  }
}

MenuHeader.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  isLogin: PropTypes.bool.isRequired
};

export default MenuHeader;
