import {CSSProperties, ReactNode} from "react";
import styles from "./styles.css";
import * as React from "react";
import {Props} from "./index";
import {FlexDirectionProperty} from "csstype";

function parsePosition(position?: string | number): string {
	return position as string;
}

export function createBorder(props: Props, loc: "top" | "right" | "bottom" | "left"): ReactNode {

	const top: boolean = loc === "top";
	const right: boolean = loc === "right";
	const bottom: boolean = loc === "bottom";
	const left: boolean = loc === "left";
	let element: Element;
	let invert: boolean;
	let position: string;
	let paddingKey: "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft";
	let lengthKey: "width" | "height";
	let flexDirection: FlexDirectionProperty;
	let firstRadiusKey: "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomRightRadius" | "borderBottomLeftRadius";
	let lastRadiusKey: "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomRightRadius" | "borderBottomLeftRadius";
	let borderPrimaryWidthKey: "borderTopWidth" | "borderRightWidth" | "borderBottomWidth" | "borderLeftWidth";
	let borderPrimaryColourKey: "borderTopColor" | "borderRightColor" | "borderBottomColor" | "borderLeftColor";
	let borderSecondaryWidthKey: "borderTopWidth" | "borderRightWidth" | "borderBottomWidth" | "borderLeftWidth";
	let borderSecondaryColourKey: "borderTopColor" | "borderRightColor" | "borderBottomColor" | "borderLeftColor";
	let borderTertiaryWidthKey: "borderTopWidth" | "borderRightWidth" | "borderBottomWidth" | "borderLeftWidth";
	let borderTertiaryColourKey: "borderTopColor" | "borderRightColor" | "borderBottomColor" | "borderLeftColor";
	let marginKey: "marginTop" | "marginRight" | "marginBottom" | "marginLeft";
	let marginValue: number | string;

	switch (loc) {
		case("top"):
			element = props.topElement as Element;
			invert = props.topInvertSide as boolean;
			position = parsePosition(props.topPosition);
			paddingKey = "paddingLeft";
			lengthKey = "width";
			flexDirection = invert ? "row-reverse" : "row";
			firstRadiusKey = "borderTopLeftRadius";
			lastRadiusKey = "borderTopRightRadius";
			borderPrimaryWidthKey = "borderTopWidth";
			borderPrimaryColourKey = "borderTopColor";
			borderSecondaryWidthKey = "borderLeftWidth";
			borderSecondaryColourKey = "borderLeftColor";
			borderTertiaryWidthKey = "borderRightWidth";
			borderTertiaryColourKey = "borderRightColor";
			marginKey = "marginTop";
			marginValue = props.topOffset as number | string;
			break;
		case("right"):
			element = props.rightElement as Element;
			invert = props.rightInvertSide as boolean;
			position = parsePosition(props.rightPosition);
			paddingKey = "paddingRight";
			lengthKey = "height";
			flexDirection = invert ? "column-reverse" : "column";
			firstRadiusKey = "borderTopRightRadius";
			lastRadiusKey = "borderBottomRightRadius";
			borderPrimaryWidthKey = "borderRightWidth";
			borderPrimaryColourKey = "borderRightColor";
			borderSecondaryWidthKey = "borderTopWidth";
			borderSecondaryColourKey = "borderTopColor";
			borderTertiaryWidthKey = "borderBottomWidth";
			borderTertiaryColourKey = "borderBottomColor";
			marginKey = "marginLeft";
			marginValue = props.rightOffset as number | string;
			break;
		case("bottom"):
			element = props.bottomElement as Element;
			invert = props.bottomInvertSide as boolean;
			position = parsePosition(props.bottomPosition);
			paddingKey = "paddingBottom";
			lengthKey = "width";
			flexDirection = invert ? "row-reverse" : "row";
			firstRadiusKey = invert ? "borderBottomRightRadius" : "borderBottomLeftRadius";
			lastRadiusKey = invert ? "borderBottomLeftRadius" : "borderBottomRightRadius";
			borderPrimaryWidthKey = "borderBottomWidth";
			borderPrimaryColourKey = "borderBottomColor";
			borderSecondaryWidthKey = "borderLeftWidth";
			borderSecondaryColourKey = "borderLeftColor";
			borderTertiaryWidthKey = "borderRightWidth";
			borderTertiaryColourKey = "borderRightColor";
			marginKey = "marginBottom";
			marginValue = props.bottomOffset as number | string;
			break;
		default: // left
			element = props.leftElement as Element;
			invert = props.leftInvertSide as boolean;
			position = parsePosition(props.leftPosition);
			paddingKey = "paddingTop";
			lengthKey = "height";
			flexDirection = invert ? "column-reverse" : "column";
			firstRadiusKey = invert ? "borderBottomLeftRadius" : "borderTopLeftRadius";
			lastRadiusKey = "borderBottomLeftRadius";
			borderPrimaryWidthKey = "borderLeftWidth";
			borderPrimaryColourKey = "borderLeftColor";
			borderSecondaryWidthKey = "borderTopWidth";
			borderSecondaryColourKey = "borderTopColor";
			borderTertiaryWidthKey = "borderBottomWidth";
			borderTertiaryColourKey = "borderBottomColor";
			marginKey = "marginRight";
			marginValue = props.leftOffset as number | string;
			break;
	}

	const parentStyle: CSSProperties = {
		flexDirection,
	};

	const firstStyle: CSSProperties = {
		borderTop: top ? props.borderType : "none",
		borderRight: right ? props.borderType : "none",
		borderBottom: bottom ? props.borderType : "none",
		borderLeft: (left || top || bottom) ? props.borderType : "none",
		[borderPrimaryWidthKey]: props.borderWidth,
		[borderPrimaryColourKey]: props.borderColour,
		[borderSecondaryWidthKey]: props.borderWidth,
		[borderSecondaryColourKey]: props.borderColour,
		[paddingKey]: parsePosition(position),
		[firstRadiusKey]: (top || bottom) ? props.borderRadius : 0,
		[marginKey]: marginValue,
	};

	const lastStyle: CSSProperties = {
		borderTop: top ? props.borderType : "none",
		borderRight: (right || top || bottom) ? props.borderType : "none",
		borderBottom: bottom ? props.borderType : "none",
		borderLeft: left ? props.borderType : "none",
		[borderPrimaryWidthKey]: props.borderWidth,
		[borderPrimaryColourKey]: props.borderColour,
		[borderTertiaryWidthKey]: props.borderWidth,
		[borderTertiaryColourKey]: props.borderColour,
		[lengthKey]: "100%",
		[lastRadiusKey]: (top || bottom) ? props.borderRadius : 0,
		[marginKey]: marginValue,
	};

	const elementStyle: CSSProperties = {};
	if (invert) {
		return (
			<div className={styles.ReactBorderWrapperBorderParent} style={parentStyle}>
				<div style={firstStyle}/>
				<div style={elementStyle}>
					{element}
				</div>
				<div style={lastStyle}/>
			</div>
		)
	} else {
		return (
			<div className={styles.ReactBorderWrapperBorderParent} style={parentStyle}>
				<div style={firstStyle}/>
				<div style={elementStyle}>
					{element}
				</div>
				<div style={lastStyle}/>
			</div>
		)
	}


}