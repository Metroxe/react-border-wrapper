import React, {Component} from "react";
import BorderWrapper from "react-border-wrapper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

export default class App extends Component {

	state = {
		topPosition: 0.1,
		rightPosition: 0.1,
		bottomPosition: 0.9,
		leftPosition: 0.9,
		topOffset: 8,
		rightOffset: 8,
		bottomOffset: 8,
		leftOffset: 8,
		topGap: 4,
		rightGap: 4,
		bottomGap: 4,
		leftGap: 4,
	};

	horizontalImage = (
		<div style={{width: "100px"}}>
			<img
				style={{width: "100px"}}
				src="https://via.placeholder.com/2000x400.png?text=Your+Logo"
				alt="Placeholder"
			/>
		</div>
	);

	verticalImage = (
		<div style={{height: "100px"}}>
			<img
				style={{height: "100px"}}
				src="https://via.placeholder.com/400x2000.png?text=Your+Logo"
				alt="Placeholder"
			/>
		</div>
	);

	createOnChange = (key) => {
		return (event) => {
			this.setState({[key]: event.target.value})
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
						topElement={this.horizontalImage}
						topPosition={this.state.topPosition}
						topOffset={this.state.topOffset + "px"}
						topGap={this.state.topGap + "px"}

						rightElement={this.verticalImage}
						rightPosition={this.state.rightPosition}
						rightOffset={this.state.rightOffset + "px"}
						rightGap={this.state.rightGap + "px"}

						bottomElement={this.horizontalImage}
						bottomPosition={this.state.bottomPosition}
						bottomOffset={this.state.bottomOffset + "px"}
						bottomGap={this.state.bottomGap + "px"}

						leftElement={this.verticalImage}
						leftPosition={this.state.leftPosition}
						leftOffset={this.state.leftOffset + "px"}
						leftGap={this.state.leftGap + "px"}

						innerPadding="50px"
					>
						<h1 style={{margin: 0}}>Hey there</h1>
						<h2 style={{margin: 0}}>I'm Rockin a Sitch</h2>
					</BorderWrapper>
				</Paper>

				<Paper style={{textAlign: "center", padding: "50px", marginBottom: "10px", marginTop: "20px"}}>
					<TextField
						className="TextField"
						variant="outlined"
						label="Top Position"
						type="number"
						value={this.state.topPosition.toString(10)}
						onChange={this.createOnChange("topPosition")}
						InputProps={{
							endAdornment: <InputAdornment position="end">%</InputAdornment>,
						}}
					/>
					<TextField
						className="TextField"
						variant="outlined"
						label="Right Position"
						type="number"
						value={this.state.rightPosition.toString(10)}
						onChange={this.createOnChange("rightPosition")}
						InputProps={{
							endAdornment: <InputAdornment position="end">%</InputAdornment>,
						}}
					/>
					<TextField
						className="TextField"
						variant="outlined"
						label="Bottom Position"
						type="number"
						value={this.state.bottomPosition.toString(10)}
						onChange={this.createOnChange("bottomPosition")}
						InputProps={{
							endAdornment: <InputAdornment position="end">%</InputAdornment>,
						}}
					/>
					<TextField
						className="TextField"
						variant="outlined"
						label="Left Position"
						type="number"
						value={this.state.leftPosition.toString(10)}
						onChange={this.createOnChange("leftPosition")}
						InputProps={{
							endAdornment: <InputAdornment position="end">%</InputAdornment>,
						}}
					/>
					<br/>
					<TextField
						className="TextField"
						variant="outlined"
						label="Top Offset"
						type="number"
						value={this.state.topOffset.toString(10)}
						onChange={this.createOnChange("topOffset")}
						InputProps={{
							endAdornment: <InputAdornment position="end">px</InputAdornment>,
						}}
					/>
					<TextField
						className="TextField"
						variant="outlined"
						label="Right Offset"
						type="number"
						value={this.state.rightOffset.toString(10)}
						onChange={this.createOnChange("rightOffset")}
						InputProps={{
							endAdornment: <InputAdornment position="end">px</InputAdornment>,
						}}
					/>
					<TextField
						className="TextField"
						variant="outlined"
						label="Bottom Offset"
						type="number"
						value={this.state.bottomOffset.toString(10)}
						onChange={this.createOnChange("bottomOffset")}
						InputProps={{
							endAdornment: <InputAdornment position="end">px</InputAdornment>,
						}}
					/>
					<TextField
						className="TextField"
						variant="outlined"
						label="Left Offset"
						type="number"
						value={this.state.leftOffset.toString(10)}
						onChange={this.createOnChange("leftOffset")}
						InputProps={{
							endAdornment: <InputAdornment position="end">px</InputAdornment>,
						}}
					/>
					<br/>
					<TextField
						className="TextField"
						variant="outlined"
						label="Top Gap"
						type="number"
						value={this.state.topGap.toString(10)}
						onChange={this.createOnChange("topGap")}
						InputProps={{
							endAdornment: <InputAdornment position="end">px</InputAdornment>,
						}}
					/>
					<TextField
						className="TextField"
						variant="outlined"
						label="Right Gap"
						type="number"
						value={this.state.rightGap.toString(10)}
						onChange={this.createOnChange("rightGap")}
						InputProps={{
							endAdornment: <InputAdornment position="end">px</InputAdornment>,
						}}
					/>
					<TextField
						className="TextField"
						variant="outlined"
						label="Bottom Gap"
						type="number"
						value={this.state.bottomGap.toString(10)}
						onChange={this.createOnChange("bottomGap")}
						InputProps={{
							endAdornment: <InputAdornment position="end">px</InputAdornment>,
						}}
					/>
					<TextField
						className="TextField"
						variant="outlined"
						label="Left Gap"
						type="number"
						value={this.state.leftGap.toString(10)}
						onChange={this.createOnChange("leftGap")}
						InputProps={{
							endAdornment: <InputAdornment position="end">px</InputAdornment>,
						}}
					/>
				</Paper>
			</div>
		);
	}
}
