import React, {Component} from "react";

import BorderWrapper from "react-border-wrapper";

export default class App extends Component {
	render() {
		return (
			<div style={{margin: "50px"}}>
				<BorderWrapper
					topElement={
						<h2 style={{margin: 0}}>Logo</h2>
					}
					bottomElement={
						<h2 style={{margin: 0}}>Logo</h2>
					}
					innerPadding="10px"
				>
					<h1 style={{margin: 0}}>Hey there</h1>
					<h2 style={{margin: 0}}>I'm Rockin a Sitch</h2>
				</BorderWrapper>
			</div>
		);
	}
}
