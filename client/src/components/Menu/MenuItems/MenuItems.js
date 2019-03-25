import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const menus = [
  {
    id: 1,
    name: "FORUMS"
  },
  {
    id: 2,
    name: "MIDDLEMAN"
  },
  {
    id: 3,
    name: "SHOP"
  },
  {
    id: 4,
    name: "SUPPORT"
  },
  {
    id: 5,
    name: "UPGRADE"
  }
];

class MenuItems extends React.Component {
  state = {
    value: 2
  };

  handleChange = (_, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid item container>
        <Tabs
          value={this.state.value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
          classes={{
            indicator: classes.indicator
          }}
        >
          {menus.map(menu => (
            <Tab
              key={menu.id}
              className={classes.tab}
              classes={{
                selected: classes.tabSelected
              }}
              label={menu.name}
              value={menu.id}
            />
          ))}
        </Tabs>
      </Grid>
    );
  }
}

MenuItems.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default MenuItems;
