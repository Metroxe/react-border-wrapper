import React, {Component} from "react";
import BorderWrapper from "react-border-wrapper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Slider from "@material-ui/lab/Slider";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";

export default class App extends Component {

	state = {
		topPosition: 0.5,
		rightPosition: 0.5,
		bottomPosition: 0.5,
		leftPosition: 0.5
	};

	createSliderOnChange = (key) => {
		return (event, value) => {
			this.setState({[key]: value}, () => {
				console.log(this.state);
			});
		};
	};

	render() {
		return (
			<div>
				<AppBar position="static" color="default">
					<Toolbar>
						<Typography variant="h6" color="inherit">
							React Border Wrapper
						</Typography>
					</Toolbar>
				</AppBar>

				<Paper style={{textAlign: "center", padding: "50px", marginBottom: "10px", marginTop: "20px"}}>
					<BorderWrapper
						topElement={
							<p style={{margin: 0}}>Logo</p>
						}
						topPosition={this.state.topPosition}

						rightElement={
							<p style={{margin: 0}}>L<br/>o<br/>g<br/>o</p>
						}
						rightPosition={this.state.rightPosition}

						bottomElement={
							<p style={{margin: 0}}>Logo</p>
						}
						bottomPosition={this.state.bottomPosition}

						leftElement={
							<p style={{margin: 0}}>L<br/>o<br/>g<br/>o</p>
						}
						leftPosition={this.state.leftPosition}

						innerPadding="50px"
					>
						<h1 style={{margin: 0}}>Hey there</h1>
						<h2 style={{margin: 0}}>I'm Rockin a Sitch</h2>
					</BorderWrapper>
				</Paper>

				<Paper>
					<Grid
						container
						spacing={24}
					>
						<Grid item sm={4}>
							<Typography id="label">Top Position: {this.state.topPosition}</Typography>
							<Slider
								aria-labelledby="label"
								onChange={this.createSliderOnChange("topPosition")}
								value={this.state.topPosition}
								max={1}
								min={0}
								step={0.01}
								aria-valuetext={this.state.topPosition}
							/>
							<Typography id="label">Right Position: {this.state.rightPosition}</Typography>
							<Slider
								className="inputMargin"
								aria-labelledby="label"
								onChange={this.createSliderOnChange("rightPosition")}
								value={this.state.rightPosition}
								max={1}
								min={0}
								step={0.01}
								aria-valuetext={this.state.rightPosition}
							/>
							<Typography id="label">Bottom Position: {this.state.bottomPosition}</Typography>
							<Slider
								className="inputMargin"
								aria-labelledby="label"
								onChange={this.createSliderOnChange("bottomPosition")}
								value={this.state.bottomPosition}
								max={1}
								min={0}
								step={0.01}
								aria-valuetext={this.state.bottomPosition}
							/>
							<Typography id="label">Left Position: {this.state.leftPosition}</Typography>
							<Slider
								className="inputMargin"
								aria-labelledby="label"
								onChange={this.createSliderOnChange("leftPosition")}
								value={this.state.leftPosition}
								max={1}
								min={0}
								step={0.01}
								aria-valuetext={this.state.leftPosition}
							/>
						</Grid>
						<Grid item sm={4}>
							<TextField
								id="standard-name"
								label="Name"
								value={this.state.name}
								onChange={this.handleChange('name')}
								margin="normal"
							/>
							<Divider/>
						</Grid>
					</Grid>
				</Paper>
			</div>
		);
	}
}
