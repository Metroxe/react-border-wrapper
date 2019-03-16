import * as React from 'react'
import styles from './styles.css'
import {ReactNode} from "react";
import {CSSProperties} from "react";
import {LineStyle} from "csstype";
import {createBorder} from "./createBorder";

export type Props = {
	children?: ReactNode;
	style?: CSSProperties;

	innerPadding?: number | string;
	borderWidth?: number | string;
	borderRadius?: number | string;
	borderColour?: string;
	borderType?: LineStyle
	elementPadding?: string | number;

	topElement?: ReactNode;
	topPosition?: string | number;
	topOffset?: string | number;

	rightElement?: ReactNode;
	rightPosition?: string | number;
	rightOffset?: string | number;

	bottomElement?: ReactNode;
	bottomPosition?: string | number;
	bottomOffset?: string | number;

	leftElement?: ReactNode;
	leftPosition?: string | number;
	leftOffset?: string | number;
}

type Positions = {
	top: boolean,
	right: boolean,
	bottom: boolean,
	left: boolean,
	topRight: boolean,
	bottomRight: boolean,
	bottomLeft: boolean,
	topLeft: boolean,
}

function determineChildStyle(props: Props, positions: Positions): CSSProperties {

	return {
		padding: props.innerPadding,
		borderRadius: props.innerPadding,
		borderColor: props.borderColour,
		border: props.borderType,

		// Radius
		borderTopRightRadius: positions.topRight ? 0 : props.borderRadius,
		borderBottomRightRadius: positions.bottomRight ? 0 : props.borderRadius,
		borderBottomLeftRadius: positions.bottomLeft ? 0 : props.borderRadius,
		borderTopLeftRadius: positions.topLeft ? 0 : props.borderRadius,

		// Width
		borderTopWidth: positions.top ? 0 : props.borderWidth,
		borderRightWidth: positions.right ? 0 : props.borderWidth,
		borderBottomWidth: positions.bottom ? 0 : props.borderWidth,
		borderLeftWidth: positions.left ? 0 : props.borderWidth,

		// Padding
		paddingTop: positions.top ? 0 : props.innerPadding,
		paddingRight: positions.right ? 0 : props.innerPadding,
		paddingBottom: positions.bottom ? 0 : props.innerPadding,
		paddingLeft: positions.left ? 0 : props.innerPadding,
	}
}

function determineLocations(props: Props): Positions {
	const top: boolean = props.topElement !== undefined;
	const right: boolean = props.rightElement !== undefined;
	const bottom: boolean = props.bottomElement !== undefined;
	const left: boolean = props.leftElement !== undefined;
	const topRight: boolean = top || right;
	const bottomRight: boolean = right || bottom;
	const bottomLeft: boolean = bottom || left;
	const topLeft: boolean = left || top;
	return {top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft}
}

const ReactBorderWrapper: React.FunctionComponent<Props> = (props: Props): JSX.Element => {

	const positions: Positions = determineLocations(props);
	const childrenStyle: CSSProperties = determineChildStyle(props, positions);
	const children: ReactNode = (
		<div style={childrenStyle}>
			{props.children}
		</div>
	);
	const topBorder: ReactNode = positions.top && createBorder(props, "top");
	// const rightBorder: ReactNode = positions.right && createBorder(props, props.rightElement, props.rightPosition as string | number);
	const bottomBorder: ReactNode = positions.bottom && createBorder(props, "bottom");
	// const leftBorder: ReactNode = positions.left && createBorder(props, props.leftElement, props.leftPosition as string | number);

	return (
		<div className={styles.ReactBorderWrapperParent} style={props.style}>
			{topBorder}
			{children}
			{bottomBorder}
		</div>
	)
};

ReactBorderWrapper.defaultProps = {
	borderWidth: "4px",
	innerPadding: "20px",
	borderRadius: "15px",
	borderColour: "#000000",
	borderType: "solid",
	topOffset: "10px",
	rightOffset: "10px",
	bottomOffset: "10px",
	leftOffset: "10px",
};

export default ReactBorderWrapper
