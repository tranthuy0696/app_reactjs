import React from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GameItem from "../GameItem";

const styles = theme => ({
  root: {
    backgroundColor: "rgb(42, 42, 42)",
    padding: 15,
    marginTop: 20,
    marginBottom: 20,
    border: "1px solid rgb(57, 57, 57)",
    boxShadow: "0 0 12px rgba(0,0,0,.1)"
  },
  paper: {
    width: "100%"
  },
  panelSummary: {
    fontSize: 12,
    color: "rgb(217, 233, 255)",
    textDecoration: "none",
    background:
      "rgb(40, 104, 173) url(/assets/images/category-bar-gradient.png) repeat-x top",
    border: "1px solid rgb(53, 127, 206)",
    boxSizing: "border-box",
    textTransform: "uppercase",
    margin: 0,
    minHeight: 6,
    height: 45
  },
  panelSummaryExpanded: {
    minHeight: "6px !important",
    height: 45
  },
  heading: {
    fontSize: theme.typography.pxToRem(10),
    color: "#fff",
    fontWeight: "bold",
    lineHeight: "45px"
  },
  panelDetails: {
    backgroundColor: "rgb(42, 42, 42)"
  },
  icon: {
    fontSize: 14,
    color: "#2096e1",
    verticalAlign: "sub",
    "&:hover": {
      color: "#fff"
    }
  }
});

class GameContainer extends React.Component {
  render() {
    const { classes, label, data } = this.props;
    return (
        <Grid item container>
          <ExpansionPanel className={classes.paper}>
            <ExpansionPanelSummary
              className={classes.panelSummary}
              classes={{
                expanded: classes.panelSummaryExpanded
              }}
              expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
            >
              <Typography className={classes.heading}>
                {label}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.panelDetails}>
              <Grid
                container
                style={{
                  margin: "15px 0px 0px"
                }}
              >
                {data &&
                  data.map(game => (
                    <GameItem gameItem={game} key={game.id}></GameItem>
                  ))}
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
       
    );
  }
}

GameContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GameContainer);
