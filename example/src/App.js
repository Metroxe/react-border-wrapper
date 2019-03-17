import React, {Component} from "react";
import BorderWrapper from "react-border-wrapper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import CssBaseline from "@material-ui/core/CssBaseline";
import MenuItem from "@material-ui/core/MenuItem";
import {LargeContent, MediumContent, SmallContent} from "./Content";

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
		showTop: true,
		showLeft: false,
		showRight: false,
		showBottom: false,
		colour: "#000000",
		borderWidth: 5,
		innerPadding: 30,
		borderRadius: 15,
		borderType: "solid",
		content: "medium"
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
			this.setState({[key]: event.target.value});
		};
	};

	render() {

		return (
			<Paper>
				<CssBaseline/>
				<AppBar position="static" color="primary">
					<Toolbar>
						<Typography variant="h6" color="inherit">
							React Border Wrapper
						</Typography>
					</Toolbar>
				</AppBar>

				<Paper style={{textAlign: "center", padding: "50px", marginBottom: "10px", marginTop: "20px"}}>
					<BorderWrapper
						borderColour={this.state.colour}
						borderWidth={this.state.borderWidth + "px"}
						borderRadius={this.state.borderRadius + "px"}
						innerPadding={this.state.innerPadding + "px"}
						borderType={this.state.borderType}

						topElement={this.state.showTop ? this.horizontalImage : undefined}
						topPosition={this.state.topPosition}
						topOffset={this.state.topOffset + "px"}
						topGap={this.state.topGap + "px"}

						rightElement={this.state.showRight ? this.verticalImage : undefined}
						rightPosition={this.state.rightPosition}
						rightOffset={this.state.rightOffset + "px"}
						rightGap={this.state.rightGap + "px"}

						bottomElement={this.state.showBottom ? this.horizontalImage : undefined}
						bottomPosition={this.state.bottomPosition}
						bottomOffset={this.state.bottomOffset + "px"}
						bottomGap={this.state.bottomGap + "px"}

						leftElement={this.state.showLeft ? this.verticalImage : undefined}
						leftPosition={this.state.leftPosition}
						leftOffset={this.state.leftOffset + "px"}
						leftGap={this.state.leftGap + "px"}
					>
						{this.state.content === "large" ? <LargeContent/> : this.state.content === "medium" ?
							<MediumContent/> : <SmallContent/>}
					</BorderWrapper>
				</Paper>

				<Paper style={{textAlign: "center", padding: "50px", marginBottom: "10px", marginTop: "20px"}}>

					<TextField
						className="TextField"
						variant="outlined"
						select={true}
						label="Content Size"
						value={this.state.content}
						margin="normal"
						onChange={this.createOnChange("content")}
					>
						<MenuItem key={"small"} value={"small"}>Small</MenuItem>
						<MenuItem key={"medium"} value={"medium"}>Medium</MenuItem>
						<MenuItem key={"large"} value={"large"}>Large</MenuItem>
					</TextField>
					<TextField
						className="TextField"
						variant="outlined"
						label="Colour"
						type="text"
						value={this.state.colour}
						onChange={this.createOnChange("colour")}
						InputProps={{
							endAdornment: <InputAdornment position="end">#</InputAdornment>
						}}
					/>
					<TextField
						className="TextField"
						variant="outlined"
						label="Border Width"
						type="number"
						value={this.state.borderWidth.toString(10)}
						onChange={this.createOnChange("borderWidth")}
						InputProps={{
							endAdornment: <InputAdornment position="end">px</InputAdornment>
						}}
					/>
					<TextField
						className="TextField"
						variant="outlined"
						label="Inner Padding"
						type="number"
						value={this.state.innerPadding.toString(10)}
						onChange={this.createOnChange("innerPadding")}
						InputProps={{
							endAdornment: <InputAdornment position="end">px</InputAdornment>
						}}
					/>
					<TextField
						className="TextField"
						variant="outlined"
						label="Border Radius"
						type="number"
						value={this.state.borderRadius.toString(10)}
						onChange={this.createOnChange("borderRadius")}
						InputProps={{
							endAdornment: <InputAdornment position="end">px</InputAdornment>
						}}
					/>
					<TextField
						className="TextField"
						variant="outlined"
						select={true}
						label="Border Type"
						value={this.state.borderType}
						margin="normal"
						onChange={this.createOnChange("borderType")}
					>
						<MenuItem key={"dashed"} value={"dashed"}>Dashed</MenuItem>
						<MenuItem key={"dotted"} value={"dotted"}>Dotted</MenuItem>
						<MenuItem key={"double"} value={"double"}>Double</MenuItem>
						<MenuItem key={"groove"} value={"groove"}>Groove</MenuItem>
						<MenuItem key={"hidden"} value={"hidden"}>Hidden</MenuItem>
						<MenuItem key={"inset"} value={"inset"}>Inset</MenuItem>
						<MenuItem key={"none"} value={"none"}>None</MenuItem>
						<MenuItem key={"outset"} value={"outset"}>Outset</MenuItem>
						<MenuItem key={"ridge"} value={"ridge"}>Ridge</MenuItem>
						<MenuItem key={"solid"} value={"solid"}>Solid</MenuItem>
					</TextField>
					<TextField
						className="TextField"
						variant="outlined"
						select={true}
						label="Show Top"
						value={this.state.showTop ? "true" : "false"}
						margin="normal"
						onChange={this.createOnChange("showTop")}
					>
						<MenuItem key={"true"} value={true}>
							True
						</MenuItem>
						<MenuItem key={"false"} value={false}>
							False
						</MenuItem>
					</TextField>
					<TextField
						className="TextField"
						variant="outlined"
						select={true}
						label="Show Right"
						value={this.state.showRight ? "true" : "false"}
						margin="normal"
						onChange={this.createOnChange("showRight")}
					>
						<MenuItem key={"true"} value={true}>
							True
						</MenuItem>
						<MenuItem key={"false"} value={false}>
							False
						</MenuItem>
					</TextField>
					<TextField
						className="TextField"
						variant="outlined"
						select={true}
						label="Show Bottom"
						value={this.state.showBottom ? "true" : "false"}
						margin="normal"
						onChange={this.createOnChange("showBottom")}
					>
						<MenuItem key={"true"} value={true}>
							True
						</MenuItem>
						<MenuItem key={"false"} value={false}>
							False
						</MenuItem>
					</TextField>
					<TextField
						className="TextField"
						variant="outlined"
						select={true}
						label="Show Left"
						value={this.state.showLeft ? "true" : "false"}
						margin="normal"
						onChange={this.createOnChange("showLeft")}
					>
						<MenuItem key={"true"} value={true}>
							True
						</MenuItem>
						<MenuItem key={"false"} value={false}>
							False
						</MenuItem>
					</TextField>
					<TextField
						className="TextField"
						variant="outlined"
						label="Top Position"
						type="number"
						value={this.state.topPosition.toString(10)}
						onChange={this.createOnChange("topPosition")}
						InputProps={{
							endAdornment: <InputAdornment position="end">%</InputAdornment>
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
							endAdornment: <InputAdornment position="end">%</InputAdornment>
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
							endAdornment: <InputAdornment position="end">%</InputAdornment>
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
							endAdornment: <InputAdornment position="end">%</InputAdornment>
						}}
					/>
					<TextField
						className="TextField"
						variant="outlined"
						label="Top Offset"
						type="number"
						value={this.state.topOffset.toString(10)}
						onChange={this.createOnChange("topOffset")}
						InputProps={{
							endAdornment: <InputAdornment position="end">px</InputAdornment>
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
							endAdornment: <InputAdornment position="end">px</InputAdornment>
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
							endAdornment: <InputAdornment position="end">px</InputAdornment>
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
							endAdornment: <InputAdornment position="end">px</InputAdornment>
						}}
					/>
					<TextField
						className="TextField"
						variant="outlined"
						label="Top Gap"
						type="number"
						value={this.state.topGap.toString(10)}
						onChange={this.createOnChange("topGap")}
						InputProps={{
							endAdornment: <InputAdornment position="end">px</InputAdornment>
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
							endAdornment: <InputAdornment position="end">px</InputAdornment>
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
							endAdornment: <InputAdornment position="end">px</InputAdornment>
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
							endAdornment: <InputAdornment position="end">px</InputAdornment>
						}}
					/>
				</Paper>

				{/*<Paper style={{textAlign: "center", padding: "50px", marginBottom: "10px", marginTop: "20px"}}>*/}
				{/**/}
				{/*</Paper>*/}
			</Paper>
		);
	}
}
