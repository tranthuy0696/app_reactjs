import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const styles = {
    account: {
        verticalAlign: 'sub',
        cursor: 'pointer',
        marginRight: 5,
    },
    icon: {
        verticalAlign: 'middle',
        cursor: 'pointer',
    },
    link: {
        color: '#fff',
        '&:hover': {
            color: '#6cb2e4'
        }
    }
}

class TopMenu extends Component {
    render() {
        const { className, classes } = this.props;
        return (
            <Grid container className={className} spacing={16} alignItems='center' justify="flex-end">
                <Grid item>
                    <Link to="/account" className={classes.link}>
                        <PersonIcon className={classes.account}/>
                        Admin
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/conversations" className={classes.link}>
                        <MailIcon className={classes.icon} />
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/account/alerts" className={classes.link}>
                        <NotificationsIcon className={classes.icon} />
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/threads" className={classes.link}>
                        <SettingsIcon className={classes.icon} />
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/credits/transactions" className={classes.link}>
                        Credits
                    </Link>
                </Grid>
            </Grid>
        );
    }
}

TopMenu.propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    className: PropTypes.string.isRequired
}

export default withStyles(styles)(TopMenu);
