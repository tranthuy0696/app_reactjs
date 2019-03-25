import React from "react";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import "./footer.css"

const styles = {
  root: {
    borderTop: "1px solid #393939",
    position: "relative",
    backgroundColor: "#191919",
    // bottom: 0
  },
  whiteText: {
    color: "#fff"
  },

  textLighten4: {
    color: "#f5f5f5"
  },
  textLighten3: {
    color: "#eee",
    textDecoration: "none"
  },
  copyright: {
    backgroundColor: "#191919",
    width: "100%",
    alignItems: "center",
    minHeight: 50,
    fontWeight: 300,
    color: "rgba(255,255,255,0.8)"
  }
};

class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item container className={classes.copyright}>
          <Grid item xs={6}>
            © 2014 Copyright Text
          </Grid>
          <Grid item xs={6}>

            <ul className="menufooter">
              <li><a className={classes.textLighten4} href="#!">
                <i className="fab fa-facebook"></i>
              </a></li>
              <li><a className={classes.textLighten4} href="#!">
                <i className="fab fa-instagram"></i>
              </a></li>

              <li>
                <a className={classes.textLighten4} href="#!">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li><a className={classes.textLighten4} href="#!">
                <i className="fab fa-github-square"></i>
              </a></li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};
export default withStyles(styles)(Footer);
