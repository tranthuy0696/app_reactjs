import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import "../styles.css";

class GameItem extends Component {
	render() {
		const { gameItem } = this.props;
		return (
			<li className="node-list active">
				<div
					className="card"
					style={{
						background: `url(${
							gameItem.imgUrl
						}) center center no-repeat`,
						backgroundSize: "cover"
					}}
				>
					<div className="card-content white-text">
						<span className="card-title">{gameItem.title}</span>
						<Grid
							item
							container
							style={{
								margin: "0.5rem",
								height: "2rem"
							}}
						>
							<div style={{ paddingRight: "0.5rem" }}>
								<span>
									<i className="material-icons">receipt</i>:
                                {gameItem.listings}
								</span>
							</div>
							<div
								className="visible"
								style={{ paddingRight: "1rem" }}
							>
								<i className="material-icons">folder_open</i>:{" "}
								{gameItem.categories}{" "}
								<i className="material-icons">arrow_drop_down</i>
							</div>
							<div style={{ flex: 1 }}>
								<span style={{ fontSize: 11 }}>
									<i className="material-icons">access_time</i>{" "}
									{gameItem.today}
								</span>
							</div>
						</Grid>
					
					</div>
				</div>
			</li>
		);
	}
}

export default GameItem;
