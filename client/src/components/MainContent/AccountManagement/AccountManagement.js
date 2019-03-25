import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

const styles = {
    root: {
        padding: 15,
    marginTop: 20,
    marginBottom: 20,
    boxShadow: '0 0 12px rgba(0,0,0,.1)',
    background: '#1e1e1e',
    border: 'none'
    },
    title: {
        fontWeight: 'bold',
    fontSize: 24,
    margin: '0 0 10px'
    }
}

class AccountManagement extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.root}>
            <Grid item container className={classes.title} justify="center">Account Management</Grid>
            <Grid item container>Account List</Grid>
            </Grid>
        );
    }
}

AccountManagement.propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired
}

export default withStyles(styles)(AccountManagement);
