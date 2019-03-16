import React, {Component} from "react";

import BorderWrapper from "react-border-wrapper";

export default class App extends Component {
	render() {
		return (
			<div style={{margin: "50px"}}>
				<BorderWrapper
					topElement={
						<p style={{margin: 0}}>Logo</p>
					}
					leftElement={
						<p style={{margin: 0}}>L<br/>o<br/>g<br/>o</p>
					}
					leftInvertSide={true}
					bottomElement={
						<p style={{margin: 0}}>Logo</p>
					}
					bottomInvertSide={true}
					rightElement={
						<p style={{margin: 0}}>L<br/>o<br/>g<br/>o</p>
					}
					innerPadding="50px"
				>
					<h1 style={{margin: 0}}>Hey there</h1>
					<h2 style={{margin: 0}}>I'm Rockin a Sitch</h2>
				</BorderWrapper>
			</div>
		);
	}
}
