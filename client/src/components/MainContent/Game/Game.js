import React from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import GameContainer from "./GameContainer";

const styles = theme => ({
  root: {
    backgroundColor: "rgb(42, 42, 42)",
    padding: 15,
    marginTop: 20,
    marginBottom: 20,
    border: "1px solid rgb(57, 57, 57)",
    boxShadow: "0 0 12px rgba(0,0,0,.1)"
  }
});

const games = [
  {
    id: 1,
    title: "Clash of Clans Accounts - Buy Sell Trade",
    listings: "108,632",
    categories: "4",
    today: "3:56 PM",
    latest:
      "[VERIFIED] Th 11 Low Defense| Maxed Heroes 50/50/20| Maxed Troops| Maxed Walls| Maxed Builder Hall 8",
    user: "just_g",
    imgUrl:
      "https://www.playerup.com/styles/ForumCube/BgImages/c607d3aaed5b0ba1e66883615f7e5e50.jpg",
  },
  {
    id: 2,
    title: "Clash Royale Accounts - Buy Sell Trade",
    listings: "14,632",
    categories: "3",
    today: "4:00 PM",
    latest:
      "Level 13 | +5100 Trophy | Max Deck | About 25 Max card | with 236 k gold 1753 Gem | End Game account",
    user: "Raj-Hansh",
    imgUrl:
      "https://www.playerup.com/styles/ForumCube/BgImages/c607d3aaed5b0ba1e66883615f7e5e50.jpg"
  },
  {
    id: 3,
    title: "Fortnite Accounts - Buy Sell Trade",
    listings: "203,632",
    categories: "5",
    today: "4:04 PM",
    latest: "2007 Account 5K RAP has old bunny ears",
    user: "David_Ghenciu",
    imgUrl:
      "https://www.playerup.com/styles/ForumCube/BgImages/7882249de27a558de5320e7cd11ba741.jpg"
  }

];

const markets = [
  {
    id: 1,
    title: "Fortnite Accounts - Buy Sell Trade",
    listings: "203,632",
    categories: "5",
    today: "4:04 PM",
    latest: "2007 Account 5K RAP has old bunny ears",
    user: "David_Ghenciu",
    imgUrl:
      "https://www.playerup.com/styles/ForumCube/BgImages/7882249de27a558de5320e7cd11ba741.jpg"
  },
  {
    id: 2,
    title: "Fortnite Accounts - Buy Sell Trade",
    listings: "203,632",
    categories: "5",
    today: "4:04 PM",
    latest: "2007 Account 5K RAP has old bunny ears",
    user: "David_Ghenciu",
    imgUrl:
      "https://www.playerup.com/styles/ForumCube/BgImages/7882249de27a558de5320e7cd11ba741.jpg"
  },
  {
    id: 3,
    title: "Fortnite Accounts - Buy Sell Trade",
    listings: "203,632",
    categories: "5",
    today: "4:04 PM",
    latest: "2007 Account 5K RAP has old bunny ears",
    user: "David_Ghenciu",
    imgUrl:
      "https://www.playerup.com/styles/ForumCube/BgImages/7882249de27a558de5320e7cd11ba741.jpg"
  },
  {
    id: 4,
    title: "Fortnite Accounts - Buy Sell Trade",
    listings: "203,632",
    categories: "5",
    today: "4:04 PM",
    latest: "2007 Account 5K RAP has old bunny ears",
    user: "David_Ghenciu",
    imgUrl:
      "https://www.playerup.com/styles/ForumCube/BgImages/7882249de27a558de5320e7cd11ba741.jpg"
  }
]

class Game extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} spacing={16}>
        {/* <Grid item container>
          Recent Games
        </Grid> */}
        <GameContainer label={'RECENT GAMES'} data = {games}></GameContainer>
        <GameContainer label={'GAME MARKETPLACES'} data = {games}></GameContainer>
        <GameContainer label={'FEATURED MARKETPLACES'} data = {games}></GameContainer>
        <GameContainer label={'MAIN MARKETPLACES'} data = {markets}></GameContainer>
        <GameContainer label={'DISPUTES'}></GameContainer>
        <GameContainer label={'SUPPORT'}></GameContainer>
      </Grid>
    );
  }
}

Game.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Game);
