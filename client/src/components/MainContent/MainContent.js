import React from "react";
import { Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types';
import Game from "./Game";
import AccountManagement from "./AccountManagement";

class MainContent extends React.Component {
    render() {
        const { className } = this.props;
        return (
            <Grid item container className={className}>
                <Route path="/" exact component={Game} />
                <Route path="/game" exact component={Game} />
                <Route path="/account" component={AccountManagement} />
            </Grid>
        );
    }
}

MainContent.propTypes = {
    className: PropTypes.string.isRequired,
}

export default MainContent;
