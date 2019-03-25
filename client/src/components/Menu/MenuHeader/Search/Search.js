import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";

class Search extends React.Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <Grid item container xs={12} md={4} lg={3} alignItems="center">
        <Paper className={classes.paper} elevation={0}>
          <IconButton className={classes.iconButton} aria-label="Menu">
            <SearchIcon />
          </IconButton>
          <InputBase className={classes.input} placeholder="Enter Your Game" />
          <IconButton className={classes.iconButton} aria-label="Search">
            <ClearIcon className={classes.clearIcon} />
          </IconButton>
        </Paper>
      </Grid>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default Search;
