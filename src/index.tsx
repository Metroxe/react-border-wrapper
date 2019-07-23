import * as React from 'react'
import {CSSProperties, ReactNode} from 'react'
import styles from './styles.css'
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
	topGap?: string | number;

	rightElement?: ReactNode;
	rightPosition?: number;
	rightOffset?: string | number;
	rightGap?: string | number;

	bottomElement?: ReactNode;
	bottomPosition?: number;
	bottomOffset?: string | number;
	bottomGap?: string | number;

	leftElement?: ReactNode;
	leftPosition?: number;
	leftOffset?: string | number;
	leftGap?: string | number;
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
	primary?: string;
	secondary?: string;
}

function determineLocations({bottomElement, leftElement, topElement, rightElement}: Props): Positions {
	const top: boolean = topElement !== undefined;
	const right: boolean = rightElement !== undefined;
	const bottom: boolean = bottomElement !== undefined;
	const left: boolean = leftElement !== undefined;
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
	return {primary: Math.round(float * 100) + "%", secondary: Math.round((1 - float) * 100) + "%"}
}

type valueType = number | string | undefined

const {ReactBorderWrapperParent, ReactBorderWrapperBorderVerticalParent, ReactBorderWrapperCorner, ReactBorderWrapperBorderHorizontalParent, ReactBorderWrapperBorderChildren, ReactBorderWrapperBorderRightElement} = styles;

