import {CSSProperties, ReactNode} from "react";
import styles from "./styles.css";
import * as React from "react";
import {Props} from "./index";

function parsePosition(position?: string | number): string {
	return position as string;
}

export function createBorder(props: Props, loc: "top" | "right" | "bottom" | "left"): ReactNode {

	let element: Element;
	let position: string;
	let paddingKey: "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft";
	let lengthKey: "width" | "height";
	let flexDirection: "row" | "column";
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
			position = parsePosition(props.topPosition);
			paddingKey = "paddingLeft";
			lengthKey = "width";
			flexDirection = "row";
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
			position = parsePosition(props.rightPosition);
			paddingKey = "paddingRight";
			lengthKey = "height";
			flexDirection = "column";
			firstRadiusKey = "borderTopRightRadius";
			lastRadiusKey = "borderBottomRightRadius";
			borderPrimaryWidthKey = "borderRightWidth";
			borderPrimaryColourKey = "borderRightColor";
			borderSecondaryWidthKey = "borderTopWidth";
			borderSecondaryColourKey = "borderTopColor";
			borderTertiaryWidthKey = "borderBottomWidth";
			borderTertiaryColourKey = "borderBottomColor";
			marginKey = "marginRight";
			marginValue = props.rightOffset as number | string;
			break;
		case("bottom"):
			element = props.bottomElement as Element;
			position = parsePosition(props.bottomPosition);
			paddingKey = "paddingBottom";
			lengthKey = "width";
			flexDirection = "row";
			firstRadiusKey = "borderBottomLeftRadius";
			lastRadiusKey = "borderBottomRightRadius";
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
			position = parsePosition(props.leftPosition);
			paddingKey = "paddingTop";
			lengthKey = "height";
			flexDirection = "column";
			firstRadiusKey = "borderTopLeftRadius";
			lastRadiusKey = "borderBottomLeftRadius";
			borderPrimaryWidthKey = "borderLeftWidth";
			borderPrimaryColourKey = "borderLeftColor";
			borderSecondaryWidthKey = "borderTopWidth";
			borderSecondaryColourKey = "borderTopColor";
			borderTertiaryWidthKey = "borderBottomWidth";
			borderTertiaryColourKey = "borderBottomColor";
			marginKey = "marginLeft";
			marginValue = props.leftOffset as number | string;
			break;
	}

	const parentStyle: CSSProperties = {
		flexDirection,
	};

	const firstStyle: CSSProperties = {
		borderTop: (loc === "top" ||  loc === "left" || loc === "right") ? props.borderType : "none",
		borderRight: loc === "right" ? props.borderType : "none",
		borderBottom: (loc === "bottom" || loc === "left") ? props.borderType : "none",
		borderLeft: (loc === "left" || loc === "top" || loc === "bottom") ? props.borderType : "none",
		[borderPrimaryWidthKey]: props.borderWidth,
		[borderPrimaryColourKey]: props.borderColour,
		[borderSecondaryWidthKey]: props.borderWidth,
		[borderSecondaryColourKey]: props.borderColour,
		[paddingKey]: parsePosition(position),
		[firstRadiusKey]: props.borderRadius,
		[marginKey]: marginValue,
		paddingLeft: "15px",
	};

	const lastStyle: CSSProperties = {
		borderTop: (loc === "top" || loc === "right") ? props.borderType : "none",
		borderRight: (loc === "right" || loc === "top" || loc === "bottom") ? props.borderType : "none",
		borderBottom: (loc === "bottom" ||  loc === "left" || loc === "right") ? props.borderType : "none",
		borderLeft: loc === "left" ? props.borderType : "none",
		[borderPrimaryWidthKey]: props.borderWidth,
		[borderPrimaryColourKey]: props.borderColour,
		[borderTertiaryWidthKey]: props.borderWidth,
		[borderTertiaryColourKey]: props.borderColour,
		[lengthKey]: "100%",
		[marginKey]: marginValue,
		[lastRadiusKey]: props.borderRadius,
	};

	const elementStyle: CSSProperties = {};

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