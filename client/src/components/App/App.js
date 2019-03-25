import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import Footer from "../Footer";
import Menu from "../Menu";
import TopMenu from "../TopMenu";
import MainContent from "../MainContent";

const WIDTH = '70%';

const styles = {
  topMenuWrapper: {
    background: '#090909',
    color: '#ffffff'
  },
  topMenu: {
    width: `${WIDTH}`,
    padding: '4px 0px'
  },
  contentWrapper: {
    color: '#ffffff',
    background: '#1e1e1e'
  },
  content: {
    width: `${WIDTH}`
  }
}


class App extends Component {
  render() {
    const { classes, isLogin } = this.props;
    return (
      <div>
        <Router>
          <Grid container direction="column">
            {isLogin &&<Grid item container justify="center" className={classes.topMenuWrapper}>
              <TopMenu className={classes.topMenu}/>
            </Grid>}
            <Menu />
            <Grid item container className={classes.contentWrapper} justify="center">
              <MainContent className={classes.content}/>
            </Grid>
            <Footer />
          </Grid>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  isLogin: PropTypes.bool.isRequired
}

export default withStyles(styles)(App);
