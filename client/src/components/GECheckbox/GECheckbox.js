import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
import PropTypes from "prop-types";

const styles = {
  root: {
    padding: "0px 12px"
  },
  checked: {
    color: "rgb(33, 123, 213) !important"
  }
};

const GECheckbox = ({ classes }) => {
  const [state, setState] = React.useState({
    checkedB: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          className={classes.root}
          checked={state.checkedB}
          onChange={handleChange("checkedB")}
          value="checkedB"
          color="primary"
          classes={{ checked: classes.checked }}
        />
      }
      label="Remember me"
    />
  );
};

GECheckbox.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default withStyles(styles)(GECheckbox);