const ReactBorderWrapper: React.FunctionComponent<Props> = (props: Props): JSX.Element => {

	const positions: Positions = determineLocations(props);

	const undefinedPosition: PositionPercent = {primary: "50%", secondary: "50%"};
	const topPosition: PositionPercent = positions.top ? parsePercentage(props.topPosition) : undefinedPosition;
	const rightPosition: PositionPercent = positions.right ? parsePercentage(props.rightPosition) : undefinedPosition;
	const bottomPosition: PositionPercent = positions.bottom ? parsePercentage(props.bottomPosition) : undefinedPosition;
	const leftPosition: PositionPercent = positions.left ? parsePercentage(props.leftPosition) : undefinedPosition;

	const topOffset: valueType = positions.top ? props.topOffset : undefined;
	const rightOffset: valueType = positions.right ? props.rightOffset : undefined;
	const bottomOffset: valueType = positions.bottom ? props.bottomOffset : undefined;
	const leftOffset: valueType = positions.left ? props.leftOffset : undefined;

	const topGap: valueType = positions.top ? props.topGap : undefined;
	const rightGap: valueType = positions.right ? props.rightGap : undefined;
	const bottomGap: valueType = positions.bottom ? props.bottomGap : undefined;
	const leftGap: valueType = positions.left ? props.leftGap : undefined;

	return (
		<div className={ReactBorderWrapperParent} style={props.style}>

			<div className={ReactBorderWrapperBorderHorizontalParent}>
				<div
					className={ReactBorderWrapperCorner}
					style={{
						borderTopLeftRadius: props.borderRadius,
						borderTop: props.borderType,
						borderLeft: props.borderType,
						borderTopWidth: props.borderWidth,
						borderLeftWidth: props.borderWidth,
						borderTopColor: props.borderColour,
						borderLeftColor: props.borderColour,
						marginTop: topOffset,
						marginLeft: leftOffset,
						minHeight: props.borderRadius,
						minWidth: props.borderRadius,
					}}
				/>
				<div
					style={{
						borderTop: props.borderType,
						borderTopWidth: props.borderWidth,
						borderTopColor: props.borderColour,
						width: topPosition.primary,
						marginTop: topOffset
					}}
				/>
				<div
					style={{
						paddingLeft: topGap,
						paddingRight: topGap,
					}}
				>
					{props.topElement}
				</div>
				<div
					style={{
						borderTop: props.borderType,
						borderTopWidth: props.borderWidth,
						borderTopColor: props.borderColour,
						width: topPosition.secondary,
						marginTop: topOffset
					}}
				/>
				<div
					className={ReactBorderWrapperCorner}
					style={{
						borderTopRightRadius: props.borderRadius,
						borderTop: props.borderType,
						borderRight: props.borderType,
						borderTopWidth: props.borderWidth,
						borderRightWidth: props.borderWidth,
						borderTopColor: props.borderColour,
						borderRightColor: props.borderColour,
						marginTop: topOffset,
						minHeight: props.borderRadius,
						minWidth: props.borderRadius,
						marginRight: rightOffset,
					}}
				/>
			</div>

			<div className={ReactBorderWrapperBorderChildren}>

				<div className={ReactBorderWrapperBorderVerticalParent}>
					<div
						style={{
							borderLeft: props.borderType,
							borderLeftWidth: props.borderWidth,
							borderLeftColor: props.borderColour,
							height: leftPosition.primary,
							marginLeft: leftOffset
						}}
					/>
					<div
						style={{
							alignSelf: "flex-start",
							paddingTop: leftGap,
							paddingBottom: leftGap,
						}}
					>
						{props.leftElement}
					</div>
					<div
						style={{
							borderLeft: props.borderType,
							borderLeftWidth: props.borderWidth,
							borderLeftColor: props.borderColour,
							height: leftPosition.secondary,
							marginLeft: leftOffset
						}}
					/>
				</div>

				<div style={{
					padding: props.innerPadding
				}}>
					{props.children}
				</div>

				<div className={ReactBorderWrapperBorderVerticalParent}>
					<div
						style={{
							borderRight: props.borderType,
							borderRightColor: props.borderColour,
							borderRightWidth: props.borderWidth,
							height: rightPosition.primary,
							marginRight: rightOffset,
						}}
					/>
					<div
						className={ReactBorderWrapperBorderRightElement}
						style={{
							paddingTop: rightGap,
							paddingBottom: rightGap,
						}}
					>
						{props.rightElement}
					</div>
					<div
						style={{
							borderRight: props.borderType,
							borderRightColor: props.borderColour,
							borderRightWidth: props.borderWidth,
							height: rightPosition.secondary,
							marginRight: rightOffset,
						}}
					/>
				</div>

			</div>

			<div className={ReactBorderWrapperBorderHorizontalParent}>
				<div
					style={{
						borderBottomLeftRadius: props.borderRadius,
						borderBottom: props.borderType,
						borderLeft: props.borderType,
						borderBottomWidth: props.borderWidth,
						borderLeftWidth: props.borderWidth,
						borderBottomColor: props.borderColour,
						borderLeftColor: props.borderColour,
						minHeight: props.borderRadius,
						minWidth: props.borderRadius,
						marginBottom: bottomOffset,
						marginLeft: leftOffset,
					}}
				/>
				<div
					style={{
						borderBottom: props.borderType,
						borderBottomWidth: props.borderWidth,
						borderBottomColor: props.borderColour,
						width: bottomPosition.primary,
						marginBottom: bottomOffset
					}}
				/>
				<div
					style={{
						alignSelf: "flex-end",
						paddingLeft: bottomGap,
						paddingRight: bottomGap,
					}}
				>
					{props.bottomElement}
				</div>
				<div
					style={{
						borderBottom: props.borderType,
						borderBottomWidth: props.borderWidth,
						borderBottomColor: props.borderColour,
						width: bottomPosition.secondary,
						marginBottom: bottomOffset
					}}
				/>
				<div
					style={{
						borderBottomRightRadius: props.borderRadius,
						borderBottom: props.borderType,
						borderRight: props.borderType,
						borderBottomWidth: props.borderWidth,
						borderRightWidth: props.borderWidth,
						borderBottomColor: props.borderColour,
						borderRightColor: props.borderColour,
						marginBottom: bottomOffset,
						minHeight: props.borderRadius,
						minWidth: props.borderRadius,
						marginRight: rightOffset,
					}}
				/>
			</div>
		</div>
	)
};

ReactBorderWrapper.propTypes = {
	children: PropTypes.element,
	style: PropTypes.object,
	innerPadding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	borderWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	borderColour: PropTypes.string,
	borderType: PropTypes.string,
	topElement: PropTypes.element,
	topPosition: PropTypes.number,
	topOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	topGap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	rightElement: PropTypes.element,
	rightPosition: PropTypes.number,
	rightOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	rightGap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	bottomElement: PropTypes.element,
	bottomPosition: PropTypes.number,
	bottomOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	bottomGap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	leftElement: PropTypes.element,
	leftPosition: PropTypes.number,
	leftOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	leftGap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
	topGap: "0px",
	rightGap: "0px",
	bottomGap: "0px",
	leftGap: "0px",
};

export default ReactBorderWrapper
