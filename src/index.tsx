import * as React from 'react'
import styles from './styles.css'
import {ReactNode} from "react";
import {CSSProperties} from "react";
import {LineStyle} from "csstype";
import * as PropTypes from "prop-types";

export type Props = {
	children?: ReactNode;
	style?: CSSProperties;

	innerPadding?: number | string;
	borderWidth?: number | string;
	borderRadius?: number | string;
	borderColour?: string;
	borderType?: LineStyle

	topElement?: ReactNode;
	topPosition?: number;
	topOffset?: string | number;

	rightElement?: ReactNode;
	rightPosition?: number;
	rightOffset?: string | number;

	bottomElement?: ReactNode;
	bottomPosition?: number;
	bottomOffset?: string | number;

	leftElement?: ReactNode;
	leftPosition?: number;
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

type PositionPercent = {
	primary: string;
	secondary: string;
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

function parsePercentage(float: number = 0.5): PositionPercent {
	if (float > 1) {
		float = 1;
	} else if (float < 0) {
		float = 0;
	}
	return {primary: float * 100 + "%", secondary: (1 - float) * 100 + "%"}
}

const ReactBorderWrapper: React.FunctionComponent<Props> = (props: Props): JSX.Element => {

	const positions: Positions = determineLocations(props);
	const childrenStyle: CSSProperties = determineChildStyle(props, positions);
	const topPosition: PositionPercent = parsePercentage(props.topPosition);
	const rightPosition: PositionPercent = parsePercentage(props.rightPosition);
	const bottomPosition: PositionPercent = parsePercentage(props.bottomPosition);
	const leftPosition: PositionPercent = parsePercentage(props.leftPosition);

	return (
		<div className={styles.ReactBorderWrapperParent} style={props.style}>

			<div className={styles.ReactBorderWrapperBorderHorizontalParent}>
				<div
					className={styles.ReactBorderWrapperCorner}
					style={{
						borderTopLeftRadius: props.borderRadius,
						width: props.borderRadius,
						borderTop: props.borderType,
						borderLeft: props.borderType,
						borderTopWidth: props.borderWidth,
						borderLeftWidth: props.borderWidth,
						borderTopColor: props.borderColour,
						borderLeftColor: props.borderColour,
						marginTop: props.topOffset,
						marginLeft: props.leftOffset,
						minHeight: props.topOffset,
					}}
				/>
				<div
					style={{
						borderTop: props.borderType,
						borderTopWidth: props.borderWidth,
						width: topPosition.primary,
						marginTop: props.topOffset
					}}
				/>
				<div>
					{props.topElement}
				</div>
				<div
					style={{
						borderTop: props.borderType,
						borderTopWidth: props.borderWidth,
						width: topPosition.secondary,
						marginTop: props.topOffset
					}}
				/>
				<div
					className={styles.ReactBorderWrapperCorner}
					style={{
						borderTopRightRadius: props.borderRadius,
						width: props.borderRadius,
						borderTop: props.borderType,
						borderRight: props.borderType,
						borderTopWidth: props.borderWidth,
						borderRightWidth: props.borderWidth,
						borderTopColor: props.borderColour,
						borderRightColor: props.borderColour,
						marginTop: props.topOffset,
						minHeight: props.borderRadius,
						marginRight: props.rightOffset,
					}}
				/>
			</div>

			<div className={styles.ReactBorderWrapperBorderChildren}>

				<div className={styles.ReactBorderWrapperBorderVerticalParent}>
					<div
						style={{
							borderLeft: props.borderType,
							borderLeftWidth: props.borderWidth,
							height: leftPosition.primary,
							marginLeft: props.leftOffset
						}}
					/>
					<div style={{alignSelf: "flex-start"}}>
						{props.leftElement}
					</div>
					<div
						style={{
							borderLeft: props.borderType,
							borderLeftWidth: props.borderWidth,
							height: leftPosition.secondary,
							marginLeft: props.leftOffset
						}}
					/>
				</div>

				<div style={childrenStyle}>
					{props.children}
				</div>

				<div className={styles.ReactBorderWrapperBorderVerticalParent}>
					<div
						style={{
							borderRight: props.borderType,
							borderRightWidth: props.borderWidth,
							height: rightPosition.primary,
							marginRight: props.rightOffset,
						}}
					/>
					<div className={styles.ReactBorderWrapperBorderRightElement}>
						{props.rightElement}
					</div>
					<div
						style={{
							borderRight: props.borderType,
							borderRightWidth: props.borderWidth,
							height: rightPosition.secondary,
							marginRight: props.rightOffset,
						}}
					/>
				</div>

			</div>

			<div className={styles.ReactBorderWrapperBorderHorizontalParent}>
				<div
					style={{
						borderBottomLeftRadius: props.borderRadius,
						width: props.borderRadius,
						height: props.borderRadius,
						borderBottom: props.borderType,
						borderLeft: props.borderType,
						borderBottomWidth: props.borderWidth,
						borderLeftWidth: props.borderWidth,
						borderBottomColor: props.borderColour,
						borderLeftColor: props.borderColour,
						minHeight: props.borderRadius,
						marginBottom: props.bottomOffset,
						marginLeft: props.leftOffset,
					}}
				/>
				<div
					style={{
						borderBottom: props.borderType,
						borderBottomWidth: props.borderWidth,
						width: bottomPosition.primary,
						marginBottom: props.bottomOffset
					}}
				/>
				<div
					style={{
						alignSelf: "flex-end"
					}}
				>
					{props.bottomElement}
				</div>
				<div
					style={{
						borderBottom: props.borderType,
						borderBottomWidth: props.borderWidth,
						width: bottomPosition.secondary,
						marginBottom: props.bottomOffset
					}}
				/>
				<div
					style={{
						borderBottomRightRadius: props.borderRadius,
						width: props.borderRadius,
						height: props.borderRadius,
						borderBottom: props.borderType,
						borderRight: props.borderType,
						borderBottomWidth: props.borderWidth,
						borderRightWidth: props.borderWidth,
						borderBottomColor: props.borderColour,
						borderRightColor: props.borderColour,
						marginBottom: props.bottomOffset,
						minHeight: props.borderRadius,
						marginRight: props.rightOffset,
					}}
				/>
			</div>
		</div>
	)
};

ReactBorderWrapper.propTypes = {
	children: PropTypes.element,
	style: PropTypes.object,
	innerPadding: PropTypes.oneOf(["number", "string"]),
	borderWidth: PropTypes.oneOf(["number", "string"]),
	borderRadius: PropTypes.oneOf(["number", "string"]),
	borderColour: PropTypes.string,
	borderType: PropTypes.string,
	topElement: PropTypes.element,
	topPosition: PropTypes.number,
	topOffset: PropTypes.oneOf(["number", "string"]),
	rightElement: PropTypes.element,
	rightPosition: PropTypes.number,
	rightOffset: PropTypes.oneOf(["number", "string"]),
	bottomElement: PropTypes.element,
	bottomPosition: PropTypes.number,
	bottomOffset: PropTypes.oneOf(["number", "string"]),
	leftElement: PropTypes.element,
	leftPosition: PropTypes.number,
	leftOffset: PropTypes.oneOf(["number", "string"]),
} as { [key in keyof Props]: any };

ReactBorderWrapper.defaultProps = {
	borderWidth: "4px",
	innerPadding: "20px",
	borderRadius: "15px",
	borderColour: "#000000",
	borderType: "solid",
	topOffset: "0px",
	rightOffset: "3px",
	bottomOffset: "0px",
	leftOffset: "3px",
};

export default ReactBorderWrapper
